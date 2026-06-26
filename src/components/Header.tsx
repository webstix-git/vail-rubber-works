"use client";

import { imgSrc } from "@/lib/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, ChevronRight } from "lucide-react";
import vailLogo from "@/assets/vail-logo.jpg";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface NavChild {
  label: string;
  to: string;
  children?: NavChild[];
}

interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
{ label: "Home", to: "/" },
{
  label: "Services",
  to: "/services",
  children: [
  { label: "Services", to: "/services" },
  { label: "Custom Engineered Covers", to: "/services/custom-engineered-covers" },
  { label: "Roll Core Maintenance", to: "/services/roll-maintenance" },
  { label: "Roll Design & Fabrication", to: "/services/roll-design-fabrication" },
  { label: "Thermal Spray", to: "/services/hvof-thermal-spray" },
  { label: "Mandrel Sleeves", to: "/services/mandrel-sleeves" },
  { label: "Other Services", to: "/services/other-services" }]
},
{
  label: "Industries",
  to: "/industries",
  children: [
  { label: "Industries", to: "/industries" },
  { label: "Steel", to: "/industries/steel" },
  { label: "Aluminum", to: "/industries/aluminum" },
  { label: "Papermaking & Converting", to: "/industries/paper" },
  { label: "Other Industrial", to: "/industries/other-industrial" }]
},
{
  label: "About Vail",
  to: "/about-us",
  children: [
  { label: "About Vail", to: "/about-us" },
  { label: "Safety Mission/Vision", to: "/about-us/safety-mission-vision" },
  { label: "Privacy Policy", to: "/about-us/privacy-policy" },
  { label: "Organizations", to: "/about-us/organizations" },
  { label: "Employment", to: "/about-us/employment" }]
},
{ label: "FAQs", to: "/faqs" },
{ label: "Gallery", to: "/gallery" },
{ label: "Contact Us", to: "/contact-us" }];


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="shrink-0">
          <img
            src={imgSrc(vailLogo)}
            alt="Vail Rubber Works"
            className={`w-auto transition-all duration-300 ease-in-out ${scrolled ? "h-[100px] my-[-10px]" : "h-[150px]"}`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
          <div
            key={item.label}
            className="group relative"
            onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            onMouseLeave={() => { setOpenDropdown(null); setOpenSubDropdown(null); }}>
            
              <Link
              href={item.to}
              className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary text-lg min-[1080px]:max-[1399px]:text-base">
              
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {item.children && openDropdown === item.label &&
            <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-md border bg-background py-1 shadow-lg">
                  {item.children.map((child) =>
              <div
                key={child.to}
                className="relative"
                onMouseEnter={() => child.children && setOpenSubDropdown(child.label)}
                onMouseLeave={() => setOpenSubDropdown(null)}
              >
                <Link
                  href={child.to}
                  className="flex items-center justify-between px-4 py-2 text-base text-foreground transition-colors hover:bg-secondary hover:text-primary">
                  {child.label}
                  {child.children && <ChevronRight className="h-3 w-3" />}
                </Link>
                {child.children && openSubDropdown === child.label &&
                  <div className="absolute left-full top-0 z-50 min-w-[200px] rounded-md border bg-background py-1 shadow-lg">
                    {child.children.map((sub) =>
                      <Link
                        key={sub.to}
                        href={sub.to}
                        className="block px-4 py-2 text-base text-foreground transition-colors hover:bg-secondary hover:text-primary">
                        {sub.label}
                      </Link>
                    )}
                  </div>
                }
              </div>
              )}
                </div>
            }
            </div>
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:269-983-1595" className="flex items-center gap-2 text-lg min-[1080px]:max-[1399px]:text-base text-secondary-foreground font-semibold">
            <Phone className="h-4 w-4" /> 269-983-1595
          </a>
          <Link
            href="/contact-us"
            className="rounded-md bg-primary px-5 py-2.5 text-base min-[1080px]:max-[1399px]:text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
            
            Get a Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen &&
      <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto space-y-1 px-4 py-4">
            {navItems.map((item) =>
          <div key={item.label}>
                {item.children ? (
                  <Collapsible>
                    <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary [&[data-state=open]>svg]:rotate-90">
                      <span>{item.label}</span>
                      <ChevronRight className="h-4 w-4 transition-transform duration-200" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) =>
                          child.children ? (
                            <Collapsible key={child.to}>
                              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary [&[data-state=open]>svg]:rotate-90">
                                <Link href={child.to} onClick={() => setMobileOpen(false)}>{child.label}</Link>
                                <ChevronRight className="h-3 w-3 transition-transform duration-200" />
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="ml-4 space-y-1">
                                  {child.children.map((sub) =>
                                    <Link
                                      key={sub.to}
                                      href={sub.to}
                                      onClick={() => setMobileOpen(false)}
                                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
                                    >
                                      {sub.label}
                                    </Link>
                                  )}
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          ) : (
                            <Link
                              key={child.to}
                              href={child.to}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link
                    href={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
          )}
            <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-md bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Free Consultation
            </Link>
          </nav>
        </div>
      }
    </header>);

};

export default Header;