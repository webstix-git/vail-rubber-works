"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import diverseImg from "@/assets/diverse-solutions.jpg";

const DiverseSolutions = () =>
<Layout>
    <PageHero title="Diverse Solutions" subtitle="Innovative roll technologies for plastics, film, and industrial applications." bgImage={diverseImg} />

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Solutions Beyond Metal & Paper</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            While Vail Rubber Works is well known for our expertise in metal processing and paper manufacturing, our capabilities extend far beyond. We serve plastics extrusion, film production, textile processing, food processing, and many other industrial applications that rely on precision rolls.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We pride ourselves on our ability to tackle the most challenging roll applications that other companies can't or won't handle. If you have a roll problem that hasn't been solved by conventional approaches, our team thrives on finding innovative solutions.
          </p>
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">See Our Diverse Solutions in Action</h2>
          <p className="mt-3 text-muted-foreground">Watch how Vail delivers innovative roll solutions across diverse industries.</p>
          <div className="mt-8">
            <YouTubeEmbed videoId="BAfHJvrKRXQ" title="Vail Rubber Works Diverse Solutions" />
          </div>
        </div>
      </div>
    </section>

    {/* Plastics */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Plastics & Film Processing</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The plastics and film industries require rolls with precise surface finishes, exact temperature control, and exceptional dimensional accuracy. Our covers are engineered to provide the exact surface properties needed — from mirror-smooth finishes for optical clarity to controlled textures for embossing.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We offer both rubber and polyurethane covers in hardness ranges specifically selected for plastics processing, with chemical resistance to solvents, additives, and release agents commonly used in these industries.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(diverseImg)} alt="Diverse industrial solutions" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* OEM */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Industrial & OEM Applications</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Vail Rubber Works serves OEMs who require precision roll components for their machinery. We work with engineering teams during the design phase and provide ongoing manufacturing and maintenance support throughout the equipment lifecycle.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our OEM services include prototype development, production manufacturing, and spare parts supply. We maintain detailed records for every roll, allowing us to quickly reproduce identical replacements when needed.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Have a Unique Application?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">We thrive on solving the most challenging roll problems across diverse industries.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90">
          Tell Us About Your Application
        </Link>
      </div>
    </section>
  </Layout>;


export default DiverseSolutions;