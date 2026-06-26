"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import coverImg from "@/assets/papermill-roll.png";
import paperMachineImg from "@/assets/paper-making-machine.png";
import { CheckCircle } from "lucide-react";

const coverBenefits = [
"Knowledge to help improve your paper making or converting without compromising quality",
"Cost-control insight for your operations",
"Custom rubber and special compound formulations that last longer, perform better",
"Dedicated field support and FREE onsite roll analysis"];


const repairServices = [
"Roll grinding",
"General roll repair",
"Spare parts"];





const PaperIndustry = () =>
<Layout>
    <PageHero title="Paper Making and Converting" subtitle="Roll solutions for paper making, converting, and packaging operations." bgImage={paperMachineImg} />

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Vail Custom Roll Covers Keep More Money in Your Operations</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You rarely save money when you constantly recover your paper making or converting equipment rolls. That's why the lowest-priced roll cover isn't necessarily the "best buy." To really save money in your operations you need to significantly increase the run times between roll recovering. Come to Vail roll specialists for:
          </p>
          <ul className="mt-6 space-y-3">
            {coverBenefits.map((b) =>
          <li key={b} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{b}</span>
              </li>
          )}
          </ul>
        </div>
      </div>
    </section>

    {/* Repair Services */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Timely Repairs & Refurbishment</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You have no time to waste in the pulp and paper making or converting. When your roll covers need repairs or refurbishing, turn to our St. Joseph or Mobile Service Centers. Our quality workmanship earns your confidence and our timely deliveries your repeat business.
          </p>
          <ul className="mt-6 space-y-3">
            {repairServices.map((s) =>
          <li key={s} className="flex gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{s}</span>
              </li>
          )}
          </ul>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(coverImg)} alt="Paper industry roll covers" className="h-full w-full object-cover object-center" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Converting */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Converting & Packaging Applications</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Paper converting operations — including corrugating, laminating, printing, coating, slitting, and rewinding — each have unique roll requirements. Corrugating rolls must maintain precise flute profiles under heavy loads. Laminating rolls need consistent nip pressure. Printing impression rolls require exact diameter tolerances.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether you're running a large-scale paper mill or a specialized converting operation, Vail Rubber Works has the expertise, equipment, and service infrastructure to keep your rolls performing at their best.
          </p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Paper and Converting Roll Experts</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Let our paper industry specialists help optimize your roll performance.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Us
        </Link>
      </div>
    </section>
  </Layout>;


export default PaperIndustry;