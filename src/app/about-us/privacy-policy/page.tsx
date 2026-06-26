import PrivacyPolicy from "@/views/about/PrivacyPolicy";
import { pageMetadata } from "@/lib/site-metadata";

export const metadata = pageMetadata.privacyPolicy;

export default function Page() {
  return <PrivacyPolicy />;
}
