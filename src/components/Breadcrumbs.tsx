"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const labelMap: Record<string, string> = {
  services: "Services",
  "custom-engineered-covers": "Custom Engineered Covers",
  "roll-maintenance": "Roll Core Maintenance",
  "hvof-thermal-spray": "Thermal Spray",
  "other-services": "Other Services",
  industries: "Industries",
  steel: "Steel",
  aluminum: "Aluminum",
  paper: "Paper",
  "diverse-solutions": "Diverse Solutions",
  about: "About Vail",
  "about-us": "About Vail",
  "safety-mission-vision": "Safety Mission/Vision",
  "privacy-policy": "Privacy Policy",
  organizations: "Organizations",
  employment: "Employment",
  "contact-us": "Contact Us",
  faq: "Faqs",
  faqs: "Faqs",
  sitemap: "Sitemap",
  gallery: "Gallery",
  testimonials: "Testimonials",
  "thank-you": "Thank You",
};

const Breadcrumbs = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary py-3">
      <div className="container mx-auto flex items-center gap-2 px-4 text-sm">
        <Link href="/" className="text-muted-foreground transition-colors hover:text-primary">
          <Home className="h-4 w-4" />
        </Link>
        {segments.map((seg, i) => {
          const path = "/" + segments.slice(0, i + 1).join("/");
          const isLast = i === segments.length - 1;
          return (
            <span key={path} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-muted-foreground" />
              {isLast ? (
                <span className="font-medium text-foreground">{labelMap[seg] || seg}</span>
              ) : (
                <Link href={path} className="text-muted-foreground transition-colors hover:text-primary">
                  {labelMap[seg] || seg}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
