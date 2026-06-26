import { NextResponse } from "next/server";
import {
  forwardFormSubmission,
  getRequestIp,
  verifyTurnstileToken,
} from "@/lib/turnstile";

export async function handleVerifiedFormSubmission(
  request: Request,
  targetUrl: string,
): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const token = formData.get("cf-turnstile-response");

    if (typeof token !== "string" || !token.trim()) {
      return NextResponse.json(
        { error: "Please complete the captcha verification." },
        { status: 400 },
      );
    }

    const verification = await verifyTurnstileToken(token, getRequestIp(request));

    if (verification.ok === false) {
      return NextResponse.json({ error: verification.error }, { status: verification.status });
    }

    // Never forward the captcha token downstream.
    formData.delete("cf-turnstile-response");

    const upstream = await forwardFormSubmission(targetUrl, formData);

    if (!upstream.ok) {
      console.error("[forms] upstream submission failed:", upstream.status, targetUrl);
      return NextResponse.json(
        { error: "Unable to submit the form right now. Please try again." },
        { status: 502 },
      );
    }

    const data = await upstream.json().catch(() => ({}));
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("[forms] submission handler error:", error);
    return NextResponse.json(
      { error: "Unable to submit the form right now. Please try again." },
      { status: 500 },
    );
  }
}
