"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import harkerImg from "@/assets/harker.jpg";
import isoImg from "@/assets/iso-cert-logo.jpg";
import { CheckCircle, FileCheck } from "lucide-react";

const rollApplications = [
"Applicator / Coater Rolls", "Bridle Rolls", "Deflector Rolls", "Furnace Exit Rolls",
"Hold Down / Ironing Rolls", "Mechanical Rolls", "Pinch Rolls", "Sink Rolls",
"Steering Rolls", "Synchrowind Rolls", "Tension Leveler Rolls", "Wringer / Squeegee Rolls"];


const products = [
{ name: "Z-Series™", props: "50–95 Shore A; 340°F max", detail: "Resistant to high heat, cutting, tearing, wear, acids/caustics, oils." },
{ name: "Ni-Chem™", props: "60–90 Shore A; 225°F max", detail: "Resistant to abrasion & caustic solutions." },
{ name: "Orange Squeeze™", props: "70–90 Shore A; 225°F max", detail: "Resistant to abrasion & acidic solutions." },
{ name: "PL Series™", props: "80–95 Shore A; 225°F max", detail: "Resistant to abrasion, cutting, chemicals including acids & oils." },
{ name: "DuraSqueeze XT™", props: "70–90 Shore A; 275°F max", detail: "Excellent for elevated temps, physical and chemical applications." },
{ name: "BlueCoat™", props: "70–90 Shore A; 275°F max", detail: "Superior abrasion and chemical resistance." },
{ name: "Resistex™", props: "60–80 Shore A; 180°F max", detail: "Resistant to HCL & general acids, good abrasion resistance." },
{ name: "BlackFire™", props: "40–100 Shore A; 225°F max", detail: "Good in caustic, acidic, and oily applications. Superior wear." },
{ name: "Core Guard™", props: "~75–80 Shore D", detail: "Excellent resistance to cutting, used as a \"hard base\"." },
{ name: "Thermodur™", props: "60–70 Shore D; 2200°F max", detail: "Developed for hot and cold rolling mill furnaces." },
{ name: "Polycast™", props: "70–90 Shore A; 160°F max", detail: "Excellent cut/abrasion resistance in wet/humid environments." },
{ name: "Polycast+™", props: "60 Shore A–75 Shore D; 180°F max", detail: "Excellent abrasion/loading resistance in wet/humid environments." },
{ name: "Polylast™", props: "30 Shore A–60 Shore D; 180°F max", detail: "Ideal for heavily loaded mechanical applications, good oil resistance." },
{ name: "Polytek™", props: "55–65 Shore A; 180°F max", detail: "Outstanding cut/tear/wear resistance for this hardness range." },
{ name: "Polyfire™", props: "80–95 Shore A; 250°F max", detail: "Excellent mechanical roll at higher temperatures." },
{ name: "Nitrile", props: "40–100 Shore A; 225°F max", detail: "Interchangeable between caustics & acids. Excellent in oily applications." },
{ name: "CSM", props: "35–95 Shore A; 275°F max", detail: "Combination of temp, abrasion, chemical, and oil resistance." },
{ name: "EPDM", props: "30–95 Shore A; 300°F max", detail: "Resistant to chromic acid, caustic solutions, and weathering." }];


const MetalIndustry = () =>
<Layout>
    <PageHero title="Metal Industry" subtitle="Roll solutions engineered for flat rolled steel and aluminum processing." bgImage={harkerImg} />

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Get the Lowest Total Cost, Not Just the Lowest Unit Price</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Don't be fooled by others who try to convince you that driving down individual roll cover prices will save your operating budget. One of our customers switched from a competitor's "economical" wringer roll cover to a Vail custom-formulated cover priced nearly four times higher — but it ran seven times longer. More expensive per unit, but what a savings! No other manufacturer has matched Vail's lowest total cost performance in this application.
          </p>
        </div>
      </div>
    </section>

    {/* ISO + Roll Applications */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            {/* ISO Certification */}
            <div className="shrink-0 rounded-xl border bg-card p-6 text-center md:w-64">
              <div className="flex items-center justify-center gap-2">
                <FileCheck className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-foreground">ISO Certified</h3>
              </div>
              <img src={imgSrc(isoImg)} alt="ISO Certification" className="mx-auto mt-4 h-24 object-contain" loading="lazy" />
              <p className="mt-3 text-sm text-muted-foreground">Use our ISO certification to help you meet the highest global standards.</p>
            </div>
            {/* Roll Applications */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Roll Applications</h2>
              <p className="mt-3 text-muted-foreground">With Vail's expertise, get longer-running covers for:</p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {rollApplications.map((app) =>
              <div key={app} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{app}</span>
                  </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Steel Processing */}
    <section className="py-16 md:py-24">
      <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Steel Processing Applications</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            In steel processing, rolls face some of the harshest operating conditions. Finish process lines operate at temperatures up to 300°F for covered roll applications. Temper mills subject rolls to extreme nip pressures. Pickling lines expose rolls to hydrochloric, sulfuric, nitric, hydrofluoric, and other solutions.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our thermal spray tungsten carbide coatings deliver 4x the life of conventional chrome plating on metal process line rolls. Our specialized rubber compounds resist acid attack in pickling operations. And our precision grinding ensures surface quality for temper mill applications.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img src={imgSrc(harkerImg)} alt="Steel processing rolls" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Video */}
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Custom Roll Solutions for Southeast Customers</h2>
          <p className="mt-3 text-muted-foreground">See how Vail delivers cost-lowering solutions to your toughest roll problems.</p>
          <div className="mt-8">
            <YouTubeEmbed videoId="uvW43LHJolc" title="Custom Roll Solutions for Southeast Customers" />
          </div>
        </div>
      </div>
    </section>

    {/* Products Table */}
    <section className="py-16 md:py-0">
      























    
    </section>

    {/* CTA */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">Need Metal Processing Roll Solutions?</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">Our metal industry specialists are ready to help solve your toughest roll challenges.</p>
        <Link href="/contact-us" className="mt-6 inline-block rounded-md bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90 text-lg">
          Contact Our Team
        </Link>
      </div>
    </section>
  </Layout>;


export default MetalIndustry;