"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SignatureCanvas from "react-signature-canvas";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import vrwServiceCenter from "@/assets/vrw-mobile-service-center.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import PhoneInput from "@/components/PhoneInput";
import TurnstileField, { type TurnstileFieldHandle } from "@/components/TurnstileField";

type FieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  full?: boolean;
};

const Field = ({ label, required, children, full }: FieldProps) => (
  <div className={full ? "sm:col-span-2" : ""}>
    <label className="mx-0 my-[10px] mb-1.5 block text-base font-medium text-foreground">
      {label}
      {required && <span className="text-destructive"> *</span>}
    </label>
    {children}
  </div>
);

type YesNoProps = {
  name: string;
  required?: boolean;
};

const YesNo = ({ name, required }: YesNoProps) => (
  <RadioGroup name={name} required={required} className="flex gap-4 pt-1">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="yes" id={`${name}-yes`} />
      <Label htmlFor={`${name}-yes`}>Yes</Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="no" id={`${name}-no`} />
      <Label htmlFor={`${name}-no`}>No</Label>
    </div>
  </RadioGroup>
);

const Employment = () => {
  const router = useRouter();
  const turnstileRef = useRef<TurnstileFieldHandle>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | undefined>();
  const [employer1Phone, setEmployer1Phone] = useState<string | undefined>();
  const [employer2Phone, setEmployer2Phone] = useState<string | undefined>();
  const [employer3Phone, setEmployer3Phone] = useState<string | undefined>();
  const sigRef = useRef<SignatureCanvas>(null);

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
    
    // Convert signature to image file
    if (sigRef.current && !sigRef.current.isEmpty()) {
      const dataUrl = sigRef.current.toDataURL("image/png");
      const byteString = atob(dataUrl.split(",")[1]);
      const mimeString = dataUrl.split(",")[0].split(":")[1].split(";")[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type: mimeString });
      formData.append("signature", blob, "signature.png");
    }

    try {
      const response = await fetch("/api/forms/employment", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        setFormError(data?.error ?? "Unable to submit the application. Please try again.");
        turnstileRef.current?.reset();
        setSubmitting(false);
        return;
      }

      if (data?.redirect) {
        window.location.href = data.redirect;
        return;
      }
    } catch {
      setFormError("Unable to submit the application. Please try again.");
      turnstileRef.current?.reset();
      setSubmitting(false);
      return;
    }
    
    router.push("/employment-thankyou");
  };

  return (
    <Layout>
      <PageHero title="Employment" subtitle="Join our team of skilled professionals at Vail Rubber Works." bgImage={vrwServiceCenter} />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Pre-application notice */}
            <div className="mb-8 rounded-lg border bg-card p-6">
              <h2 className="mb-3 font-sans font-semibold text-foreground text-xl my-[10px]">Before you apply at Vail Rubber Works, Inc. please be aware of the following:</h2>
              <ol className="list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
                <li className="text-lg py-[10px]">Vail Rubber Works, Inc. is committed to being a drug and alcohol free workplace, and periodically tests employees for the presence of drugs and alcohol. If you use illegal drugs or abuse prescribed drugs and alcohol, you should not apply here.</li>
                <li className="text-lg py-[10px]">If you graduated from high school within the last 5 years, you will be required to provide a copy of your high school and college (if applicable) transcripts indicating your grades, attendance record, etc. for our review prior to hiring.</li>
                <li className="text-lg py-[10px]">Applicants are considered for all positions without regard to race, color, religion, sex, national origin, age, marital status, or the presence of a non-job-related medical condition or handicap.</li>
              </ol>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Personal Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Date" required><Input name="date" type="date" required /></Field>
                  <Field label="Name" required><Input name="name" required placeholder="Full Name" /></Field>
                  <Field label="Address" required><Input name="address" required /></Field>
                  <Field label="City" required><Input name="city" required /></Field>
                  <Field label="State" required><Input name="state" required /></Field>
                  <Field label="Zip" required><Input name="zip" required /></Field>
                  <Field label="Phone" required><PhoneInput name="phone" value={phone} onChange={setPhone} required /></Field>
                  <Field label="Email Address" required><Input name="email" type="email" required placeholder="email@example.com" /></Field>
                  <Field label="Are you 18 years or older?" required>
                    <YesNo name="age18" required />
                  </Field>
                </div>
              </div>

              {/* Position Details */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Position Details</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Position Applied For" required><Input name="positionAppliedFor" required /></Field>
                  <Field label="Salary Required ($ per hour)"><Input name="salaryRequired" /></Field>
                </div>
              </div>

              {/* Production / Maintenance Questions */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">If you are applying for a production or maintenance position:</h2>
                <div className="grid gap-4 sm:grid-cols-1">
                  <Field label="1. Certain jobs require that employees provide their own tools, at a cost of approximately $200 to $500. Are you willing and able to provide tools as required?">
                    <YesNo name="tools" />
                  </Field>
                  <Field label="2. Some jobs require that employees successfully complete certain educational requirements at Lake Michigan College, etc. including courses such as Machine Tool I, Machine Tool II, and Blueprint Reading. Have you taken any of these courses? (If yes, please list dates, courses taken, and the schools attended.)">
                    <YesNo name="courses" />
                  </Field>
                  <div className="ml-4 space-y-3">
                    <Field label="Course #1"><Input name="course1" placeholder="Date, Course, School" /></Field>
                    <Field label="Course #2"><Input name="course2" placeholder="Date, Course, School" /></Field>
                    <Field label="Course #3"><Input name="course3" placeholder="Date, Course, School" /></Field>
                  </div>
                  <Field label="3. Are you willing and able to take other courses as required?">
                    <YesNo name="willTakeCourses" />
                  </Field>
                </div>
              </div>

              {/* Additional Questions */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Additional Information</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Are you employed now?">
                    <YesNo name="employedNow" />
                  </Field>
                  <Field label="May we contact your present employer?">
                    <YesNo name="contactEmployer" />
                  </Field>
                  <Field label="Are you on a layoff and subject to recall?">
                    <YesNo name="layoff" />
                  </Field>
                  <Field label="When would you be available for work?">
                    <Input name="availableDate" type="date" />
                  </Field>
                  <Field label="Have you ever been convicted of a crime?">
                    <YesNo name="convictedCrime" />
                  </Field>
                  <Field label="Are there felony charges pending against you?">
                    <YesNo name="felonyPending" />
                  </Field>
                  <Field label="If yes, would you like to explain:" full>
                    <Input name="crimeExplanation" />
                  </Field>
                  <Field label="Have you smoked or chewed tobacco within the last 12 months?">
                    <YesNo name="tobacco" />
                  </Field>
                  <Field label="Has your spouse smoked or chewed tobacco within the last 12 months?">
                    <YesNo name="spouseTobacco" />
                  </Field>
                  <Field label="Have you applied here before?">
                    <YesNo name="appliedBefore" />
                  </Field>
                  <Field label="Have you worked here before?">
                    <YesNo name="workedBefore" />
                  </Field>
                  <Field label="Are any of your relatives or acquaintances currently employed by VAIL RUBBER WORKS?">
                    <YesNo name="relativesEmployed" />
                  </Field>
                  <Field label="If yes, list names and relationships:" full>
                    <Input name="relativesNames" />
                  </Field>
                  <Field label="Who suggested that you apply for a position with VAIL RUBBER WORKS?" full>
                    <Input name="referredBy" />
                  </Field>
                </div>
              </div>

              {/* Shift Preference */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Shift Preferred</h2>
                <RadioGroup name="shiftPreferred" className="flex flex-wrap gap-4">
                  {[
                  { value: "1st", label: "First (days)" },
                  { value: "2nd", label: "Second (afternoon)" },
                  { value: "3rd", label: "Third (nights)" },
                  { value: "none", label: "No Preference" }].
                  map((s) =>
                  <div key={s.value} className="flex items-center gap-2">
                      <RadioGroupItem value={s.value} id={`shift-${s.value}`} />
                      <Label htmlFor={`shift-${s.value}`}>{s.label}</Label>
                    </div>
                  )}
                </RadioGroup>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Field label="Are you unwilling to work any of the above three shifts?">
                    <YesNo name="unwillingShift" />
                  </Field>
                  <Field label="If 'Yes', which shifts are you unwilling to work?">
                    <Input name="unwillingShifts" />
                  </Field>
                </div>
              </div>

              {/* Education */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Education</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="High School Name"><Input name="highSchoolName" /></Field>
                  <Field label="Year Graduated or Year Received GED"><Input name="yearGraduated" /></Field>
                  <Field label="College Name"><Input name="collegeName" /></Field>
                  <Field label="Other (Describe)" full><Input name="educationOther" /></Field>
                </div>
              </div>

              {/* Employment Experience (3 sections) */}
              {[1, 2, 3].map((n) =>
              <div key={n} className="rounded-lg border bg-card p-6">
                  <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">
                    Employment Experience #{n} {n === 1 && <span className="text-sm font-normal text-muted-foreground">(List most recent or current job first)</span>}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Employer"><Input name={`employer${n}`} /></Field>
                    <Field label="Phone"><PhoneInput name={`employer${n}Phone`} value={n === 1 ? employer1Phone : n === 2 ? employer2Phone : employer3Phone} onChange={n === 1 ? setEmployer1Phone : n === 2 ? setEmployer2Phone : setEmployer3Phone} /></Field>
                    <Field label="Address" full><Input name={`employer${n}Address`} /></Field>
                    <Field label="From"><Input name={`employer${n}From`} type="date" /></Field>
                    <Field label="To"><Input name={`employer${n}To`} type="date" /></Field>
                    <Field label="Job Title"><Input name={`employer${n}JobTitle`} /></Field>
                    <Field label="Supervisor's Name"><Input name={`employer${n}Supervisor`} /></Field>
                    <Field label="Reason for Leaving" full><Input name={`employer${n}ReasonLeaving`} /></Field>
                  </div>
                </div>
              )}

              {/* Certification & Signature */}
              <div className="rounded-lg border bg-card p-6">
                <h2 className="mb-4 font-sans text-xl font-semibold text-foreground">Applicant's Certification and Agreement</h2>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  I certify that all the information contained in this Application is true and complete. I understand that any falsification, misrepresentation, or omission may result in immediate dismissal from or refusal of employment. I authorize the Company to investigate all statements contained in this Application, including records of any former employer, police departments, and other services concerning me, and I authorize these sources to release such information to Vail Rubber Works, Inc., without liability for damage incurred in giving it. I waive any written notice of the release of such records.
                </p>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  Also, I acknowledge that any job offer is conditional on my passing a physical examination, drug test, and background check and I hereby consent to such an examination.
                </p>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Signature <span className="text-destructive">*</span>
                  </label>
                  <div className="rounded-md border border-input bg-white">
                    <SignatureCanvas
                      ref={sigRef}
                      penColor="black"
                      canvasProps={{
                        className: "w-full h-[150px] cursor-crosshair"
                      }} />
                    
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => sigRef.current?.clear()}>
                    
                    Clear Signature
                  </Button>
                </div>
              </div>

              <TurnstileField ref={turnstileRef} />
              {formError && <p className="text-sm text-destructive">{formError}</p>}
              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>);

};

export default Employment;