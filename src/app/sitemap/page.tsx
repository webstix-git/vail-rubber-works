import Sitemap from "@/views/Sitemap";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.sitemap;

export default function Page() {
  return <Sitemap />;
}
