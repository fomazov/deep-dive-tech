"use client";

import { useEffect } from "react";

// Components
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/Toast";

// Helpers
import { useSelector } from "@/lib/hooks";
import { useToast } from "@/lib/hooks/useToast";

// Types
import { ErrorType } from "@/types";

export function Toaster() {
  const { error: creaturesError } = useSelector(({ creatures }) => creatures);
  const { error: plantsError } = useSelector(({ plants }) => plants);
  const { toast, toasts } = useToast();

  const ERRORS: { [key: string]: ErrorType } = Object.freeze({
    AbortError: {
      title: "Info",
      description: "The request has been aborted due to a user action",
      style: "destructive",
    },
    ConditionError: {
      title: "Info",
      description: "The request has been cached for faster response times.",
      style: "default",
    },
  });

  const handleErrors = (error: string | undefined) => {
    if (error) {
      const { style, title, description } = ERRORS[error as keyof typeof ERRORS];
      toast({ variant: style, title, description });
    }
  };

  useEffect(() => {
    handleErrors(creaturesError);
  }, [creaturesError]);

  useEffect(() => {
    handleErrors(plantsError);
  }, [plantsError]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
