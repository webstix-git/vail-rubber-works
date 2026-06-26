"use client";

import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => (
  <Layout>
    <PageHero title="Privacy Policy" subtitle="How Vail Rubber Works collects, uses, and protects your information." />

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8 text-muted-foreground">
          <div>
            <h2 className="text-xl font-bold text-foreground">Information We Collect</h2>
            <p className="mt-3">We collect information that you voluntarily provide to us when you fill out contact forms, employment applications, or other forms on our website. This may include your name, email address, phone number, company name, mailing address, and any other information you choose to provide.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to respond to your inquiries, process your requests, provide customer service, send relevant communications about our products and services, and improve our website and business operations. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Data Security</h2>
            <p className="mt-3">We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Cookies</h2>
            <p className="mt-3">Our website may use cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser that enable the site to recognize your browser and capture certain information.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Third-Party Links</h2>
            <p className="mt-3">Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Changes to This Policy</h2>
            <p className="mt-3">We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Contact Us</h2>
            <p className="mt-3">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:sales@vailrubber.com" className="font-medium text-primary hover:underline">sales@vailrubber.com</a> or call us at <a href="tel:269-983-1595" className="font-medium text-primary hover:underline">269-983-1595</a>.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;