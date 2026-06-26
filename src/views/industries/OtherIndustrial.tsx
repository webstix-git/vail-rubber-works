"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import diverseImg from "@/assets/diverse-solutions-new.png";
import redRollImg from "@/assets/red-roll-new.jpg";
import yellowRollImg from "@/assets/yellow-roll-pi-tape.jpg";

const OtherIndustrial = () => (
  <Layout>
    <PageHero title="Other Industrial" subtitle="Innovative roll technologies for plastics, film, and diverse industrial applications." bgImage={yellowRollImg} />

    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Solutions Beyond Metals & Paper</h2>
          <p className="mt-4 text-muted-foreground">
            While Vail Rubber Works is well known for our expertise in metal processing and paper manufacturing, our capabilities extend far beyond. We serve plastics extrusion, film production, textile processing, food processing, and many other industrial applications that rely on precision rolls.
          </p>
          <p className="mt-4 text-muted-foreground">
            We pride ourselves on our ability to tackle the most challenging roll applications that other companies can't or won't handle. If you have a roll problem that hasn't been solved by conventional approaches, our team thrives on finding innovative solutions.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(diverseImg)} alt="Diverse industrial solutions" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(redRollImg)} alt="Plastics and film processing rolls" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Plastics, Film & OEM Applications</h2>
          <p className="mt-4 text-muted-foreground">
            The plastics and film industries require rolls with precise surface finishes, exact temperature control, and exceptional dimensional accuracy. Our covers are engineered to provide the exact surface properties needed — from mirror-smooth finishes for optical clarity to controlled textures for embossing.
          </p>
          <p className="mt-4 text-muted-foreground">
            We also serve OEMs who require precision roll components for their machinery. We work with engineering teams during the design phase and provide ongoing manufacturing and maintenance support throughout the equipment lifecycle.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Have a Unique Application?</h2>
        <p className="mt-3 text-primary-foreground/80">We thrive on solving the most challenging roll problems across diverse industries.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90">
          Tell Us About Your Application
        </Link>
      </div>
    </section>
  </Layout>
);

export default OtherIndustrial;
