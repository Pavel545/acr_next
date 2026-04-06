"use client";
import { useState } from "react";
import s from "./servicesMobile.module.scss";
import { motion } from 'framer-motion'

export default function ServicesMobile() {
    const [activeIndex, setActiveIndex] = useState(1);

    const gridLayouts = {
        1: {
            template: `
            "b b"
            "c d"
            "e f"
            "g q"
            `
        }, 2: {
            template: `
            "c b"
            "c d"   
            "e f"
            "g q"
            `
        },
        3: {
            template: `
            "c b"
            "d d"   
            "e f"
            "g q"
            `
        },
        4: {
            template: `
            "c b"
            "d f"   
            "e e"
            "g q"
            `
        },
        5: {
            template: `
            "c b"
            "d f"   
            "e f"
            "g q"
            `
        },
        6: {
            template: `
            "c b"
            "d f"   
            "g e"
            "g q"
            `
        },
        7:{
            template: `
            "c b"
            "d f"   
            "g e"
            "q q"
            `
        },
    }


    return (
        <section className={s.ServicesMobile} id="ServicesMobile">
            <div className="container ">
                <h2 className="h2">
                    <span className="siniy">создаем надежные решения </span><br />для ваших идей
                </h2>

                <p className={s.ps}>
                    Используйте передовые технологии <br />и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее
                </p>


                <motion.div
                    className={s.ServicesMobileGrid}
                    animate={{
                        gridTemplateAreas: gridLayouts[activeIndex as keyof typeof gridLayouts].template
                    }}
                >
                    <motion.div
                        className={`${s.item} ${s.item_1} ${activeIndex == 1 ? s.active : ''}`}
                        onClick={() => setActiveIndex(1)}
                        layout
                        initial={false}
                        animate={{
                            scale: activeIndex == 1 ? 1 : 0.98,
                            opacity: 1,
                            width: activeIndex == 1 ? "auto" : "100%",    // если нужно
                            height: activeIndex == 1 ? "auto" : "100%"    // если нужно
                        }}
                        transition={{
                            layout: { duration: 1.0, type: "tween" },
                            width: { duration: 0.8, delay: 0.1 },   // отдельно для ширины
                            height: { duration: 0.8, delay: 0.1 },  // отдельно для высоты
                            scale: { duration: 0.4, delay: 0.2 }
                        }}
                    >
                        Умный чат-бот
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_2} ${activeIndex == 2 ? s.active : ''}`} onClick={() => setActiveIndex(2)}
                        layout
                        initial={false}
                        animate={{
                            scale: activeIndex == 1 ? 1 : 0.98,
                            opacity: 1
                        }}
                        transition={{
                            layout: { duration: 0.6, type: "spring", stiffness: 150, damping: 25 },
                            scale: { duration: 0.4, delay: 0.2 }  // Задержка для scale эффекта
                        }}
                    >
                        Разработка мобильных приложений
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_3} ${activeIndex == 3 ? s.active : ''}`} onClick={() => setActiveIndex(3)}>
                        Разработка сайта
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_4} ${activeIndex == 4 ? s.active : ''}`} onClick={() => setActiveIndex(4)}>
                        Дизайн
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_5} ${activeIndex == 5 ? s.active : ''}`} onClick={() => setActiveIndex(5)}>
                        МАРКЕТИНГ
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_6} ${activeIndex == 6 ? s.active : ''}`} onClick={() => setActiveIndex(6)}>
                        Политика сайта
                    </motion.div>
                    <motion.div className={`${s.item} ${s.item_7}  ${activeIndex == 7 ? s.active : ''}`} onClick={() => setActiveIndex(7)}>
                        Аудит сайта
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
