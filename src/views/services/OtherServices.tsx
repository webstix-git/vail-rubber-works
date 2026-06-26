"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import cradlesImg from "@/assets/support-cradles.png";
import paperRollImg from "@/assets/paper-roll-3.png";
import steelPadImg from "@/assets/steel-pad.png";
import slitterImg from "@/assets/slitter-machine.png";

const OtherServices = () => (
  <Layout>
    <PageHero title="Other Services" subtitle="Pads, slitter rings, custom molded parts, and steel rack fabrications for industrial applications." bgImage={cradlesImg} />

    {/* Pads */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Pads</h2>
          <p className="mt-4 text-muted-foreground">
            Vail Rubber Works manufactures custom rubber and polyurethane pads for a wide range of industrial applications. Our pads are engineered from carefully selected compounds to provide the ideal combination of hardness, resilience, chemical resistance, and wear life for your specific operating conditions.
          </p>
          <p className="mt-4 text-muted-foreground">
            From press pads and dampening pads to cushioning and anti-vibration pads, we custom-mold or fabricate each pad to your exact dimensions and specifications. Available in a full range of durometers and materials.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(steelPadImg)} alt="Custom industrial rubber pads" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Slitter Rings */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(slitterImg)} alt="Precision slitter rings" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Slitter Rings</h2>
          <p className="mt-4 text-muted-foreground">
            Our precision slitter rings are manufactured to exacting tolerances for use in metal slitting, paper converting, and film processing lines. Each ring is engineered for optimal hardness, resilience, and wear resistance to ensure clean, consistent cuts and long service life.
          </p>
          <p className="mt-4 text-muted-foreground">
            Available in rubber and polyurethane compounds, our slitter rings can be manufactured to match OEM specifications or custom-designed for improved performance. We stock common sizes for fast turnaround and can manufacture custom sizes to your requirements.
          </p>
        </div>
      </div>
    </section>

    {/* Custom Molded Parts */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Custom Molded Parts</h2>
          <p className="mt-4 text-muted-foreground">
            Vail Rubber Works offers custom rubber and polyurethane molding services for industrial components that require precision, durability, and chemical resistance. From gaskets and seals to specialized wear components, our molding capabilities can produce parts to your exact specifications.
          </p>
          <p className="mt-4 text-muted-foreground">
            We work with a wide range of elastomers and polyurethane systems to match the material properties your application demands. Our engineering team can assist with material selection, mold design, and prototype development to ensure the finished part meets your performance requirements.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(paperRollImg)} alt="Custom molded rubber parts" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need Custom Rubber Products?</h2>
        <p className="mt-3 text-primary-foreground/80">Tell us about your application and we'll engineer the right solution.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>
);

export default OtherServices;
