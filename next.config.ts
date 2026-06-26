import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/about/safety-mission-vision", destination: "/about-us/safety-mission-vision", permanent: true },
      { source: "/about/privacy-policy", destination: "/about-us/privacy-policy", permanent: true },
      { source: "/about/organizations", destination: "/about-us/organizations", permanent: true },
      { source: "/about/employment", destination: "/about-us/employment", permanent: true },
      { source: "/about/contact-us", destination: "/contact-us", permanent: true },
      { source: "/contact-vail", destination: "/contact-us", permanent: true },
      { source: "/industries/metal", destination: "/industries/steel", permanent: true },
      { source: "/industries/diverse", destination: "/industries/other-industrial", permanent: true },
      { source: "/about-us/news", destination: "/about-us", permanent: true },
      { source: "/about-us/history", destination: "/about-us", permanent: true },
      { source: "/roll-analysis-request", destination: "/contact-us", permanent: true },
      { source: "/search", destination: "/", permanent: true },
      { source: "/faq", destination: "/faqs", permanent: true },
    ];
  },
};

export default nextConfig;
