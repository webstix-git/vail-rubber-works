"use client";

import { imgSrc } from "@/lib/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ExternalLink } from "lucide-react";

import aistLogo from "@/assets/aist-logo.jpg";
import nccaLogo from "@/assets/ncca-logo.jpg";
import pmaLogo from "@/assets/pma-logo.jpg";
import aaLogo from "@/assets/aa-logo.jpg";
import gaLogo from "@/assets/ga-logo.jpg";
import acsrdLogo from "@/assets/acsrd-logo.jpg";
import imraLogo from "@/assets/imra-logo.png";
import rrgLogo from "@/assets/rrg-logo.png";
import organizationsHero from "@/assets/organizations-hero.png";

const associations = [
  { name: "AIST", full: "Association for Iron & Steel Technology", url: "https://www.aist.org/", logo: aistLogo },
  { name: "NCCA", full: "National Coil Coaters Association", url: "https://www.coilcoaters.org/", logo: nccaLogo },
  { name: "PMA", full: "Polyurethane Manufacturers Association", url: "https://www.pma.org/", logo: pmaLogo },
  { name: "The Aluminum Association", full: "", url: "https://www.aluminum.org/", logo: aaLogo },
  { name: "Galvanizers Association", full: "", url: "https://www.galvanizeit.org/", logo: gaLogo },
  { name: "ACS Rubber Division", full: "American Chemical Society", url: "https://www.rubber.org/", logo: acsrdLogo },
  { name: "IMRA", full: "International Maintenance & Reliability Association", url: "https://www.imra.com/", logo: imraLogo },
  { name: "Rubber Roller Group", full: "", url: "https://www.rubberrollergroup.com/", logo: rrgLogo },
];

const community = [
  { name: "Alex Mandarino Foundation", location: "St. Joseph, MI", desc: "Supporting youth programs and community development in the St. Joseph, Michigan area.", url: "https://www.alexmandarinofoundation.org/" },
  { name: "Mobile Baykeeper", location: "Mobile, AL", desc: "Protecting and restoring the Mobile Bay watershed through advocacy, environmental monitoring, and community engagement.", url: "https://www.mobilebaykeeper.org/" },
];

const Organizations = () => (
  <Layout>
    <PageHero 
      title="Organizations" 
      subtitle="Industry associations and community organizations we proudly support." 
      bgImage={organizationsHero}
      bgPosition="center 30%"
    />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Industry Associations</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Vail Rubber Works is an active member of several leading industry associations. These memberships keep us connected to the latest developments and allow us to contribute to advancing the state of the art in roll covering technology and industrial services.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {associations.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-20 w-full items-center justify-center rounded-lg bg-white p-3">
                  <img
                    src={imgSrc(a.logo)}
                    alt={a.name}
                    className="max-h-16 w-auto max-w-[160px] object-contain"
                  />
                </div>
                <div className="mt-4">
                  <span className="font-semibold text-foreground group-hover:text-primary">{a.name}</span>
                  {a.full && <p className="mt-1 text-xs text-muted-foreground">{a.full}</p>}
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Visit website <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Community Involvement</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            At Vail Rubber Works, we believe in giving back to the communities where we live and work. We are proud to support the following organizations.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {community.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="group rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-semibold text-foreground group-hover:text-primary">{c.name}</h3>
                <p className="text-sm font-medium text-primary">{c.location}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Visit website <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Organizations;
