"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";

export type TurnstileFieldHandle = {
  getToken: () => string | undefined;
  reset: () => void;
};

type TurnstileFieldProps = {
  onTokenChange?: (token: string | undefined) => void;
};

const TurnstileField = forwardRef<TurnstileFieldHandle, TurnstileFieldProps>(
  ({ onTokenChange }, ref) => {
    const widgetRef = useRef<TurnstileInstance>(null);
    const tokenRef = useRef<string | undefined>();

    useImperativeHandle(ref, () => ({
      getToken: () => tokenRef.current,
      reset: () => {
        tokenRef.current = undefined;
        onTokenChange?.(undefined);
        widgetRef.current?.reset();
      },
    }));

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    if (!siteKey) {
      return (
        <p className="text-sm text-destructive">
          Captcha is not configured. Please contact the site administrator.
        </p>
      );
    }

    return (
      <Turnstile
        ref={widgetRef}
        siteKey={siteKey}
        onSuccess={(token) => {
          tokenRef.current = token;
          onTokenChange?.(token);
        }}
        onExpire={() => {
          tokenRef.current = undefined;
          onTokenChange?.(undefined);
        }}
        onError={() => {
          tokenRef.current = undefined;
          onTokenChange?.(undefined);
        }}
        options={{ theme: "light", size: "normal" }}
      />
    );
  },
);

TurnstileField.displayName = "TurnstileField";

export default TurnstileField;
