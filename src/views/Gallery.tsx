"use client";

import { imgSrc } from "@/lib/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coverImg from "@/assets/vail-cover.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import maxresImg from "@/assets/maxresdefault.jpg";
import hvofSprayingImg from "@/assets/hvof-spraying.jpg";
import diverseImg from "@/assets/diverse-solutions.jpg";
import paperRoll2Img from "@/assets/paper-roll-2.jpg";
import redRollGalleryImg from "@/assets/red-roll-gallery.jpg";
import engravedEndGalleryImg from "@/assets/engraved-end-gallery.jpg";
import workersInspectingImg from "@/assets/workers-inspecting.jpg";
import groovedRoll2Img from "@/assets/grooved-roll-2.jpg";


const images = [
  { src: redRollGalleryImg, alt: "Red rubber roll with Vail branding" },
  { src: engravedEndGalleryImg, alt: "Engraved roll end with Vail Rubber Works marking" },
  { src: workersInspectingImg, alt: "Workers inspecting a large roll" },
  { src: groovedRoll2Img, alt: "Grooved rubber roll on machine" },
  { src: paperRoll2Img, alt: "White rubber roll on lathe in production" },
  { src: coverImg, alt: "Vail Rubber Works facility" },
  { src: engineeringImg, alt: "Engineering process" },
  { src: maxresImg, alt: "Roll grinding operation" },
  
  { src: diverseImg, alt: "Diverse solutions" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const showPrev = () => setSelected((s) => (s === null ? s : (s - 1 + images.length) % images.length));
  const showNext = () => setSelected((s) => (s === null ? s : (s + 1) % images.length));

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <Layout>
      <PageHero title="Custom Roll Covering Gallery" subtitle="A look inside our facilities, operations, and the roll solutions we deliver." />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="group overflow-hidden rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img src={imgSrc(img.src)} alt={img.alt} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setSelected(null)}>
          <button className="absolute right-4 top-4 text-3xl text-white hover:text-white/70" onClick={() => setSelected(null)} aria-label="Close">&times;</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={imgSrc(images[selected].src)}
            alt={images[selected].alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
