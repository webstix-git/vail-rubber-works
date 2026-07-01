export const COOKIE_CONSENT_STORAGE_KEY = "vail-cookie-consent";

export type CookieConsentChoice = "accepted" | "declined";

export function getStoredConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function setStoredConsent(choice: CookieConsentChoice): void {
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
}

export function clearAnalyticsCookies(): void {
  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => name.startsWith("_ga") || name === "_gid" || name === "_gat");

  for (const name of cookieNames) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
