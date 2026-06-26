import SteelIndustry from "@/views/industries/SteelIndustry";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.steel;

export default function Page() {
  return <SteelIndustry />;
}
