import Organizations from "@/views/about/Organizations";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.organizations;

export default function Page() {
  return <Organizations />;
}
