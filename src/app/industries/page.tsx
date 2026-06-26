import IndustriesLanding from "@/views/industries/IndustriesLanding";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.industries;

export default function Page() {
  return <IndustriesLanding />;
}
