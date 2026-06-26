"use client";

import { imgSrc } from "@/lib/image";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Heart, Users, Target, Shield, RefreshCw, MessageCircle } from "lucide-react";
import historyImg from "@/assets/history.jpg";
import history1Img from "@/assets/history-1.jpg";

const values = [
{ icon: Heart, title: "Long-Term Relationships", desc: "Our passion is building lasting partnerships with our customers, not just completing transactions." },
{ icon: Shield, title: "Accountable", desc: "We stand behind our work and take full responsibility for the quality and performance of every product we deliver." },
{ icon: RefreshCw, title: "Adaptable", desc: "We continuously evolve our capabilities, materials, and processes to meet the changing needs of modern manufacturing." },
{ icon: Users, title: "Teamwork", desc: "We collaborate internally and with our customers to find the best solutions for every challenge." },
{ icon: Target, title: "Resiliency", desc: "We persevere through challenges and find innovative solutions when conventional approaches fall short." },
{ icon: MessageCircle, title: "Communication", desc: "Open, honest, and proactive communication is the foundation of every successful customer relationship." }];


const AboutLanding = () =>
<Layout>
    <PageHero title="About Vail Rubber Works" subtitle="Over 130+ years of innovation, expertise, and commitment to keeping American manufacturing running." bgImage={historyImg} />

    <section className="py-16 md:py-20">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Our Story</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 1891 in St. Joseph, Michigan, Vail Rubber Works began as a small rubber goods manufacturer serving the local community. Over the past 130+ years, we have evolved into a nationally recognized leader in custom roll covering, roll maintenance, and industrial roll services, serving manufacturing facilities from coast to coast.
          </p>
          <p className="mt-4 text-muted-foreground">
            Today, with two service centers — our headquarters in St. Joseph, Michigan and our Mobile Service Center in Axis, Alabama — we provide fast, reliable roll services to industries including steel processing, aluminum manufacturing, paper making, plastics, and many other industrial applications. Our commitment to quality, innovation, and customer service has remained constant throughout our history.
          </p>
          <p className="mt-4 text-muted-foreground">
            What sets Vail Rubber Works apart is our people. Our team of experienced engineers, technicians, and support staff bring decades of combined expertise to every project. We invest in our people through continuous training and professional development, ensuring that our customers always benefit from the latest technologies and best practices.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-xl">
          <img src={imgSrc(history1Img)} alt="Vail Rubber Works history" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">Our Core Values</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-lg">
          These values guide everything we do — from how we engineer our products to how we serve our customers and support our communities.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) =>
        <div key={v.title} className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-foreground text-[22px]">{v.title}</h3>
              <p className="mt-1 text-muted-foreground text-lg">{v.desc}</p>
            </div>
        )}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">Explore More About Vail</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
        { label: "Safety Mission/Vision", to: "/about-us/safety-mission-vision" },
        { label: "Organizations", to: "/about-us/organizations" },
        { label: "Employment", to: "/about-us/employment" },
        { label: "Contact Us", to: "/contact-us" },
        { label: "Privacy Policy", to: "/about-us/privacy-policy" }].
        map((l) =>
        <Link key={l.to} href={l.to} className="rounded-lg border bg-card p-5 text-center font-sans font-semibold text-foreground transition-all hover:-translate-y-1 hover:shadow-md hover:text-primary">
              {l.label}
            </Link>
        )}
        </div>
      </div>
    </section>
  </Layout>;


export default AboutLanding;