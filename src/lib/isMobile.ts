import { useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const getMatches = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const subscribe = (callback: () => void) => {
    const m = window.matchMedia(query);
    const onChange = () => callback();
    
    if (m.addEventListener) m.addEventListener("change", onChange);
    else m.addListener(onChange);
    
    return () => {
      if (m.removeEventListener) m.removeEventListener("change", onChange);
      else m.removeListener(onChange);
    };
  };

  return useSyncExternalStore(subscribe, getMatches, () => false);
}