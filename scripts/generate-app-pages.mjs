import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "src", "app");

const routes = [
  { segment: "", view: "@/views/Index", meta: "pageMetadata.home" },
  { segment: "services", view: "@/views/services/ServicesLanding", meta: "pageMetadata.services" },
  { segment: "services/custom-engineered-covers", view: "@/views/services/CustomEngineeredCovers", meta: "pageMetadata.customEngineeredCovers" },
  { segment: "services/roll-maintenance", view: "@/views/services/RollMaintenance", meta: "pageMetadata.rollMaintenance" },
  { segment: "services/hvof-thermal-spray", view: "@/views/services/HVOFThermalSpray", meta: "pageMetadata.hvofThermalSpray" },
  { segment: "services/roll-design-fabrication", view: "@/views/services/RollDesignFabrication", meta: "pageMetadata.rollDesignFabrication" },
  { segment: "services/mandrel-sleeves", view: "@/views/services/MandrelSleeves", meta: "pageMetadata.mandrelSleeves" },
  { segment: "services/other-services", view: "@/views/services/OtherServices", meta: "pageMetadata.otherServices" },
  { segment: "industries", view: "@/views/industries/IndustriesLanding", meta: "pageMetadata.industries" },
  { segment: "industries/steel", view: "@/views/industries/SteelIndustry", meta: "pageMetadata.steel" },
  { segment: "industries/aluminum", view: "@/views/industries/AluminumIndustry", meta: "pageMetadata.aluminum" },
  { segment: "industries/paper", view: "@/views/industries/PaperIndustry", meta: "pageMetadata.paper" },
  { segment: "industries/other-industrial", view: "@/views/industries/OtherIndustrial", meta: "pageMetadata.otherIndustrial" },
  { segment: "about-us", view: "@/views/about/AboutLanding", meta: "pageMetadata.aboutUs" },
  { segment: "about-us/safety-mission-vision", view: "@/views/about/SafetyMissionVision", meta: "pageMetadata.safetyMissionVision" },
  { segment: "about-us/privacy-policy", view: "@/views/about/PrivacyPolicy", meta: "pageMetadata.privacyPolicy" },
  { segment: "about-us/organizations", view: "@/views/about/Organizations", meta: "pageMetadata.organizations" },
  { segment: "about-us/employment", view: "@/views/about/Employment", meta: "pageMetadata.employment" },
  { segment: "contact-us", view: "@/views/about/ContactUs", meta: "pageMetadata.contactUs" },
  { segment: "faqs", view: "@/views/FAQ", meta: "pageMetadata.faqs" },
  { segment: "sitemap", view: "@/views/Sitemap", meta: "pageMetadata.sitemap" },
  { segment: "gallery", view: "@/views/Gallery", meta: "pageMetadata.gallery" },
  { segment: "testimonials", view: "@/views/Testimonials", meta: "pageMetadata.testimonials" },
  { segment: "thank-you", view: "@/views/ThankYou", meta: "pageMetadata.thankYou" },
  { segment: "employment-thankyou", view: "@/views/EmploymentThankYou", meta: "pageMetadata.employmentThankYou" },
  { segment: "contact-thankyou", view: "@/views/ContactThankYou", meta: "pageMetadata.contactThankYou" },
];

function componentName(viewPath) {
  return viewPath.split("/").pop();
}

for (const route of routes) {
  const pageDir = route.segment ? path.join(appDir, ...route.segment.split("/")) : appDir;
  fs.mkdirSync(pageDir, { recursive: true });

  const name = componentName(route.view);
  const content = `import ${name} from "${route.view}";
import { ${route.meta.split(".")[0]} } from "@/lib/site-metadata";

export const metadata = ${route.meta};

export default function Page() {
  return <${name} />;
}
`;

  fs.writeFileSync(path.join(pageDir, "page.tsx"), content);
}

// not-found.tsx
fs.writeFileSync(
  path.join(appDir, "not-found.tsx"),
  `import NotFound from "@/views/NotFound";

export default function NotFoundPage() {
  return <NotFound />;
}
`
);

console.log(`Generated ${routes.length} app pages.`);
