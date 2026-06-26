"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import micShaftImg from "@/assets/mic-shaft.png";
import organizationsHero from "@/assets/organizations-hero.png";
import cncLatheShaftImg from "@/assets/cnc-lathe-shaft.png";
import weldingTorchMetalImg from "@/assets/welding-torch-metal.png";
import millwrightServiceImg from "@/assets/millwright-service.png";
import { Wrench, RefreshCcw, Shield, DollarSign, AlertTriangle, ClipboardCheck } from "lucide-react";

const benefits = [
  { icon: RefreshCcw, title: "Extended Roll Life", desc: "Regular maintenance can extend roll life by 50–200%, dramatically reducing replacement costs." },
  
  { icon: AlertTriangle, title: "Reduced Downtime", desc: "Scheduled maintenance prevents unexpected failures that can shut down production lines." },
  { icon: DollarSign, title: "Lower Total Cost", desc: "Proactive programs typically reduce total roll costs by 30–50% vs. reactive replacement." },
  { icon: Wrench, title: "Improved Safety", desc: "Regular inspection identifies potential issues before they become safety hazards." },
  { icon: ClipboardCheck, title: "Expert Analysis", desc: "Detailed condition reports with each service help you plan future maintenance." },
];

const RollMaintenance = () => (
  <Layout>
    <PageHero title="Roll Core Maintenance" subtitle="Expert refurbishing, redesign, and major rebuild services that extend roll life and maximize your ROI." bgImage={organizationsHero} bgPosition="center 30%" />

    {/* Intro - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Comprehensive Roll Maintenance Services</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Maintaining your rolls in optimal condition is essential to consistent product quality, efficient operations, and reduced downtime. Our comprehensive maintenance programs include  complete refurbishing, journal repair, millwright service and inspection, dynamic balancing, and detailed condition assessment.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We understand that roll downtime means production downtime. Our pick-up and delivery services, combined with fast turnaround times, help ensure your operations continue running smoothly.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(cncLatheShaftImg)} alt="CNC lathe machining a metal shaft" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Maintenance in Action</h2>
          <p className="mt-3 text-muted-foreground">See how our team restores rolls to like-new condition.</p>
          <div className="mt-8">
            <YouTubeEmbed videoId="BAfHJvrKRXQ" title="Vail Rubber Works Roll Maintenance" />
          </div>
        </div>
      </div>
    </section>

    {/* Millwright Services - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Millwright Services</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our precision grinding capabilities allow us to restore rolls to exact specifications with tight tolerances. We grind rubber-covered rolls, polyurethane rolls, chrome-plated rolls, and bare steel rolls.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our equipment accommodates rolls up to 82" diameter and 240" face length. We achieve surface finishes as fine as 4 microinches RA and diameter tolerances to +/-.001". Many customers find proactive grinding reduces total roll costs by 30–50%.
          </p>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(millwrightServiceImg)} alt="Millwright services and inspection" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Refurbishing - 50/50 */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl lg:order-1">
          <img src={imgSrc(weldingTorchMetalImg)} alt="Roll refurbishing and rebuilding" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="lg:order-2">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Refurbishing & Rebuilding</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            When a simple re-grind isn't enough, our complete refurbishing services can bring damaged or worn rolls back to like-new condition at a fraction of the cost of replacement. Extensive metal repair is performed as needed. Our major repair services include shaft and head replacements, pressing out through shafts, replacing double-head assemblies, and repairing or replacing roll bodies. The process also includes stripping, inspecting, repairing the core, applying a new cover, precision grinding, and final inspection.
          </p>
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">Benefits of Proactive Roll Core Maintenance</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[22px] font-semibold text-foreground">{b.title}</h3>
                <p className="mt-1 text-lg leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Schedule Your Roll Maintenance Today</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Don't wait for a roll failure to disrupt your production.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Request Service
        </Link>
      </div>
    </section>
  </Layout>
);

export default RollMaintenance;
