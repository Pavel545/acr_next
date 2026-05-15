"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./servicesMobile.module.scss";

import Decor1 from '@/assets/images/services3D/7.svg';
import Decor4 from '@/assets/images/services3D/1.svg';
import Decor5 from '@/assets/images/services3D/2.svg';
import Decor2 from '@/assets/images/services3D/3.svg';
import Decor6 from '@/assets/images/services3D/4.svg';
import Decor7 from '@/assets/images/services3D/5.svg';
import Decor3 from '@/assets/images/services3D/6.svg';

const services = [
    { id: 1, href:'/services/smart-chatbots', title: "Умный чат-бот", Icon: Decor5, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 2, href:'', title: "Мобильные приложения", Icon: Decor4, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 3, href:'/services/website-development', title: "Разработка сайта", Icon: Decor3, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 4, href:'', title: "Дизайн", Icon: Decor6, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 5, href:'', title: "Маркетинг", Icon: Decor7, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 6, href:'', title: "Политика сайта", Icon: Decor2, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
    { id: 7, href:'', title: "Аудит сайта", Icon: Decor4, description: "Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android" },
];

const layouts = {
    1: [
        { id: 1, col: 1, row: 1, w: 2, h: 1 },
        { id: 2, col: 1, row: 2, w: 1, h: 1 },
        { id: 3, col: 2, row: 2, w: 1, h: 1 },
        { id: 4, col: 1, row: 3, w: 1, h: 1 },
        { id: 5, col: 2, row: 3, w: 1, h: 1 },
        { id: 6, col: 1, row: 4, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    2: [
        { id: 2, col: 1, row: 1, w: 1, h: 2 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 3, col: 2, row: 2, w: 1, h: 1 },
        { id: 4, col: 1, row: 3, w: 1, h: 1 },
        { id: 5, col: 2, row: 3, w: 1, h: 1 },
        { id: 6, col: 1, row: 4, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    3: [
        { id: 3, col: 1, row: 2, w: 2, h: 1 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 2, col: 1, row: 1, w: 1, h: 1 },
        { id: 4, col: 1, row: 3, w: 1, h: 1 },
        { id: 5, col: 2, row: 3, w: 1, h: 1 },
        { id: 6, col: 1, row: 4, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    4: [
        { id: 4, col: 1, row: 3, w: 2, h: 1 },
        { id: 5, col: 2, row: 2, w: 1, h: 1 },
        { id: 3, col: 1, row: 2, w: 1, h: 1 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 2, col: 1, row: 1, w: 1, h: 1 },
        { id: 6, col: 1, row: 4, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    5: [
        { id: 5, col: 2, row: 2, w: 1, h: 2 },
        { id: 3, col: 1, row: 2, w: 1, h: 1 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 2, col: 1, row: 1, w: 1, h: 1 },
        { id: 4, col: 1, row: 3, w: 1, h: 1 },
        { id: 6, col: 1, row: 4, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    6: [
        { id: 6, col: 1, row: 3, w: 1, h: 2 },
        { id: 4, col: 2, row: 3, w: 1, h: 1 },
        { id: 5, col: 2, row: 2, w: 1, h: 1 },
        { id: 3, col: 1, row: 2, w: 1, h: 1 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 2, col: 1, row: 1, w: 1, h: 1 },
        { id: 7, col: 2, row: 4, w: 1, h: 1 },
    ],
    7: [
        { id: 7, col: 1, row: 4, w: 2, h: 1 },
        { id: 6, col: 1, row: 3, w: 1, h: 1 },
        { id: 4, col: 2, row: 3, w: 1, h: 1 },
        { id: 5, col: 2, row: 2, w: 1, h: 1 },
        { id: 3, col: 1, row: 2, w: 1, h: 1 },
        { id: 1, col: 2, row: 1, w: 1, h: 1 },
        { id: 2, col: 1, row: 1, w: 1, h: 1 },

    ]
};

export default function ServicesMobile() {
    const [active, setActive] = useState(1);

    return (
        <section id="ServicesMobile" className={s.ServicesMobile}>
            <div className="container">
                <h2 className="h2">
                    <span className="siniy">
                        создаем надежные решения</span> <br />для ваших идей
                </h2>

                <p className={s.text}>
                    Используйте передовые технологии <br />и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее
                </p>
                <div className={s.wrapper}>
                    <div className={s.grid}>
                        {layouts[active as keyof typeof layouts]?.map((item) => {
                            const isActive = item.id === active;
                            const service = services.find(s => s.id === item.id)!;

                            return (
                                <motion.div
                                    key={item.id}
                                    layout
                                    onClick={() => setActive(item.id)}
                                    className={`${s.card} ${isActive ? s.active : ""}`}
                                    style={{
                                        gridColumn: `${item.col} / span ${item.w}`,
                                        gridRow: `${item.row} / span ${item.h}`,
                                        zIndex: isActive ? 2 : 1
                                    }}
                                    transition={{
                                        layout: {
                                            duration: isActive ? 0.6 : 0.35, // 👈 быстрее схлопывание
                                            ease: "easeInOut",
                                        },
                                    }}
                                >
                                    <div className={s.inner}>
                                        <h3 className={s.title}>{service.title}</h3>

                                        <AnimatePresence mode="wait">
                                            {isActive && (
                                                <motion.div
                                                    className={s.content}
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{
                                                        duration: 0.25 // 👈 быстрее исчезает
                                                    }}
                                                >
                                                    <p className={s.description}>{service.description}</p>
                                                    <button className={s.button}><svg width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke="var(--temnyy)" d="M0.16741 0.134543C0.377127 -0.0569375 0.702445 -0.0422923 0.893973 0.167355L3.16708 2.65675C3.42087 2.93479 3.41596 3.36212 3.15603 3.63443L0.886272 6.01233C0.690152 6.21766 0.364458 6.22513 0.15904 6.02907C-0.0463209 5.83296 -0.0537611 5.50727 0.142299 5.30184L2.21083 3.13488L0.134598 0.861105C-0.056874 0.651398 -0.0422101 ₀.326₀74 ₀.₁₆₇₄₁ ₀.₁₃₄₅₄₃Z" fill="#₂₈₂₆₃₁" />
                                                    </svg></button>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    {/* SVG декор */}
                                    <motion.div
                                        className={s.icon}
                                        animate={{
                                            scale: isActive ? 1 : 0.8,
                                            opacity: isActive ? 1 : 0.6,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <service.Icon />
                                    </motion.div>


                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}