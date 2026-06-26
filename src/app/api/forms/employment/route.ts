import { handleVerifiedFormSubmission } from "@/lib/form-handler";

const EMPLOYMENT_FORM_URL =
  process.env.EMPLOYMENT_FORM_SUBMIT_URL ??
  "https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/05c9c923-d880-4c89-919b-d72733598814";

export async function POST(request: Request) {
  return handleVerifiedFormSubmission(request, EMPLOYMENT_FORM_URL);
}
