"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import TurnstileField, { type TurnstileFieldHandle } from "@/components/TurnstileField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import PhoneInput from "@/components/PhoneInput";

type FieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

const Field = ({ label, required, children }: FieldProps) => (
  <div>
    <label className="mb-1.5 block text-base font-medium text-foreground">
      {label}
      {required && <span className="text-destructive"> *</span>}
    </label>
    {children}
  </div>
);

const ContactUs = () => {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileFieldHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [telephone, setTelephone] = useState<string | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);

    const token = turnstileRef.current?.getToken();
    if (!token) {
      setFormError("Please complete the captcha verification.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("cf-turnstile-response", token);

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        setFormError(data?.error ?? "Unable to submit the form. Please try again.");
        turnstileRef.current?.reset();
        setSubmitting(false);
        return;
      }

      if (data?.redirect) {
        window.location.href = data.redirect;
        return;
      }
    } catch {
      setFormError("Unable to submit the form. Please try again.");
      turnstileRef.current?.reset();
      setSubmitting(false);
      return;
    }

    router.push("/contact-thankyou");
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Get in touch with our team. We're ready to help with your roll challenges." />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              <p className="mt-2 text-muted-foreground">Fill out the form below and one of our team members will get back to you promptly.</p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" required><Input name="name" required /></Field>
                  <Field label="Company"><Input name="company" /></Field>
                  <Field label="Email" required><Input name="email" type="email" required /></Field>
                  <Field label="Telephone" required><PhoneInput name="telephone" value={telephone} onChange={setTelephone} required /></Field>
                  <Field label="Address"><Input name="address" /></Field>
                  <Field label="City"><Input name="city" /></Field>
                  <Field label="State"><Input name="state" /></Field>
                  <Field label="Zip"><Input name="zip" /></Field>
                </div>
                <Field label="Industry" required>
                  <Select name="industry" required>
                    <SelectTrigger><SelectValue placeholder="Select your industry" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="metal">Metal</SelectItem>
                      <SelectItem value="paper">Paper</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field label="Comments" required><Textarea name="comments" required rows={5} /></Field>
                <TurnstileField ref={turnstileRef} />
                {formError && <p className="text-sm text-destructive">{formError}</p>}
                <Button type="submit" size="lg" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">Our Locations</h2>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-sans text-lg font-semibold text-foreground">St. Joseph Service Center</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Headquarters</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2 text-base"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 202 West Glenlord Rd.<br />St. Joseph, MI 49085</li>
                    <li className="flex gap-2 text-base"><Phone className="h-4 w-4 shrink-0 text-primary" /> <a href="tel:269-983-1595" className="hover:text-primary">269-983-1595</a></li>
                    <li className="flex gap-2 text-base"><Mail className="h-4 w-4 shrink-0 text-primary" /> <a href="mailto:sales@vailrubber.com" className="hover:text-primary">sales@vailrubber.com</a></li>
                  </ul>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-sans text-lg font-semibold text-foreground">Mobile Service Center</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">Southern Region</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-2 text-base"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> 124 Salco Road East<br />Axis, AL 36505</li>
                    <li className="flex gap-2 text-base"><Phone className="h-4 w-4 shrink-0 text-primary" /> <a href="tel:251-675-5644" className="hover:text-primary">251-675-5644</a></li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg border bg-card p-6">
                <h3 className="font-sans text-lg font-semibold text-foreground">Service Area</h3>
                <p className="mt-2 text-muted-foreground text-base">
                  Vail Rubber Works serves manufacturing facilities nationwide with pick-up and delivery services available from both locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);

};

export default ContactUs;