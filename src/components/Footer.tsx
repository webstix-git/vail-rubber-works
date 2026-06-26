"use client";

import { imgSrc } from "@/lib/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Youtube, Linkedin, Printer } from "lucide-react";
import vailLogo from "@/assets/vail-logo.jpg";

const Footer = () =>
<footer className="border-t bg-foreground text-background">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & About */}
        <div>
          <img src={imgSrc(vailLogo)} alt="Vail Rubber Works" className="mb-4 h-[140px] w-auto rounded bg-white p-2" />
          <p className="leading-relaxed opacity-80 text-base">
            Custom-engineered roll covers and industrial components since 1891. Keeping your equipment running efficiently with durable products and expert services.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.youtube.com/user/VailRubberWorksInc" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20">
              <Youtube className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/company/vail-rubber-works-incorporated" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 transition-colors hover:bg-background/20">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-70">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
          { label: "Services", to: "/services" },
          { label: "Industries", to: "/industries" },
          { label: "About Vail", to: "/about-us" },
          { label: "FAQs", to: "/faqs" },
          { label: "Gallery", to: "/gallery" },
          { label: "Employment", to: "/about-us/employment" },
          { label: "Contact Us", to: "/contact-us" }].
          map((l) =>
          <li key={l.to} className="text-base">
                <Link href={l.to} className="opacity-80 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              </li>
          )}
          </ul>
        </div>

        {/* St. Joseph */}
        <div>
          <h4 className="mb-4 font-sans font-semibold uppercase tracking-wider opacity-70 text-sm">St. Joseph Service Center</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 202 West Glenlord Rd.<br />St. Joseph, MI 49085</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:269-983-1595" className="hover:opacity-100">269-983-1595</a></li>
            <li className="flex gap-2"><Printer className="h-4 w-4 shrink-0" /> Fax: 269-983-0155</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0" /> <a href="mailto:sales@vailrubber.com" className="hover:opacity-100">sales@vailrubber.com</a></li>
          </ul>
        </div>

        {/* Mobile */}
        <div>
          <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-70">Mobile Service Center</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 124 Salco Road East<br />Axis, AL 36505</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0" /> <a href="tel:251-675-5644" className="hover:opacity-100">251-675-5644</a></li>
            <li className="flex gap-2"><Printer className="h-4 w-4 shrink-0" /> Fax: 251-675-5297 </li>
          </ul> 
        </div>
      </div>

      <div className="mt-10 border-t border-background/20 pt-6 text-center text-sm text-keep-sm opacity-60">
        &copy; {new Date().getFullYear()} Vail Rubber Works, Inc. All rights reserved. |{" "}
        <Link href="/sitemap" className="underline hover:opacity-100">Sitemap</Link> |{" "}
        <Link href="/about-us/privacy-policy" className="underline hover:opacity-100">Privacy Policy</Link>
      </div>
    </div>
  </footer>;


export default Footer;
