"use client";

import CooperationCard from '@/components/ui/CooperationCard/CooperationCard';
import s from './cooperation.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Pagination } from 'swiper/modules';

export default function Cooperation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const cooperation = [
        {
            title: "Обсуждение проекта",
            count: "01",
            text: [
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее.",
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее."
            ],
            icons: "/img/cooperation/1.svg",
        },
        {
            title: "Построение ТЗ и брифа",
            count: "02",
            text: [
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее.",
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее."
            ],
            icons: "/img/cooperation/2.svg",
        },
        {
            title: "подготовка предложения",
            count: "03",
            text: [
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее.",
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее."
            ],
            icons: "/img/cooperation/3.svg",
        },
        {
            title: "Подписание договора",
            count: "04",
            text: [
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее.",
                "Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее."
            ],
            icons: "/img/cooperation/4.svg",
        }
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section className={s.cooperation} ref={ref}>
            <div className={s.decore}>
                <svg width="1920" height="752" viewBox="0 0 1920 752" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 411.927C0 411.927 326.615 805.12 527 742C762.341 667.869 755.25 2.29776 998.28 2.50005C1207.32 2.67404 1233.68 393.497 1441.75 368.89C1587.5 351.654 1613.5 137.815 1759.6 125.793C1908.41 113.548 2106 322.365 2106 322.365" stroke="#DCFF5C" strokeWidth="5" strokeLinecap="round" />
                </svg>
            </div>

            <motion.div
                className={`container ${s.cooperationContent}`}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={containerVariants}
            >
                <h2 className={`h2 ${s.cooperation__title}`}>
                    Как строится наше <br />
                    <span className='siniy'>сотрудничество с вами</span>
                </h2>

                {/* Desktop grid */}
                <motion.div className={s.cooperation__containerDesktop} variants={containerVariants}>
                    {cooperation.map((item, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <CooperationCard {...item} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile Swiper */}
                <motion.div className={s.cooperation__containerMobile} variants={containerVariants}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        
                    >
                        {cooperation.map((item, index) => (
                            <SwiperSlide key={index}>
                                <motion.div variants={itemVariants}>
                                    <CooperationCard {...item} />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                <button className={`butt ${s.cooperationBut}`}>Обсудить проект</button>
            </motion.div>
        </section>
    );
}