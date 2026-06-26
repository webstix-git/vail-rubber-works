"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import harkerImg from "@/assets/harker.jpg";
import diverseImg from "@/assets/other-industrial-new.jpg";
import coverImg from "@/assets/paper-new.png";
import redRollImg from "@/assets/aluminum-new.png";
import engravedEndImg from "@/assets/engraved-end.jpg";
import servicesHeroImg from "@/assets/services-hero.png";

const industryCards = [
  { title: "Steel Industry", desc: "Heat-resistant, corrosion-proof roll covers engineered for flat rolled steel processing operations.", img: harkerImg, to: "/industries/steel" },
  { title: "Aluminum Industry", desc: "Precision roll solutions for surface-sensitive aluminum processing and converting applications.", img: redRollImg, to: "/industries/aluminum" },
  { title: "Paper Making & Converting", desc: "High-performance roll covers for paper mills and converting operations requiring precision surface quality.", img: coverImg, to: "/industries/paper" },
  { title: "Other Industrial", desc: "Custom roll technologies for plastics, film, textile, food processing, and specialty applications.", img: diverseImg, to: "/industries/other-industrial" },
];

const IndustriesLanding = () => (
  <Layout>
    <PageHero title="Industries We Serve" subtitle="Deep expertise across multiple industrial sectors, delivering tailored roll solutions for over 130+ years." bgImage={servicesHeroImg} />
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mx-auto max-w-3xl text-left text-muted-foreground">
          Vail Rubber Works serves a diverse range of manufacturing industries, each with unique roll covering and maintenance requirements. Our engineering team has developed deep domain expertise in steel, aluminum, specialty alloy, paper manufacturing, plastics, film, and many other industrial applications.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {industryCards.map((ind) => (
            <Link key={ind.title} href={ind.to} className="group overflow-hidden rounded-lg border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img src={imgSrc(ind.img)} alt={ind.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h2 className="font-sans text-[22px] font-semibold text-foreground group-hover:text-primary">{ind.title}</h2>
                <p className="mt-2 text-lg text-muted-foreground">{ind.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default IndustriesLanding;
