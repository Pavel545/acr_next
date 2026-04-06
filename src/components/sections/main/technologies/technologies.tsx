"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import s from "./technologies.module.scss";
import { useMediaQuery } from '@/lib/isMobile';
export default function Technologies() {
    const [duplicatedTechnologies, setDuplicatedTechnologies] = useState<any[]>([]);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
    const controls = useAnimation();
    const isMobile = useMediaQuery("(max-width: 768px)");
   
    const technologies = [
        {
            icons: '/icons/technologies/css.jpg',
            title: 'css'
        },
        {
            icons: '/icons/technologies/TypeScript.jpg',
            title: 'TypeScript'
        },
        {
            icons: '/icons/technologies/vue.jpg',
            title: 'vue'
        },
        {
            icons: '/icons/technologies/php.jpg',
            title: 'php'
        },
        {
            icons: '/icons/technologies/Bootstrap.jpg',
            title: 'Bootstrap'
        },
        {
            icons: '/icons/technologies/Html.jpg',
            title: 'Html'
        },
        {
            icons: '/icons/technologies/laravel.jpg',
            title: 'laravel'
        },
        {
            icons: '/icons/technologies/React.jpg',
            title: 'React'
        },
        {
            icons: '/icons/technologies/Redux Toolkit.jpg',
            title: 'Redux Toolkit'
        }
    ];

    // Дублируем массив для создания эффекта бесконечности
    useEffect(() => {
        setDuplicatedTechnologies([...technologies, ...technologies, ...technologies]);
    }, []);

    // Управление анимацией прокрутки
    useEffect(() => {
        if (isInView) {
            controls.start({
                x: [0, -1900], // Значение зависит от ширины элементов
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }
                }
            });
        } else {
            controls.stop();
        }
    }, [isInView, controls]);

    // Анимация появления элементов
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
 if (isMobile) {
        return '';
    }
    return (
        <section className={s.technologies} id="technologies" ref={sectionRef}>
            <div className="container">
                <motion.h2
                    className="h2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Наши технологии
                </motion.h2>

                <div className={s.content}>
                    <motion.div
                        className={s.scrollContent}
                        animate={controls}
                    >
                        {duplicatedTechnologies.map((e, i) => (
                            <motion.div
                                key={i}
                                className={s.item}
                                variants={itemVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                custom={i}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className={s.imgBox}>
                                    <Image
                                        alt={e.title}
                                        src={e.icons}
                                        width={190}
                                        height={190}
                                        className={s.image}
                                    />
                                </div>
                                <p className={s.itemTitle}>
                                    {e.title}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}