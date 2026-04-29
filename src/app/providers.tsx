"use client";

import { PopupProvider } from "@/components/ui/PopupForm/PopupContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <PopupProvider>{children}</PopupProvider>;
};