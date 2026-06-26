import Index from "@/views/Index";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.home;

export default function Page() {
  return <Index />;
}
