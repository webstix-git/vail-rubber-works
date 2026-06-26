"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home } from "lucide-react";

const sitemapLinks: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Services Overview", to: "/services" },
      { label: "Custom Engineered Covers", to: "/services/custom-engineered-covers" },
      { label: "Roll Core Maintenance", to: "/services/roll-maintenance" },
      { label: "Roll Design & Fabrication", to: "/services/roll-design-fabrication" },
      { label: "Thermal Spray", to: "/services/hvof-thermal-spray" },
      { label: "Mandrel Sleeves", to: "/services/mandrel-sleeves" },
      { label: "Other Services", to: "/services/other-services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Industries Overview", to: "/industries" },
      { label: "Steel", to: "/industries/steel" },
      { label: "Aluminum", to: "/industries/aluminum" },
      { label: "Papermaking & Converting", to: "/industries/paper" },
      { label: "Other Industrial", to: "/industries/other-industrial" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Vail", to: "/about-us" },
      { label: "Safety Mission/Vision", to: "/about-us/safety-mission-vision" },
      { label: "Organizations", to: "/about-us/organizations" },
      { label: "Employment", to: "/about-us/employment" },
      { label: "Contact Us", to: "/contact-us" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Faqs", to: "/faqs" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Sitemap", to: "/sitemap" },
      { label: "Privacy Policy", to: "/about-us/privacy-policy" },
    ],
  },
];

const allPages = sitemapLinks.flatMap((s) => s.links);

const NotFound = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  const matches = query.trim()
    ? allPages.filter((p) => p.label.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (matches.length > 0) router.push(matches[0].to);
  };

  return (
    <Layout>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-base font-semibold uppercase tracking-wider text-primary">404 Error</p>
          <h1 className="mt-3 text-4xl font-bold text-foreground md:text-5xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            We couldn't find the page you were looking for. Try searching below or browse the site directory.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-xl gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pages..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button type="submit">Search</Button>
          </form>

          {query && (
            <div className="mx-auto mt-4 max-w-xl rounded-lg border bg-card p-4 text-left">
              {matches.length > 0 ? (
                <ul className="space-y-2">
                  {matches.slice(0, 6).map((m) => (
                    <li key={m.to}>
                      <Link href={m.to} className="text-base text-primary hover:underline">
                        {m.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-muted-foreground">No pages match "{query}".</p>
              )}
            </div>
          )}

          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            <Home className="h-4 w-4" /> Return to Home
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">Browse the Site</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {sitemapLinks.map((s) => (
              <div key={s.title}>
                <h3 className="font-sans text-lg font-bold text-foreground border-b pb-2">{s.title}</h3>
                <ul className="mt-4 space-y-2">
                  {s.links.map((l) => (
                    <li key={l.to}>
                      <Link href={l.to} className="text-base text-muted-foreground hover:text-primary transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
