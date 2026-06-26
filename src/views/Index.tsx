"use client";

import { imgSrc } from "@/lib/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Wrench, RotateCcw, Layers, Truck, PenTool, Factory, FileText, Shield, ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import galleryWorkersImg from "@/assets/gallery-workers.jpg";
import galleryGroovedRollImg from "@/assets/gallery-grooved-roll.jpg";
import galleryTruckImg from "@/assets/gallery-truck.jpg";
import maxresImg from "@/assets/maxresdefault.jpg";
import Layout from "@/components/Layout";
import harkerImg from "@/assets/harker.jpg";
import diverseImg from "@/assets/diverse-solutions.jpg";
import engineeringImg from "@/assets/engineering.jpg";
import hvofImg from "@/assets/hvof.jpg";
import coverImg from "@/assets/vail-cover.jpg";
import vailRubberWorksImg from "@/assets/vail-rubber-works.jpg";
import redRollSoftImg from "@/assets/red-roll-soft.jpg";
import precisionShaftsImg from "@/assets/roll-fabrication.png";
import legacyRollImg from "@/assets/legacy-roll.jpg";
import dkf9054Img from "@/assets/dkf9054.jpg";
import dsf3136Img from "@/assets/ae273c7d-6657-4186-a817-b9030d6a6b48.jpg";
import vailTruckImg from "@/assets/vail-truck.jpg";
import heroPlaceholderImg from "@/assets/hero-placeholder.jpg";
import paperRollImg from "@/assets/paper-roll.jpg";

const services = [
{ icon: RotateCcw, title: "Roll Core Maintenance", desc: "Expert grinding, refurbishing, and repair services that extend roll life and ensure peak performance in your operations.", img: dsf3136Img, to: "/services/roll-maintenance" },
{ icon: Wrench, title: "Roll Grinding", desc: "Precision grinding to OEM specifications. We restore rolls to like-new condition with tight tolerances for optimal production.", img: dkf9054Img, to: "/services/roll-maintenance" },
{ icon: Layers, title: "Roll Covering", desc: "Custom rubber, polyurethane, fiber, tungsten carbide, and specialty coverings engineered for your exact process requirements.", img: redRollSoftImg, to: "/services/custom-engineered-covers" },
{ icon: Truck, title: "Roll Transportation", desc: "Complete pick-up and delivery services. We handle the logistics so you can focus on running your operation.", img: vailTruckImg, to: "/services/other-services" },
{ icon: PenTool, title: "Roll Fabrication & Design", desc: "From concept to completion — custom roll core design, fabrication, and engineering for new or replacement rolls.", img: precisionShaftsImg, to: "/services/other-services" }];


const industries = [
{ title: "Steel", desc: "High-performance roll covers engineered for the extreme heat, pressure, and corrosion demands of steel processing.", img: harkerImg, to: "/industries/steel" },
{ title: "Aluminum", desc: "Precision roll solutions designed for the unique requirements of aluminum rolling, extrusion, and processing.", img: diverseImg, to: "/industries/aluminum" },
{ title: "Papermaking & Converting", desc: "Paper making and converting roll solutions that deliver consistency, efficiency, and extended run times.", img: paperRollImg, to: "/industries/paper" }];


const whyChoose = [
{ icon: Shield, title: "Tailored Solutions", desc: "Every product is custom-engineered for the specific process requirements of each customer. No off-the-shelf compromises." },
{ icon: Wrench, title: "Comprehensive Support", desc: "From in-house refurbishing to advanced coatings and on-site analysis, we provide end-to-end service throughout the roll lifecycle." },
{ icon: Factory, title: "In-House Rubber Mixing", desc: "Our proprietary rubber compounds are mixed on-site, giving us complete control over material quality and consistency." },
{ icon: FileText, title: "130+ Years of Expertise", desc: "Over a century of technical knowledge and continuous innovation ensure reliable, high-performance solutions competitors can't match." }];

const galleryImages = [
{ src: galleryWorkersImg, alt: "Workers inspecting a large roll" },
{ src: galleryGroovedRollImg, alt: "Grooved rubber roll on lathe" },
{ src: galleryTruckImg, alt: "Vail Rubber Works truck and driver" },
{ src: maxresImg, alt: "Roll grinding operation" },
{ src: hvofImg, alt: "Thermal spray" },
{ src: diverseImg, alt: "Diverse solutions" }];


const Index = () => {
  const [gallerySelected, setGallerySelected] = useState<number | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [heroVideoReady, setHeroVideoReady] = useState(false);

  const galleryShown = galleryImages.slice(0, 6);
  const showGalleryPrev = () => setGallerySelected((s) => (s === null ? s : (s - 1 + galleryShown.length) % galleryShown.length));
  const showGalleryNext = () => setGallerySelected((s) => (s === null ? s : (s + 1) % galleryShown.length));

  useEffect(() => {
    if (gallerySelected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showGalleryPrev();
      else if (e.key === "ArrowRight") showGalleryNext();
      else if (e.key === "Escape") setGallerySelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gallerySelected]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;
    try {
      video.load();
      const p = video.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Autoplay may be blocked; swap will still occur on canplay
        });
      }
    } catch {
      // ignore
    }
  }, []);

  const handleVideoReady = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    }
    setHeroVideoReady(true);
  };

  return (
    <Layout>
      {/* Hero with Background Video */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden">
        <img
          src={imgSrc(heroPlaceholderImg)}
          alt=""
          fetchPriority="high"
          decoding="async"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-[center_top] transition-opacity duration-700 ${heroVideoReady ? "opacity-0" : "opacity-100"}`} />

        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={imgSrc(heroPlaceholderImg)}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-[center_top] transition-opacity duration-700 ${heroVideoReady ? "opacity-100" : "opacity-0"}`}
          onCanPlay={handleVideoReady}
          onPlaying={handleVideoReady}>
          <source src="/videos/VailRubber3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Precision Roll Solutions Built to Last
            </h1>
            <p className="mt-6 leading-relaxed text-white/90 text-xl">
              130+ years of custom-engineered roll covers and maintenance services keeping North American manufacturing running.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 text-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">A Legacy of Excellence in Roll Covering</h2>
            <p className="mt-6 text-muted-foreground">
              Founded in 1891, Vail Rubber Works has grown from a small rubber goods manufacturer into a nationally recognized leader in custom roll covering and industrial roll services. With headquarters in St. Joseph, Michigan, and a second service center in Mobile, AL, we serve manufacturing facilities across the entire United States.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our passion is building long-term relationships. Our team at Vail Rubber, along with our suppliers and customer maintenance teams, partners with production managers and engineers to understand the unique challenges of each application. Every roll cover we produce is custom-engineered to deliver maximum performance, durability, and value for the specific process it serves.
            </p>
            <p className="mt-4 text-muted-foreground">
              From custom rubber compounds mixed in-house to advanced thermal spray coatings and precision grinding services, Vail Rubber Works offers a comprehensive range of solutions under one roof. Our customers trust us because we deliver results, with rolls that last longer, perform better, and reduce the total cost of ownership.

            </p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img src={imgSrc(legacyRollImg)} alt="Vail Rubber Works legacy roll" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Core Services — Modern Card Grid with Images */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</p>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A full spectrum of roll services — from design and fabrication to maintenance, re-covering, and transportation.
            </p>
          </div>

          {/* Top row: 3 cards */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {services.slice(0, 3).map((s) => <Link
              key={s.title}
              href={s.to}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={imgSrc(s.img)}
                  alt={s.title}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover"
                  loading="lazy" />
                
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:max-w-4xl lg:mx-auto">
            {services.slice(3).map((s) =>
            <Link
              key={s.title}
              href={s.to}
              className="group overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                  src={imgSrc(s.img)}
                  alt={s.title}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover"
                  loading="lazy" />
                
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-sans text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">See Vail Rubber Works in Action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Take a look inside our state-of-the-art facilities and see how our expert team crafts custom-engineered roll solutions that keep North American manufacturing moving.
          </p>
          <div
            className="group relative mx-auto mt-8 max-w-4xl cursor-pointer overflow-hidden rounded-lg shadow-xl"
            onClick={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video && video.paused) {
                video.play();
                video.controls = true;
              }
            }}>
            
            <video
              className="w-full object-cover"
              style={{ maxHeight: "360px" }}
              poster={imgSrc(vailRubberWorksImg)}
              preload="metadata"
              onPlay={(e) => {
                const overlay = e.currentTarget.parentElement?.querySelector(".play-overlay") as HTMLElement;
                if (overlay) overlay.style.display = "none";
              }}
              onPause={(e) => {
                const overlay = e.currentTarget.parentElement?.querySelector(".play-overlay") as HTMLElement;
                if (overlay) overlay.style.display = "flex";
              }}>
              
              <source src="/videos/VailRubber3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="play-overlay absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Industries We Serve</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              With over 130+ years of experience, we have developed deep expertise across a wide range of industrial sectors. Our engineering team understands the unique demands of each industry and designs roll solutions accordingly.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {industries.map((ind) =>
            <Link key={ind.title} href={ind.to} className="group overflow-hidden rounded-lg bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-video overflow-hidden">
                  <img src={imgSrc(ind.img)} alt={ind.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold text-foreground group-hover:text-primary">{ind.title}</h3>
                  <p className="mt-2 text-muted-foreground">{ind.desc}</p>
                </div>
              </Link>
            )}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="inline-block rounded-md bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/85 text-lg">
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Vail */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose Vail Rubber Works?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              When you partner with Vail Rubber Works, you get more than a vendor — you get a team of experts dedicated to keeping your operation running at peak efficiency. Here's what sets us apart from every other roll covering company.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {whyChoose.map((w) =>
            <div key={w.title} className="flex gap-4 rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <w.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-foreground">{w.title}</h3>
                  <p className="mt-1 text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Work Gallery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A look inside our facilities, operations, and the precision roll solutions we deliver <span className="whitespace-nowrap">every day.</span>
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {galleryImages.slice(0, 6).map((img, i) =>
            <button
              key={i}
              onClick={() => setGallerySelected(i)}
              className="group overflow-hidden rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              
                <img src={imgSrc(img.src)} alt={img.alt} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </button>
            )}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="inline-block rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {gallerySelected !== null &&
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setGallerySelected(null)}>
          <button className="absolute right-4 top-4 text-3xl text-white hover:text-white/70" onClick={() => setGallerySelected(null)} aria-label="Close">&times;</button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); showGalleryPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={imgSrc(galleryShown[gallerySelected].src)}
            alt={galleryShown[gallerySelected].alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); showGalleryNext(); }}
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      }

      {/* CTA Banner */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Solve Your Toughest Roll Problems?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Whether you're dealing with short roll life, inconsistent quality, or unexpected downtime, our team of experts is ready to help. Contact us today for a free consultation and discover how Vail Rubber Works can improve your bottom line.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-block rounded-md bg-background px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-background/90">
              
              Request a Quote
            </Link>
            <a href="tel:269-983-1595" className="inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              <Phone className="h-4 w-4" /> 269-983-1595
            </a>
          </div>
        </div>
      </section>

    </Layout>);

};

export default Index;