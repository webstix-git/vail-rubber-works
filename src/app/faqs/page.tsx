import FAQ from "@/views/FAQ";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.faqs;

export default function Page() {
  return <FAQ />;
}
