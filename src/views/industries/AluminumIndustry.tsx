"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import facilityImg from "@/assets/manufacturing-facility.png";
import polishedSteelImg from "@/assets/polished-steel-rollers.png";
import manRollersImg from "@/assets/man-behind-rollers.png";
import isoImg from "@/assets/iso-cert-logo.jpg";
import { CheckCircle, FileCheck } from "lucide-react";

const aluminumApps = [
  "Cold Mill Rolls", "Foil Mill Rolls", "Tension Leveler Rolls", "Coater / Applicator Rolls",
  "Pinch Rolls", "Bridle Rolls", "Wringer Rolls", "Deflector Rolls",
];

const AluminumIndustry = () => (
  <Layout>
    <PageHero title="Aluminum Industry" subtitle="Precision roll solutions for aluminum processing and converting." bgImage={facilityImg} />

    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Aluminum Processing Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            Aluminum processing demands rolls with exceptional surface quality, precise dimensional control, and compounds that won't mark or contaminate the strip. Vail Rubber Works has extensive experience engineering roll covers for aluminum cold mills, foil mills, finishing lines, and converting operations.
          </p>
          <p className="mt-4 text-muted-foreground">
            Our custom-formulated compounds provide the exact combination of hardness, surface finish, and chemical resistance needed for aluminum applications. We understand the critical importance of surface quality in aluminum processing and engineer every cover to deliver zero-marking performance.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(polishedSteelImg)} alt="Aluminum processing rolls" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(manRollersImg)} alt="Aluminum roll applications" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Applications</h2>
          <p className="mt-3 text-muted-foreground">Precision covers engineered for aluminum processing:</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {aluminumApps.map((app) => (
              <div key={app} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">{app}</span>
              </div>
            ))}
          </div>
          {/* ISO Certification */}
          <div className="mt-8 flex items-center gap-4 rounded-xl border bg-card p-4">
            <img src={imgSrc(isoImg)} alt="ISO Certification" className="h-16 object-contain" loading="lazy" />
            <div>
              <div className="flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-foreground">ISO Certified</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">Use our ISO certification to help you meet the highest global standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need Aluminum Roll Solutions?</h2>
        <p className="mt-3 text-primary-foreground/80">Our specialists understand the surface-critical demands of aluminum processing.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Our Team
        </Link>
      </div>
    </section>
  </Layout>
);

export default AluminumIndustry;
