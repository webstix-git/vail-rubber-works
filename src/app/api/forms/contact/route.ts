import { handleVerifiedFormSubmission } from "@/lib/form-handler";

const CONTACT_FORM_URL =
  process.env.CONTACT_FORM_SUBMIT_URL ??
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/476f9ee9-8fde-48e9-bdb1-9a5ccba3d5fa";

export async function POST(request: Request) {
  return handleVerifiedFormSubmission(request, CONTACT_FORM_URL);
}
