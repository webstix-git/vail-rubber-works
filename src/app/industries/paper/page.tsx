import PaperIndustry from "@/views/industries/PaperIndustry";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.paper;

export default function Page() {
  return <PaperIndustry />;
}
