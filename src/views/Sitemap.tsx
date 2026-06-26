"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const sections: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", to: "/" },
      { label: "FAQs", to: "/faqs" },
      { label: "Gallery", to: "/gallery" },
      { label: "Testimonials", to: "/testimonials" },
    ],
  },
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
    title: "About Us",
    links: [
      { label: "About Vail", to: "/about-us" },
      { label: "Safety Mission/Vision", to: "/about-us/safety-mission-vision" },
      { label: "Organizations", to: "/about-us/organizations" },
      { label: "Employment", to: "/about-us/employment" },
      { label: "Contact Us", to: "/contact-us" },
      { label: "Privacy Policy", to: "/about-us/privacy-policy" },
    ],
  },
];

const Sitemap = () => (
  <Layout>
    <PageHero title="Sitemap" subtitle="A complete directory of pages on our website." />
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-sans text-lg font-bold text-foreground border-b pb-2">{s.title}</h2>
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

export default Sitemap;
