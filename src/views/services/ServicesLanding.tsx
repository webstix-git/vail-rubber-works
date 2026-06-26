"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Layers, Wrench, Flame, PenTool, CircleDot, Settings } from "lucide-react";
import engineeringImg from "@/assets/engineering.jpg";
import maxresImg from "@/assets/maxresdefault.png";
import hvofImg from "@/assets/hvof.jpg";
import coverImg from "@/assets/vail-cover.png";
import redRollImg from "@/assets/red-roll.png";
import engravedEndImg from "@/assets/engraved-end.png";
import servicesHeroImg from "@/assets/services-hero.png";

const serviceCards = [
  { icon: Layers, title: "Custom Engineered Covers", desc: "Rubber, polyurethane, tungsten carbide, non-woven fiber, and Masroll covers custom-engineered for your exact application requirements.", img: engineeringImg, to: "/services/custom-engineered-covers" },
  { icon: Wrench, title: "Roll Core Maintenance", desc: "Precision grinding, refurbishing, and repair services that restore rolls to like-new condition and extend their operational life.", img: maxresImg, to: "/services/roll-maintenance" },
  { icon: Flame, title: "Thermal Spray", desc: "Thermal spray coatings that provide superior wear resistance, extending part life up to 4x compared to conventional coatings.", img: hvofImg, to: "/services/hvof-thermal-spray" },
  { icon: PenTool, title: "Roll Design & Fabrication", desc: "Complete steel roll manufacturing, roll core design, specialty rolls, and on-site analysis with nationwide logistics support.", img: engravedEndImg, to: "/services/roll-design-fabrication" },
  { icon: CircleDot, title: "Mandrel Sleeves", desc: "Precision-molded rubber and polyurethane mandrel sleeves for winding, unwinding, and tension control applications.", img: redRollImg, to: "/services/mandrel-sleeves" },
  { icon: Settings, title: "Other Services", desc: "Custom rubber pads, precision slitter rings, and custom molded parts for industrial applications.", img: coverImg, to: "/services/other-services" },
];

const ServicesLanding = () => (
  <Layout>
    <PageHero title="Our Services" subtitle="Comprehensive roll solutions from design and fabrication to maintenance, covering, and logistics." bgImage={servicesHeroImg} />
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          Vail Rubber Works offers a complete range of roll covering, maintenance, and engineering services. With over 130+ years of expertise and two strategically located service centers, we deliver fast, reliable solutions that keep your manufacturing operations running at peak performance.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {serviceCards.map((s) => (
            <Link key={s.title} href={s.to} className="group overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img src={imgSrc(s.img)} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-sans text-[22px] font-semibold text-foreground group-hover:text-primary">{s.title}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ServicesLanding;
