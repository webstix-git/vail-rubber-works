const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileSiteVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
  action?: string;
  challenge_ts?: string;
};

export type TurnstileVerificationResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

function getAllowedHostnames(): string[] {
  const hosts = new Set<string>(["localhost", "127.0.0.1", "www.vailrubber.com", "vailrubber.com"]);

  if (process.env.VERCEL_URL) {
    hosts.add(process.env.VERCEL_URL);
  }

  if (process.env.TURNSTILE_ALLOWED_HOSTNAMES) {
    for (const host of process.env.TURNSTILE_ALLOWED_HOSTNAMES.split(",")) {
      const trimmed = host.trim();
      if (trimmed) hosts.add(trimmed);
    }
  }

  return [...hosts];
}

function isAllowedHostname(hostname: string): boolean {
  return getAllowedHostnames().some(
    (allowed) => hostname === allowed || hostname.endsWith(`.${allowed}`),
  );
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<TurnstileVerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    console.error("[turnstile] TURNSTILE_SECRET_KEY is not configured");
    return {
      ok: false,
      error: "Captcha verification is unavailable. Please try again later.",
      status: 503,
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  let result: TurnstileSiteVerifyResponse;

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[turnstile] siteverify HTTP error:", response.status);
      return {
        ok: false,
        error: "Captcha verification failed. Please try again.",
        status: 403,
      };
    }

    result = (await response.json()) as TurnstileSiteVerifyResponse;
  } catch (error) {
    console.error("[turnstile] siteverify request failed:", error);
    return {
      ok: false,
      error: "Captcha verification failed. Please try again.",
      status: 403,
    };
  }

  if (!result.success) {
    console.error("[turnstile] verification rejected:", result["error-codes"]?.join(", ") ?? "unknown");
    return {
      ok: false,
      error: "Captcha verification failed. Please try again.",
      status: 403,
    };
  }

  if (result.hostname && !isAllowedHostname(result.hostname)) {
    console.error("[turnstile] hostname not allowed:", result.hostname);
    return {
      ok: false,
      error: "Captcha verification failed. Please try again.",
      status: 403,
    };
  }

  return { ok: true };
}

export function getRequestIp(request: Request): string | undefined {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim() ||
    undefined
  );
}

export async function forwardFormSubmission(targetUrl: string, formData: FormData): Promise<Response> {
  return fetch(targetUrl, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });
}
