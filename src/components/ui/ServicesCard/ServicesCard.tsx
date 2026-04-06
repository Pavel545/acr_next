"use client";
import Link from "next/link";
import s from "./ServicesCard.module.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

interface ServicesCardProps {
    icon: React.ReactNode;
    text?: string;
    href?: string;
    onClick?: () => void;
    isGloballyExpanded?: boolean;
    isToggleButton?: boolean;
    isMobile?: boolean; // 👈 добавили
}

export default function ServicesCard({
    icon,
    text,
    href,
    onClick,
    isGloballyExpanded = true,
    isToggleButton = false,
    isMobile = false // 👈 добавили
}: ServicesCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [localExpanded, setLocalExpanded] = useState(isGloballyExpanded);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isFirstRender = useRef(true);
    const isInteractive = !isMobile;
    // Синхронизация с глобальным состоянием с задержкой для анимации
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            setLocalExpanded(isGloballyExpanded);
            return;
        }

        // Очищаем предыдущий таймаут
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        if (isGloballyExpanded) {
            // При раскрытии сразу меняем состояние для появления текста
            setLocalExpanded(true);
        } else {
            // При скрытии ждем завершения анимации текста
            if (isMobile) {
                timeoutRef.current = setTimeout(() => {
                    setLocalExpanded(false);
                }, 250);
            }

        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [isGloballyExpanded]);

    // Определяем, показывать ли текст
    const shouldShowText = () => {
        if (isToggleButton) return false;
        if (isMobile) return true;
        if (isHovered) return true;
        return localExpanded;
    };

    const showText = shouldShowText();

    // Анимации для контейнера карточки
    const cardVariants: Variants = {
        expanded: {
            gap: "20px",
            paddingRight: "13px",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        collapsed: {
            gap: "0px",
            paddingRight: "13px",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        hovered: {
            background: "#ffffff40",
            gap: "20px",
            paddingRight: "13px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    // Анимации для текста
    const textVariants: Variants = {
        initial: {
            opacity: 0,
            x: -20,
            maxWidth: 0,
            paddingRight: 0,
            marginRight: 0
        },
        animate: {
            opacity: 1,
            x: 0,
            maxWidth: 300,
            paddingRight: "clamp(14px, 1.5vw, 54px)",
            marginRight: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                opacity: { duration: 0.2 }
            }
        },
        exit: {
            opacity: 0,
            x: -20,
            maxWidth: 0,
            paddingRight: 0,
            marginRight: 0,
            transition: {
                duration: 0.25,
                ease: "easeIn",
                opacity: { duration: 0.15 }
            }
        }
    };

    // Анимация для вращения иконки у кнопки-переключателя
    const iconVariants: Variants = {
        expanded: {
            rotate: 180,
            transition: { duration: 0.3, ease: "easeInOut" }
        },
        collapsed: {
            rotate: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const content = (
        <motion.div
            className={`${s.card} ${isHovered ? s.hovered : ''}`}
            onMouseEnter={() => isInteractive && setIsHovered(true)}
            onMouseLeave={() => isInteractive && setIsHovered(false)}
            variants={cardVariants}
            initial="collapsed"
            animate={
                isMobile
                    ? "expanded"
                    : isHovered
                        ? "hovered"
                        : showText
                            ? "expanded"
                            : "collapsed"
            }
            whileHover="hovered"
        >
            <motion.div
                className={s.iconBox}
                variants={isToggleButton ? iconVariants : undefined}
                animate={isToggleButton ? (isGloballyExpanded ? "expanded" : "collapsed") : undefined}
            >
                {icon}
            </motion.div>

            <AnimatePresence mode="wait">
                {showText && (
                    <motion.p
                        className={s.text}
                        variants={isMobile ? undefined : textVariants}
                        initial={isMobile ? false : "initial"}
                        animate={isMobile ? false : "animate"}
                        exit={isMobile ? undefined : "exit"}
                    >
                        {text}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );

    // Если это кнопка-переключатель
    if (isToggleButton) {
        return (
            <motion.div
                className={`${s.cardWrapper} ${!isGloballyExpanded ? s.collapsed : ''}`}
                onClick={onClick}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
            >
                {content}
            </motion.div>
        );
    }

    // Если есть ссылка
    if (href) {
        return (
            <Link href={href} className={s.cardLink}>
                {content}
            </Link>
        );
    }

    // Обычная карточка (без ссылки)
    return (
        <div className={s.cardWrapper}>
            {content}
        </div>
    );
}