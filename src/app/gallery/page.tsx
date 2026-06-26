import Gallery from "@/views/Gallery";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.gallery;

export default function Page() {
  return <Gallery />;
}
