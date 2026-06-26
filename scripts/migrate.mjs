import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "src");

const clientComponents = [
  "components/Layout.tsx",
  "components/Header.tsx",
  "components/Footer.tsx",
  "components/ScrollToTop.tsx",
  "components/Breadcrumbs.tsx",
  "components/NavLink.tsx",
  "components/PhoneInput.tsx",
  "components/PageHero.tsx",
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

function addUseClient(filePath, content) {
  if (content.startsWith('"use client"') || content.startsWith("'use client'")) return content;
  return `"use client";\n\n${content}`;
}

function migrateFileContent(content) {
  let result = content;

  // Remove SEO component usage
  result = result.replace(/^import SEO from ["']@\/components\/SEO["'];\n/gm, "");
  result = result.replace(/^\s*<SEO[^>]*\/>\n?/gm, "");

  // Router migrations
  result = result.replace(
    /import\s*\{([^}]+)\}\s*from\s*["']react-router-dom["'];?\n/g,
    (match, imports) => {
      const parts = imports.split(",").map((s) => s.trim());
      const nextImports = [];
      const remaining = [];

      for (const part of parts) {
        if (part === "Link") nextImports.push('import Link from "next/link";');
        else if (part === "useNavigate") nextImports.push('import { useRouter } from "next/navigation";');
        else if (part === "useLocation") nextImports.push('import { usePathname } from "next/navigation";');
        else if (part === "Navigate" || part === "NavLink" || part.startsWith("NavLink")) {
          // handled separately
        } else remaining.push(part);
      }

      if (remaining.length) return match;
      return nextImports.join("\n") + (nextImports.length ? "\n" : "");
    }
  );

  result = result.replace(/\bconst navigate = useNavigate\(\);/g, "const router = useRouter();");
  result = result.replace(/\bnavigate\(/g, "router.push(");

  result = result.replace(/\bconst \{ pathname \} = useLocation\(\);/g, "const pathname = usePathname();");
  result = result.replace(/\bconst location = useLocation\(\);/g, "const pathname = usePathname();");
  result = result.replace(/\blocation\.pathname\b/g, "pathname");

  // Link to -> href
  result = result.replace(/<Link(\s)/g, "<Link$1");
  result = result.replace(/\bto=\{/g, "href={");
  result = result.replace(/\bto="/g, 'href="');
  result = result.replace(/\bto='/g, "href='");

  return result;
}

// Migrate views and components
const allFiles = walk(path.join(src, "views")).concat(
  clientComponents.map((f) => path.join(src, f)).filter((f) => fs.existsSync(f))
);

for (const file of allFiles) {
  let content = fs.readFileSync(file, "utf8");
  const rel = path.relative(src, file).replace(/\\/g, "/");
  const isView = rel.startsWith("views/");
  const isClient = isView || clientComponents.includes(rel);

  content = migrateFileContent(content);

  if (isClient) {
    content = addUseClient(file, content);
  }

  fs.writeFileSync(file, content);
}

// Update NavLink completely
const navLinkPath = path.join(src, "components/NavLink.tsx");
fs.writeFileSync(
  navLinkPath,
  `"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps extends Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> {
  href: string;
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, activeClassName, pendingClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
`
);

// Create placeholder assets
const assetImports = new Set();
const assetPattern = /@\/assets\/([^"']+)/g;
for (const file of walk(src)) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = assetPattern.exec(content))) assetImports.add(match[1]);
}

const assetsDir = path.join(src, "assets");
fs.mkdirSync(assetsDir, { recursive: true });

const minimalJpeg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=",
  "base64"
);

const minimalPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);

for (const asset of assetImports) {
  const dest = path.join(assetsDir, asset);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (!fs.existsSync(dest)) {
    const ext = path.extname(asset).toLowerCase();
    fs.writeFileSync(dest, ext === ".png" ? minimalPng : minimalJpeg);
  }
}

console.log("Migration script completed.");
