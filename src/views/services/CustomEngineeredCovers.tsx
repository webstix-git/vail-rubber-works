"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import engineeringImg from "@/assets/engineering.jpg";
import masrollImg from "@/assets/masroll.png";
import orangeBlackRollImg from "@/assets/orange-black-roll.jpg";
import coverImg from "@/assets/ply-covers.jpg";
import engravedEndImg from "@/assets/engraved-end.jpg";
import faceThermalSprayImg from "@/assets/face-thermal-spray.png";
import { CheckCircle } from "lucide-react";

const coverTypes = [
  { title: "Z-Series", desc: "Premium roll covering formulation for problem applications when it comes to heat exposure, steam exposure, or a position that creates excessive wear." },
  { title: "X-Series", desc: "Cost-effective premium roll covering formulation with properties surpassed only by our Z-Series." },
  { title: "WearGuard", desc: "Cost-effective elastomeric material formulated for roll coverings used in the flat-rolled metals industry." },
  { title: "F-Series", desc: "Premium roll covering designed and formulated for applications requiring high coefficient of friction and wear resistance." },
  { title: "Orange Squeeze", desc: "Premium elastomeric covering that offers abrasion resistance approaching that of polyurethane." },
  { title: "NiChem", desc: "Premium elastomeric material formulated for roll coverings used in the flat-rolled metal industry." },
  { title: "DuraSqueeze XT", desc: "High-performance premium roll covering offering a combination of good temperature resistance at elevated line temperatures and excellent abrasion resistance." },
  { title: "K-Series", desc: "High-performance compound adder with high-strength fiber making — an excellent option for physically demanding applications." },
  { title: "A-Series", desc: "Premium roll covering designed and formulated for applications requiring dynamic durability, and cut, tear, and wear resistance." },
];

const polyurethaneTypes = [
  { title: "Polytek", desc: "Advanced polyurethane formulation engineered for extended roll life and consistent performance." },
  { title: "Polycast", desc: "Cast polyurethane system delivering precise hardness control and exceptional wear resistance." },
  { title: "Polylast", desc: "High-performance compound designed for maximum durability in abrasive environments." },
  { title: "Polyfire", desc: "Higher heat resistance combined with excellent wear and abrasion resistance." },
  { title: "PolyCoat", desc: "Designed for coater and applicator rolls." },
];


const CustomEngineeredCovers = () =>
<Layout>
    <PageHero title="Custom Engineered Covers" subtitle="Precision-engineered roll coverings designed for your specific process requirements." bgImage={orangeBlackRollImg} />

    {/* Intro - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Coverings Engineered for Performance</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            At Vail Rubber Works, we understand that every manufacturing process has unique demands. That's why we don't offer generic, one-size-fits-all roll covers. Instead, our engineering team works closely with your maintenance and production staff to analyze your specific application requirements — including operating temperatures, pressures, chemical exposures, line speeds, and nip loads — and designs a custom cover solution that delivers optimal performance and maximum service life.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our in-house rubber mixing capabilities give us complete control over compound formulation, allowing us to fine-tune hardness, resilience, chemical resistance, and wear characteristics to meet the exact demands of your process.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(engravedEndImg)} alt="Custom engineered roll cover detail" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Video Section */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">See Our Custom Covers in Action</h2>
          <p className="mt-3 text-muted-foreground">Watch how our precision-engineered covers are manufactured and applied.</p>
          <div className="mt-8">
            <YouTubeEmbed videoId="ZNheIS9onMQ" title="Custom Engineered Roll Covers" />
          </div>
        </div>
      </div>
    </section>

    {/* Rubber Covering */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Rubber Covering</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Rubber roll covers are the backbone of our business and have been since the early 1900s. We offer an extensive range of natural and synthetic rubber compounds, each formulated to address specific process challenges.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our rubber covering process begins with careful preparation of the roll core, followed by application of bonding agents and the rubber compound itself. Every cover is vulcanized under precisely controlled conditions and precision-ground to the required diameter and surface finish.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coverTypes.map((c) =>
          <div key={c.title} className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <h3 className="font-semibold text-foreground text-[22px]">{c.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground text-lg">{c.desc}</p>
              </div>
          )}
          </div>
        </div>
      </div>
    </section>

    {/* Polyurethane - 50/50 */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Polyurethane Covers</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Polyurethane and urethane roll covers offer superior abrasion resistance, load-bearing capacity, and durability compared to conventional rubber in many applications. These materials are ideal for high-wear environments where roll life is critical.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We offer cast polyurethane systems, with hardness ranges from very soft (30 Shore A) to very hard (60 Shore D). Polyurethane covers typically outlast common rubber covers by 3–5x in abrasive environments.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-xl">
            <img src={imgSrc(coverImg)} alt="Polyurethane roll cover" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {polyurethaneTypes.map((c) =>
            <div key={c.title} className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <h3 className="font-semibold text-foreground text-[22px]">{c.title}</h3>
              </div>
              <p className="leading-relaxed text-muted-foreground text-lg">{c.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Tungsten Carbide - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(faceThermalSprayImg)} alt="Tungsten carbide roll cover" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tungsten Carbide Covers</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tungsten carbide coatings provide the ultimate in wear resistance and surface hardness. Applied through our thermal spray processes, these coatings create an extremely hard, dense surface that resists wear, corrosion, and material buildup far longer than other coating materials.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            The superior hardness (typically 1100–1400 HV) and low porosity of  tungsten carbide coatings ensure consistent surface quality and extended roll life — often 4x longer than chrome plating.
          </p>
        </div>
      </div>
    </section>

    {/* Non-Woven - 50/50 */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Non-Woven Fiber & Masroll Covers</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Non-woven fiber covers provide unique surface properties ideal for cleaning, polishing, and surface conditioning applications. These covers feature excellent fluid absorption and release characteristics.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Masroll covers combine advanced materials and construction techniques to deliver superior performance in demanding environments, including applications such as vacuum rolls. Every custom-engineered cover we produce begins with a thorough analysis of your application.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(masrollImg)} alt="Masroll covers" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need a Custom Cover Solution?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Our engineering team is ready to analyze your application and design the optimal cover.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Our Engineers
        </Link>
      </div>
    </section>
  </Layout>;


export default CustomEngineeredCovers;