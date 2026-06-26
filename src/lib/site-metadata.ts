import type { Metadata } from "next";

export const SITE_ORIGIN = "https://www.vailrubber.com";
export const SITE_NAME = "Vail Rubber Works";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const normalizedPath = path === "/" ? "" : path.replace(/\/+$/, "");
  const canonical = normalizedPath === "" ? SITE_ORIGIN : `${SITE_ORIGIN}${normalizedPath}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
  };
}

export const pageMetadata = {
  home: createPageMetadata({
    title: "Vail Rubber Works | Custom Roll Covers & Services",
    description:
      "130+ years of custom-engineered roll covers, precision grinding, thermal spray, and roll maintenance. Serving U.S. manufacturers nationwide.",
    path: "/",
  }),
  services: createPageMetadata({
    title: "Roll Covering & Maintenance Services | Vail Rubber",
    description:
      "Custom roll covers, precision grinding, thermal spray, roll fabrication, and logistics. Full-service roll solutions from Vail Rubber Works.",
    path: "/services",
  }),
  customEngineeredCovers: createPageMetadata({
    title: "Custom Engineered Roll Covers | Vail Rubber Works",
    description:
      "Rubber, polyurethane, tungsten carbide, and specialty roll covers custom-engineered for your exact process. Expert formulation since 1891.",
    path: "/services/custom-engineered-covers",
  }),
  rollMaintenance: createPageMetadata({
    title: "Roll Maintenance & Grinding | Vail Rubber Works",
    description:
      "Precision CNC roll grinding, refurbishing, journal repair, and dynamic balancing. Extend roll life and reduce downtime with expert maintenance.",
    path: "/services/roll-maintenance",
  }),
  hvofThermalSpray: createPageMetadata({
    title: "Thermal Spray Coatings | Vail Rubber Works",
    description:
      "Thermal spray tungsten carbide coatings that extend part life up to 4x vs. chrome plating. Dense, hard, wear-resistant coatings for industrial rolls.",
    path: "/services/hvof-thermal-spray",
  }),
  rollDesignFabrication: createPageMetadata({
    title: "Roll Design & Fabrication | Vail Rubber Works",
    description:
      "Complete steel roll manufacturing and roll core design services using SolidWorks. Precision fabrication from initial concept through final inspection.",
    path: "/services/roll-design-fabrication",
  }),
  mandrelSleeves: createPageMetadata({
    title: "Mandrel Sleeves | Vail Rubber Works",
    description:
      "Custom mandrel sleeves for winding, unwinding, and tension control applications. Precision-engineered for reliable grip and long service life.",
    path: "/services/mandrel-sleeves",
  }),
  otherServices: createPageMetadata({
    title: "Pads, Slitter Rings, Custom Molded Parts & Steel Rack Fabrications | Vail Rubber Works",
    description:
      "Custom rubber pads, precision slitter rings, custom molded rubber parts, and steel rack fabrications engineered for industrial applications by Vail Rubber Works.",
    path: "/services/other-services",
  }),
  industries: createPageMetadata({
    title: "Industries We Serve | Vail Rubber Works",
    description:
      "Custom roll solutions for steel, aluminum, specialty alloy, paper, plastics, film, and specialty manufacturing. Over 130+ years of industrial roll expertise.",
    path: "/industries",
  }),
  steel: createPageMetadata({
    title: "Steel Industry Roll Solutions | Vail Rubber Works",
    description:
      "Custom roll covers for steel processing. Heat-resistant, corrosion-proof covers engineered for flat rolled steel operations.",
    path: "/industries/steel",
  }),
  aluminum: createPageMetadata({
    title: "Aluminum Industry Roll Solutions | Vail Rubber Works",
    description:
      "Precision roll covers for aluminum processing. Engineered for surface-sensitive applications requiring zero marking and consistent finish quality.",
    path: "/industries/aluminum",
  }),
  paper: createPageMetadata({
    title: "Paper Industry Roll Solutions | Vail Rubber Works",
    description:
      "Custom roll covers and maintenance for paper making and converting. Improve consistency, efficiency, and run times with proven compounds.",
    path: "/industries/paper",
  }),
  otherIndustrial: createPageMetadata({
    title: "Other Industrial Roll Solutions | Vail Rubber Works",
    description:
      "Custom roll technologies for plastics, film, textile, food processing, and specialty industrial applications from Vail Rubber Works.",
    path: "/industries/other-industrial",
  }),
  aboutUs: createPageMetadata({
    title: "About Vail Rubber Works | 130+ Years of Excellence",
    description:
      "Learn about Vail Rubber Works' 130+ year history of innovation in custom roll covering and industrial roll services across the United States.",
    path: "/about-us",
  }),
  safetyMissionVision: createPageMetadata({
    title: "Safety, Mission & Vision | Vail Rubber Works",
    description:
      "Discover Vail Rubber Works' commitment to workplace safety, our mission to deliver custom roll solutions, and our vision for the future.",
    path: "/about-us/safety-mission-vision",
  }),
  privacyPolicy: createPageMetadata({
    title: "Privacy Policy | Vail Rubber Works",
    description:
      "Read how Vail Rubber Works collects, uses, and protects your personal information. Our privacy practices explained clearly.",
    path: "/about-us/privacy-policy",
  }),
  organizations: createPageMetadata({
    title: "Industry Organizations | Vail Rubber Works",
    description:
      "Vail Rubber Works proudly supports AIST, NCCA, PMA, and other industry associations and community organizations nationwide.",
    path: "/about-us/organizations",
  }),
  employment: createPageMetadata({
    title: "Careers at Vail Rubber Works | Apply Now",
    description:
      "Join the Vail Rubber Works team. Apply online for manufacturing, maintenance, and engineering positions at our Michigan and Alabama facilities.",
    path: "/about-us/employment",
  }),
  contactUs: createPageMetadata({
    title: "Contact Us | Vail Rubber Works",
    description:
      "Contact Vail Rubber Works for custom roll covers, maintenance, and thermal spray coatings. Call 269-983-1595 or request a free consultation online.",
    path: "/contact-us",
  }),
  faqs: createPageMetadata({
    title: "FAQs | Vail Rubber Works",
    description:
      "Find answers to common questions about Vail Rubber Works' roll covering, grinding, thermal spray, turnaround times, and service areas.",
    path: "/faqs",
  }),
  sitemap: createPageMetadata({
    title: "Sitemap | Vail Rubber Works",
    description: "Complete sitemap of Vail Rubber Works — browse all services, industries, and company pages.",
    path: "/sitemap",
  }),
  gallery: createPageMetadata({
    title: "Photo Gallery | Vail Rubber Works",
    description:
      "Browse photos of Vail Rubber Works' facilities, roll covering operations, precision grinding, and finished products from our Michigan and Alabama plants.",
    path: "/gallery",
  }),
  testimonials: createPageMetadata({
    title: "Testimonials | Vail Rubber Works",
    description:
      "Read what manufacturers say about Vail Rubber Works' roll covering and maintenance services. Real results from real industrial customers.",
    path: "/testimonials",
  }),
  thankYou: createPageMetadata({
    title: "Thank You | Vail Rubber Works",
    description:
      "Your submission has been received. A Vail Rubber Works team member will respond within 1-2 business days.",
    path: "/thank-you",
  }),
  employmentThankYou: createPageMetadata({
    title: "Application Received | Vail Rubber Works Careers",
    description:
      "Thank you for applying to Vail Rubber Works. Our HR team will review your employment application and contact qualified candidates within 5-7 business days.",
    path: "/employment-thankyou",
  }),
  contactThankYou: createPageMetadata({
    title: "Message Received | Vail Rubber Works",
    description:
      "Thank you for contacting Vail Rubber Works. A team member will respond to your inquiry within 1-2 business days.",
    path: "/contact-thankyou",
  }),
  notFound: createPageMetadata({
    title: "Page Not Found | Vail Rubber Works",
    description:
      "The page you are looking for could not be found. Browse our sitemap or search for what you need.",
    path: "/404",
  }),
} as const;
