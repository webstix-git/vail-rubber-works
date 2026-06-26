"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import harkerImg from "@/assets/harker.jpg";
import redRollImg from "@/assets/red-roll.jpg";
import isoImg from "@/assets/iso-cert-logo.jpg";
import { CheckCircle, FileCheck } from "lucide-react";

const rollApplications = [
  "Applicator / Coater Rolls", "Bridle Rolls", "Deflector Rolls", "Furnace Exit Rolls",
  "Hold Down / Ironing Rolls", "Pinch Rolls", "Sink Rolls", "Steering Rolls",
  "Tension Leveler Rolls", "Wringer / Squeegee Rolls",
];

const SteelIndustry = () => (
  <Layout>
    <PageHero title="Steel Industry" subtitle="Roll solutions engineered for flat rolled steel processing." bgImage={harkerImg} />

    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Steel Processing Roll Expertise</h2>
          <p className="mt-4 text-muted-foreground">
            In steel processing, rolls face some of the harshest operating conditions in any industry. Finish process lines operate at temperatures up to 300°F. Temper mills subject rolls to extreme nip pressures. Pickling lines expose rolls to hydrochloric, sulfuric, nitric, hydrofluoric, and other aggressive solutions.
          </p>
          <p className="mt-4 text-muted-foreground">
            Vail Rubber Works has developed proprietary compounds and engineering solutions specifically for these demanding environments. Our thermal spray tungsten carbide coatings deliver 4x the life of conventional chrome plating on metal process line rolls.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(harkerImg)} alt="Steel processing rolls" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(redRollImg)} alt="Steel roll applications" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Applications</h2>
          <p className="mt-3 text-muted-foreground">With Vail's expertise, get longer-running covers for:</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {rollApplications.map((app) => (
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
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need Steel Processing Roll Solutions?</h2>
        <p className="mt-3 text-primary-foreground/80">Our steel industry specialists are ready to help solve your toughest roll challenges.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Our Team
        </Link>
      </div>
    </section>
  </Layout>
);

export default SteelIndustry;
