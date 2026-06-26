import Testimonials from "@/views/Testimonials";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.testimonials;

export default function Page() {
  return <Testimonials />;
}
