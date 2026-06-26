import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import { Providers } from "./providers";
import { ScrollToTopOnNav } from "@/components/ScrollToTopOnNav";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site-metadata";
import "@/index.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: `${SITE_NAME} | Custom Roll Covers & Services`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "130+ years of custom-engineered roll covers, precision grinding, thermal spray, and roll maintenance. Serving U.S. manufacturers nationwide.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.variable} ${sourceSans.variable} font-sans antialiased`}>
        <Providers>
          <ScrollToTopOnNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
