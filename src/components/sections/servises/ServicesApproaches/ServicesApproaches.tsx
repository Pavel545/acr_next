"use client";

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import s from './ServicesApproaches.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/lib/isMobile';
import Image from 'next/image';

export default function ServicesApproaches() {
    const [duplicatedTechnologies, setDuplicatedTechnologies] = useState<any[]>([]);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
    const controls = useAnimation();
    const isMobile = useMediaQuery("(max-width: 768px)");

    const technologies = [
        { icons: '/icons/technologies/css.jpg', title: 'css' },
        { icons: '/icons/technologies/TypeScript.jpg', title: 'TypeScript' },
        { icons: '/icons/technologies/vue.jpg', title: 'vue' },
        { icons: '/icons/technologies/php.jpg', title: 'php' },
        { icons: '/icons/technologies/Bootstrap.jpg', title: 'Bootstrap' },
        { icons: '/icons/technologies/Html.jpg', title: 'Html' },
        { icons: '/icons/technologies/laravel.jpg', title: 'laravel' },
        { icons: '/icons/technologies/React.jpg', title: 'React' },
        { icons: '/icons/technologies/Redux Toolkit.jpg', title: 'Redux Toolkit' }
    ];

    useEffect(() => {
        setDuplicatedTechnologies([...technologies, ...technologies, ...technologies]);
    }, []);

    // Запускаем бесконечную анимацию только когда элемент в поле видимости
    useEffect(() => {
        if (isInView) {
            controls.start({
                x: [0, -1900],
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

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
    };

    if (isMobile) {
        return null; // Возвращаем null вместо пустой строки
    }

    return (
        <section className={s.servicesApproaches} ref={sectionRef}>
            <div className="container">
                <div className={s.header}>
                    <h2 className={`h2`}>Применяем <br /> лучшие подходы <span className={'siniy'}>для разработки современных и качественных решений</span></h2>
                    <a href="#" target="_blank" download={"presentation.pdf"} className={`butt ${s.buts}`}>Скачать презентацию</a>
                </div>
            </div>

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
                            // Анимируем появление только ПЕРВЫЙ раз
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: i * 0.05, duration: 0.6 }}
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
                            <p className={s.itemTitle}>{e.title}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}