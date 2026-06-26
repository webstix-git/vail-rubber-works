"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import steelShaftsTubesImg from "@/assets/steel-shafts-tubes.png";
import internalCylinderStructureImg from "@/assets/internal-cylinder-structure.png";
import rollDesignBannerImg from "@/assets/roll-design-banner.png";

const RollDesignFabrication = () => (
  <Layout>
    <PageHero title="Roll Design & Fabrication" subtitle="From concept to completion — precision roll engineering and manufacturing." bgImage={rollDesignBannerImg} />

    {/* Roll Core Manufacturing */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Core Manufacturing</h2>
          <p className="mt-4 text-muted-foreground">
            Vail Rubber Works offers complete roll manufacturing services, from initial design through final inspection. Our engineering team works with your specifications to design and fabricate roll cores that meet the exact requirements of your application, including material selection, journal sizing, internal cooling passages, and surface finish specifications.
          </p>
          <p className="mt-4 text-muted-foreground">
            We manufacture rolls from a wide range of materials including carbon steel, stainless steel, alloy steels, and specialty metals. Our fabrication capabilities include turning, boring, milling, drilling, keyway cutting, and MIG and TIG welding. We focus on precision shrink fits whenever possible to ensure strength and reliability, minimizing the need for welding.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(steelShaftsTubesImg)} alt="Steel roll manufacturing" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Roll Core Design */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(internalCylinderStructureImg)} alt="Roll core design and fabrication" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Core Design</h2>
          <p className="mt-4 text-muted-foreground">
            Our in-house engineering team provides complete roll core design services using SolidWorks. We can design new roll cores from scratch based on your application requirements, or reverse-engineer existing rolls from measurements and drawings. Our design capabilities include stress analysis, deflection calculations, finite element analysis (FEA), and optimization for weight, stiffness, and thermal performance.
          </p>
          <p className="mt-4 text-muted-foreground">
            Roll core fabrication is performed in our fully equipped machine shop using CNC lathes, mills, and turning equipment. We maintain tight tolerances on all critical dimensions and perform comprehensive inspection throughout the manufacturing process.
          </p>
        </div>
      </div>
    </section>

    {/* Specialty Rolls */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Specialty Rolls</h2>
          <p className="mt-4 text-muted-foreground">
            Beyond standard roll covering and maintenance, we specialize in a variety of specialty roll types that require unique engineering and manufacturing expertise:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Vacuum Rolls", desc: "Precision-engineered vacuum rolls with drilled patterns for material handling, web transport, and threading applications." },
              { title: "Wringer Rolls", desc: "Durable wringer rolls designed for fluid removal applications with optimal nip pressure and cover resilience." },
              { title: "Bridle Rolls", desc: "High-traction bridle rolls for tension control in strip processing lines, available in multiple cover materials." },
              { title: "Pinch Rolls", desc: "Precisely balanced pinch rolls for material feeding and transport with consistent grip and minimal surface marking." },
              { title: "Tension Rolls", desc: "Engineered tension rolls for accurate tension measurement and control in web processing applications." },
              { title: "Custom Rolls", desc: "We design and manufacture custom rolls for unique applications that don't fit standard categories." },
            ].map((r) => (
              <div key={r.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-sans font-semibold text-foreground text-[22px]">{r.title}</h3>
                <p className="mt-1 text-lg text-muted-foreground">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* On-Site Analysis */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">On-Site Analysis & Pick-Up and Delivery</h2>
          <p className="mt-4 text-muted-foreground">
            Our service doesn't end at the shop door. Vail Rubber Works offers on-site analysis services where our experienced engineers visit your facility to evaluate roll performance, diagnose problems, and recommend solutions.
          </p>
          <p className="mt-4 text-muted-foreground">
            We also provide complete pick-up and delivery services for roll transportation. With service centers in St. Joseph, Michigan and Mobile, Alabama, we can serve manufacturing facilities across North America with fast, reliable service.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Ready to Design Your Next Roll?</h2>
        <p className="mt-3 text-primary-foreground/80">Our engineering team is ready to bring your roll design from concept to reality.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90">
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default RollDesignFabrication;
