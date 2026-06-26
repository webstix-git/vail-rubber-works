import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "src");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (/\.tsx$/.test(entry.name)) files.push(full);
  }
  return files;
}

const imgSrcPatterns = [
  /src=\{([a-zA-Z_][\w.]*)\}/g,
  /url\(\$\{([a-zA-Z_][\w.]*)\}\)/g,
];

for (const file of walk(src)) {
  let content = fs.readFileSync(file, "utf8");
  const hasAssetImport = content.includes('@/assets/');
  if (!hasAssetImport && !content.includes("imgSrc(")) continue;

  const usesImgSrc =
    hasAssetImport ||
    content.includes("backgroundImage") ||
    /src=\{[a-zA-Z_][\w.]*\.img\}/.test(content) ||
    /src=\{[a-zA-Z_][\w.]*\.logo\}/.test(content) ||
    /src=\{[a-zA-Z_][\w.]*\.src\}/.test(content);

  if (!usesImgSrc) continue;

  if (!content.includes('from "@/lib/image"')) {
    const useClient = content.startsWith('"use client"');
    if (useClient) {
      content = content.replace(
        '"use client";\n\n',
        '"use client";\n\nimport { imgSrc } from "@/lib/image";\n',
      );
    } else {
      content = `import { imgSrc } from "@/lib/image";\n${content}`;
    }
  }

  for (const pattern of imgSrcPatterns) {
    content = content.replace(pattern, (match, expr) => {
      if (expr.startsWith("imgSrc(") || expr.startsWith("https://")) return match;
      if (expr === "videoId") return match;
      return match.includes("url(")
        ? `url(\${imgSrc(${expr})})`
        : `src={imgSrc(${expr})}`;
    });
  }

  fs.writeFileSync(file, content);
}

console.log("Fixed image src references.");
