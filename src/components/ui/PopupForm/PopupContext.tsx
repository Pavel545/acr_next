"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import PopupForm from "./PopupForm";

interface PopupContextType {
  open: (title?: string, service?: string) => void;
  close: () => void;
}

const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Бесплатный аудит");
  const [service, setService] = useState("");

  const open = useCallback((newTitle?: string, newService?: string) => {
    if (newTitle) setTitle(newTitle);
    if (newService) setService(newService);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setService("");
    setTitle("Бесплатный аудит");
  }, []);

  useEffect(() => {
  const handleClick = (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest("[data-popup]") as HTMLElement;
    if (!target) return;

    const title = target.dataset.popupTitle || "";
    const service = target.dataset.popupService || "";

    open(title, service);
  };

  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
}, [open]);

  useEffect(() => {
    const handler = (e: any) => {
        open(e.detail?.title, e.detail?.service);
    };

    document.addEventListener("open-popup", handler);
    return () => document.removeEventListener("open-popup", handler);
    }, [open]);
  return (
    <PopupContext.Provider value={{ open, close }}>
      {children}

      {isOpen && (
        <PopupForm
          defaultTitle={title}
          id="global-popup"
        />
      )}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup must be used inside PopupProvider");
  return ctx;
};