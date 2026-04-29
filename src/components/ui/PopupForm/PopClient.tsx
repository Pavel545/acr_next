"use client";

export const openPopup = (data?: { title?: string; service?: string }) => {
  document.dispatchEvent(
    new CustomEvent("open-popup", { detail: data })
  );
};