"use client";

import type { StaticImageData } from "next/image";
import { imgSrc } from "@/lib/image";
import Breadcrumbs from "./Breadcrumbs";
import workersRollImg from "@/assets/workers-roll.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string | StaticImageData;
  bgPosition?: string;
}

const PageHero = ({ title, subtitle, bgImage, bgPosition }: PageHeroProps) => {
  const backgroundImage = bgImage || workersRollImg;
  
  return (
    <>
      <Breadcrumbs />
      <section
        className="relative py-24 md:py-36 flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${imgSrc(backgroundImage)})`,
          backgroundSize: "cover",
          backgroundPosition: bgPosition || "center",
          minHeight: "350px",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white md:text-5xl" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>{title}</h1>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>{subtitle}</p>}
        </div>
      </section>
    </>
  );
};

export default PageHero;
