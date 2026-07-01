"use client";

import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import {
  clearAnalyticsCookies,
  getStoredConsent,
  setStoredConsent,
  type CookieConsentChoice,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  consent: CookieConsentChoice | null;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

function CookieBanner({
  onAccept,
  onDecline,
}: {
  onAccept: () => void;
  onDecline: () => void;
}) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/90 sm:p-6"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2 pr-2">
          <h2 id="cookie-consent-title" className="font-sans text-base font-semibold text-foreground">
            Cookie preferences
          </h2>
          <p id="cookie-consent-description" className="text-sm leading-relaxed text-muted-foreground">
            We use cookies to understand how visitors use our website through Google Analytics. You can
            accept analytics cookies or decline them. See our{" "}
            <Link href="/about-us/privacy-policy" className="font-medium text-primary underline-offset-4 hover:underline">
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outline" onClick={onDecline}>
            Decline
          </Button>
          <Button onClick={onAccept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsentChoice | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setConsent(stored);
    setShowBanner(stored === null);
    setIsReady(true);
  }, []);

  const accept = useCallback(() => {
    setStoredConsent("accepted");
    setConsent("accepted");
    setShowBanner(false);
  }, []);

  const decline = useCallback(() => {
    const hadAcceptedAnalytics = consent === "accepted";
    clearAnalyticsCookies();
    setStoredConsent("declined");
    setConsent("declined");
    setShowBanner(false);

    if (hadAcceptedAnalytics) {
      window.location.reload();
    }
  }, [consent]);

  const openPreferences = useCallback(() => {
    setShowBanner(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      consent,
      openPreferences,
    }),
    [consent, openPreferences],
  );

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
      {isReady && consent === "accepted" ? <GoogleAnalytics /> : null}
      {isReady && showBanner ? <CookieBanner onAccept={accept} onDecline={decline} /> : null}
    </CookieConsentContext.Provider>
  );
}
