"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Maintenance Manager", company: "Major Steel Processing Plant", quote: "Vail Rubber Works has been our go-to partner for roll maintenance for over 15 years. Their turnaround time and quality of work are unmatched in the industry. When we have a critical roll failure, their team responds immediately and gets us back up and running fast.", problem: "Frequent roll failures causing unplanned downtime", solution: "Proactive maintenance program with custom-engineered covers", result: "70% reduction in unplanned roll-related downtime" },
  { name: "Production Engineer", company: "Paper Mill", quote: "The custom-engineered covers from Vail dramatically reduced our downtime. Their technical team took the time to understand our specific process and delivered a solution that exceeded our expectations. We've since expanded their role to cover all our roll maintenance needs.", problem: "Short roll life on calender rolls causing frequent production stops", solution: "Custom rubber compound with improved heat and chemical resistance", result: "Roll life extended from 6 months to over 18 months" },
  { name: "Plant Manager", company: "Aluminum Rolling Facility", quote: "We switched to Vail for our thermal spray needs and saw a 4x improvement in roll life. The ROI was immediate and the service has been outstanding. Their engineering team truly understands the unique challenges of aluminum processing.", problem: "Chrome-plated rolls lasting only 3 months in aggressive environment", solution: "Thermal spray tungsten carbide coating with optimized surface finish", result: "Roll life extended to 12+ months with improved surface quality" },
];

const Testimonials = () => (
  <Layout>
    <PageHero title="Testimonials" subtitle="What our customers say about working with Vail Rubber Works." />

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="mx-auto mb-12 max-w-3xl text-center text-muted-foreground">
          Our customers are the best measure of our success. Here are some of the results we've helped manufacturers achieve across the country. <em>(Placeholder testimonials — real customer stories coming soon.)</em>
        </p>
        <div className="mx-auto max-w-4xl space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg border bg-card p-8 transition-shadow hover:shadow-md">
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="text-lg italic text-muted-foreground">"{t.quote}"</p>
              <div className="mt-4 border-t pt-4">
                <p className="font-sans font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>

              <div className="mt-6 grid gap-4 rounded-lg bg-secondary p-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Problem</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Solution</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Result</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
