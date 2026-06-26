import AboutLanding from "@/views/about/AboutLanding";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.aboutUs;

export default function Page() {
  return <AboutLanding />;
}
