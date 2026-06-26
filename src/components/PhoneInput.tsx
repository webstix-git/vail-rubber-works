"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string | undefined) => void;
  required?: boolean;
  name?: string;
  className?: string;
}

const formatPhone = (digits: string): string => {
  const d = digits.slice(0, 10);
  if (d.length <= 3) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

const stripNonDigits = (s: string): string => s.replace(/\D/g, "");

const PhoneInput = ({ value = "", onChange, required, name, className }: PhoneInputProps) => {
  const display = formatPhone(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = stripNonDigits(e.target.value).slice(0, 10);
    onChange?.(digits || undefined);
  };

  return (
    <>
      <Input
        type="tel"
        value={display}
        onChange={handleChange}
        placeholder="(555) 555-5555"
        required={required}
        className={cn(className)}
      />
      {name && <input type="hidden" name={name} value={value} />}
    </>
  );
};

export default PhoneInput;
