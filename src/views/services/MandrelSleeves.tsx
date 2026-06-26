"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import texturedBlueSleeveImg from "@/assets/textured-blue-sleeve.png";
import mandrelSleeveImg from "@/assets/mandrel-sleeve.jpg";
import mandrelSleeveApplicationImg from "@/assets/mandrel-sleeve-application.jpg";

const MandrelSleeves = () => (
  <Layout>
    <PageHero title="Mandrel Sleeves" subtitle="Precision-engineered mandrel sleeves for winding, unwinding, and material handling." bgImage={texturedBlueSleeveImg} />

    {/* Intro */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">What Are Mandrel Sleeves?</h2>
          <p className="mt-4 text-muted-foreground">
            Mandrel sleeves are precision-molded rubber or polyurethane covers that fit over expandable mandrels used in winding and unwinding operations. They provide the grip and surface properties needed to securely hold cores and rolls during processing, preventing slippage and ensuring consistent tension control.
          </p>
          <p className="mt-4 text-muted-foreground">
            Vail Rubber Works manufactures mandrel sleeves in a wide range of compounds, hardnesses, and surface textures to match the specific requirements of your application. Whether you need high-friction surfaces for heavy coils or smooth finishes for delicate films, we engineer the ideal solution.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(mandrelSleeveImg)} alt="Mandrel sleeve manufacturing" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(mandrelSleeveApplicationImg)} alt="Mandrel sleeve applications" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Applications & Uses</h2>
          <p className="mt-4 text-muted-foreground">
            Mandrel sleeves are used across a wide range of industries including steel processing, aluminum coil handling, paper converting, plastics film, and textile manufacturing. They are essential components in:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />Coil winding and unwinding lines</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />Slitting and rewinding operations</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />Tension reel mandrels</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />Expanding shaft sleeves</li>
            <li className="flex items-start gap-2"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />Core chucks and grippers</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Key Benefits */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Key Benefits</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Superior Grip", desc: "Engineered surface textures and compounds provide reliable holding force without damaging coils or product." },
              { title: "Extended Service Life", desc: "Durable compounds resist wear, compression set, and chemical attack for long operational life." },
              { title: "Custom Engineered", desc: "Every sleeve is designed for your specific mandrel dimensions, operating conditions, and material requirements." },
              { title: "Fast Turnaround", desc: "In-house manufacturing and inventory of common sizes allow quick delivery to minimize downtime." },
            ].map((b) => (
              <div key={b.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-sans font-semibold text-foreground text-[22px]">{b.title}</h3>
                <p className="mt-1 text-lg text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need Mandrel Sleeves?</h2>
        <p className="mt-3 text-primary-foreground/80">Contact us with your mandrel specifications and we'll engineer the perfect sleeve solution.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90">
          Request a Quote
        </Link>
      </div>
    </section>
  </Layout>
);

export default MandrelSleeves;
