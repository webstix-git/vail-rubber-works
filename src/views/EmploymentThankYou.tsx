"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import { CheckCircle, Briefcase } from "lucide-react";

const EmploymentThankYou = () => (
  <Layout>
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Briefcase className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Application Received!</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Thank you for your interest in joining the Vail Rubber Works team. Your employment application has been submitted successfully.
        </p>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Questions about your application? Call us at{" "}
          <a href="tel:269-983-1595" className="font-medium text-primary hover:underline">269-983-1595</a>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/85">
            Return Home
          </Link>
          <Link href="/about-us" className="rounded-md border border-input bg-background px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary">
            Learn About Vail
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default EmploymentThankYou;
