'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import s from "./title.module.scss";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={s.wrapper}>
      <motion.svg
        className={s.lineWave}
        viewBox="0 0 600 30"
        preserveAspectRatio="none"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.path
          d="M0 20 Q150 0 300 20 T600 20"
          stroke="var(--zelenyy-5)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ pathLength: { duration: 1.2, delay: 0.3 } }}
        />
      </motion.svg>
      <motion.svg
        className={s.lineWave2}
        viewBox="0 0 600 30"
        preserveAspectRatio="none"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 0.5 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.path
          d="M0 20 Q150 0 300 20 T600 20"
          stroke="var(--zelenyy-5)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 0.8 } : {}}
          transition={{ pathLength: { duration: 2.2, delay: 0.3 } }}
        />
      </motion.svg>

      <motion.h2
        className={s.h2}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {children}
      </motion.h2>
    </div>
  );
};