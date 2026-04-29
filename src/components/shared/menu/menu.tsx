"use client";

import { NAVIGATION_LINKS } from "@/config/constants";
import s from "./menu.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Menu({ isHovered, className }: { isHovered: boolean; className?: string }) {

    return (
        <div className={`${s.mob_menu} ${className}`}
        >
            <nav className={s.navigation}>
                {NAVIGATION_LINKS.map((link) => {
                    const IconComponent = link.icons;

                    return (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className={s.nav_link}
                            whileHover={{ scale: 1.05 }}
                            transition={{
                                layout: { duration: 0.35, type: "spring", stiffness: 200 }
                            }}
                            layout
                        >
                            <IconComponent className={s.nav_icon} />

                            <AnimatePresence>
                                {isHovered && (
                                    <motion.span
                                        className={s.nav_link_text}
                                        initial={{ width: 0, opacity: 0 }}
                                        animate={{ width: "auto", opacity: 1 }}
                                        exit={{ width: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: "easeOut" }}
                                    >
                                        {link.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    );
                })}
            </nav>
        </div>
    )
}