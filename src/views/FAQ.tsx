"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import faqBanner from "@/assets/faq-banner-new.png";

const faqItems = [
  { q: "What industries does Vail Rubber Works serve?", a: "We serve a wide range of industries including flat rolled steel and aluminum processing, paper making and converting, plastics and film manufacturing, and many other industrial applications. Our engineering team has deep expertise in each of these sectors and can develop custom roll solutions for virtually any industrial application." },
  { q: "What types of roll covers do you offer?", a: "We offer a comprehensive range of roll covers including natural and synthetic rubber, polyurethane, tungsten carbide (applied via thermal spray), non-woven fiber, ceramic fiber, and Masroll covers. Each cover is custom-engineered based on your specific process requirements including operating temperatures, chemical exposure, nip loads, and surface finish requirements." },
  { q: "What is your typical turnaround time?", a: "Turnaround times vary depending on the scope of work required. Regrinds typically take 1 to 2 weeks, recovering takes about 3 to 4 weeks, and new roll fabrication can be completed in as quickly as 6 weeks. We also offer expedited services for emergency situations. Contact us for a specific timeline based on your needs." },
  { q: "Do you offer pick-up and delivery services?", a: "Yes, we provide complete pick-up and delivery services from both of our locations in St. Joseph, Michigan and Mobile, Alabama. Our dedicated roll transportation equipment and experienced logistics team ensure your rolls are handled safely and delivered on time." },
  { q: "What is thermal spray and why should I consider it?", a: "Thermal spray is an advanced coating technology that produces extremely dense, hard coatings with superior wear resistance. Thermal spray coatings can extend part life up to 4x compared to conventional chrome plating, making them an excellent long-term investment for critical roll applications." },
  { q: "Can you help with a roll that isn't performing well?", a: "Absolutely! That's one of our specialties. Our engineering team can analyze your application, identify the root cause of performance issues, and recommend solutions — whether that's a different cover material, a design modification, or an improved maintenance schedule. Contact us to discuss your specific challenge." },
  { q: "Do you work with OEMs?", a: "Yes, we serve Original Equipment Manufacturers who require precision roll components for their machinery. We work with OEM engineering teams during the design phase and provide ongoing manufacturing and maintenance support throughout the equipment lifecycle." },
  { q: "How do I know which cover material is right for my application?", a: "Our engineering team will work with you to evaluate your specific requirements including operating conditions, chemical environment, mechanical loads, and performance expectations. Based on this analysis, we'll recommend the optimal cover material and design. We're happy to provide samples and test data to support your decision." },
  { q: "What are your service areas?", a: "Vail Rubber Works serves manufacturing facilities across North America. With service centers in St. Joseph, Michigan and Mobile, Alabama, we provide fast, reliable service to customers throughout the region." },
  { q: "How can I request a quote?", a: "You can request a quote by contacting us through our Contact Us page, calling us at 269-983-1595 (St. Joseph) or 251-675-5644 (Mobile), or emailing us at sales@vailrubber.com. Please provide as much detail as possible about your roll application and requirements so we can provide an accurate estimate." },
];

const FAQ = () => (
  <Layout>
    <PageHero title="FAQs" subtitle="Answers to common questions about our products, services, and capabilities." bgImage={faqBanner} />

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((faq, i) => (
            <details key={i} open className="group rounded-lg border bg-card">
              <summary className="cursor-pointer list-none px-6 py-5 font-sans text-lg font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="border-t px-6 py-4 text-muted-foreground">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQ;
