import ServicesLanding from "@/views/services/ServicesLanding";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.services;

export default function Page() {
  return <ServicesLanding />;
}
