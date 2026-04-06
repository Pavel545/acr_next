"use client";

import { useMediaQuery } from "@/lib/isMobile";
import Services from "./services";
import ServicesMobile from "./ServicesMobile";

export default function ServicesG() {
      const isMobile = useMediaQuery("(max-width: 768px)")
    

      return !isMobile ? <Services/> : <ServicesMobile/>
}