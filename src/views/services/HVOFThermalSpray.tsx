"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import hvofImg from "@/assets/hvof.jpg";
import thermalSprayBenefitsImg from "@/assets/hvof-thermal-spray.png";
import thermalSprayGunImg from "@/assets/thermal-spray-gun.png";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Up to 4x longer part life compared to chrome plating or conventional thermal spray",
  "Extremely low porosity (less than 1%) prevents corrosion and material infiltration",
  "Superior bond strength exceeding 10,000 PSI ensures coating integrity under heavy loads",
  "Hardness values of 1100–1400 HV provide exceptional wear resistance",
  "Environmentally friendly alternative to hard chrome plating (no hexavalent chromium)",
  "Consistent, uniform coating thickness for reliable performance",
  "Can be applied to new parts or used to refurbish worn components",
  "Cost-effective over the total lifecycle despite higher initial investment",
];

const HVOFThermalSpray = () => (
  <Layout>
    <PageHero title="Thermal Spray" subtitle="High-performance thermal spray coatings that extend part life up to 4x compared to conventional methods." bgImage={hvofImg} />

    {/* Intro - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">What Is Thermal Spray?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Thermal spray is an advanced surface coating technology that produces extremely dense, well-bonded coatings with superior hardness and wear resistance. The process accelerates coating particles to supersonic velocities, creating a coating with exceptional density, adhesion, and mechanical properties.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unlike conventional coating and thermal spray methods, our process produces coatings with significantly lower porosity (typically less than 1%), higher bond strength (exceeding 10,000 PSI), and greater hardness — translating directly into longer part life, better surface quality, and improved performance.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(thermalSprayGunImg)} alt="Thermal spray gun in operation" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Thermal Spray Process</h2>
          <p className="mt-3 text-muted-foreground">Watch our advanced thermal spray coating process in action.</p>
          <div className="mt-8">
            <YouTubeEmbed videoId="vcgZQneoDug" title="Thermal Spray Coatings" />
          </div>
        </div>
      </div>
    </section>

    {/* Benefits - 50/50 */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(thermalSprayBenefitsImg)} alt="Thermal spray coating process" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Thermal Spray Coating Benefits</h2>
          <ul className="mt-6 space-y-3">
            {benefits.map((b, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Applications */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Applications Across Industries</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Thermal spray coatings are used across a wide range of industries and roll types — including bridle rolls, looper rolls, deflector rolls, sink rolls, and pot equipment. In the steel industry, thermal spray-coated rolls resist extreme wear and thermal cycling. In aluminum processing, thermal spray coatings protect rolls from abrasive aluminum oxide and high temperatures.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our service includes complete part preparation, masking, coating application, grinding to final dimensions, and quality inspection. We work with customers to select the optimal coating material, thickness, and surface finish for each application.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Interested in Thermal Spray?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Find out how our advanced thermal spray coatings can extend the life of your critical components.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90">
          Get a Quote
        </Link>
      </div>
    </section>
  </Layout>
);

export default HVOFThermalSpray;
