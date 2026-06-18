"use client";

import { Faq } from '@/types/services';
import s from './ServicesFaq.module.scss';
import { useState } from 'react';
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";

export default function ServicesFaq({ faq }: { faq: Faq }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (

        <section className={s.servicesFaq}>
                <div className="container">
                    <h2 className={`h2`} >
                       Вопрос — ответ 
                    </h2>

                    <div className={s.faq}>
                        {faq?.items.map((item, index) => (
                            <div key={index} className={s.faqItem} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
                                <h3 className={`${s.question}`}>{item.question}</h3>
                                    <motion.p
                                        className={s.answer}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={activeIndex === index ? { opacity: 1, x: 0, height: 'auto' } : { opacity: 0, x: 20, height: 0 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.answer}
                                    </motion.p>
                                <button 
                                    className={` ${s.buts} ${activeIndex === index ? s.active : ''}`}
                                    
                                ></button>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    )
}