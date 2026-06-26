"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Shield, Eye, Target } from "lucide-react";

const SafetyMissionVision = () =>
<Layout>
    <PageHero title="Safety Mission/Vision" subtitle="Our commitment to safety, our mission, and our vision for the future." />

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 rounded-lg border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Safety Commitment</h2>
            <p className="mt-4 text-muted-foreground">
              At Vail Rubber Works, safety is not just a priority — it is a core value that is woven into every aspect of our operations. We are committed to providing a safe and healthy work environment for all employees, contractors, and visitors. Our safety programs are designed to identify and eliminate hazards, prevent accidents and injuries, and promote a culture of safety awareness throughout our organization.
            </p>
            <p className="mt-4 text-muted-foreground">
              We invest continuously in safety training, equipment, and procedures to ensure that every member of our team has the knowledge and tools they need to work safely. Our safety record reflects our commitment — and we work every day to maintain and improve it.
            </p>
          </div>

          <div className="mb-12 rounded-lg border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Our mission is to be the most trusted partner for custom-engineered roll covers and industrial roll services in North America. We achieve this by delivering superior products, providing expert technical support, and building long-term relationships with our customers based on trust, reliability, and mutual success.
            </p>
            <p className="mt-4 text-muted-foreground">
              We are committed to understanding the unique needs of each customer and developing tailored solutions that improve their operational efficiency, reduce costs, and enhance product quality. Our mission drives us to continuously innovate, invest in our capabilities, and exceed our customers' expectations.
            </p>
          </div>

          <div className="rounded-lg border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            <p className="mt-4 text-muted-foreground">
              Our vision is to be the Internationally recognized leader in custom roll covering technology and industrial roll services — the company that manufacturers turn to first when they face their most challenging roll applications. We envision a future where our expertise, innovation, and commitment to service set the standard for excellence in our industry.
            </p>
            <p className="mt-4 text-muted-foreground">
              We will achieve this vision by investing in our people, our technology, and our facilities; by embracing new materials and processes; and by never losing sight of the values that have sustained us for over 130+ years.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>;


export default SafetyMissionVision;