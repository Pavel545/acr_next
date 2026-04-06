'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Variants } from 'framer-motion'
import Image from 'next/image'
import s from './cases.module.css'

const cases = [
    {
        id: 1,
        title: 'Цифровая экосистема девелопера 360° для строительной компании',
        tags: ['Продажи', 'Сопровождение', 'Комьюнити', 'Дожим'],
        goal:
            'Автоматизировать первичный контакт с клиентами, снизить нагрузку на колл-центр и ускорить цикл сделки',
        results: [
            'Конверсия лидов в сделку: +42%',
            'Время отклика: с 40 мин до 5 сек',
            'Нагрузка на колл-центр: −35%',
            'Экономия ФОТ: 150–200 тыс ₽',
        ],
        image: '/img/case/1.jpg',
    },
    {
        id: 2,
        title: 'CRM + автоматизация маркетинга для B2B-девелопера',
        tags: ['CRM', 'Маркетинг', 'Автоматизация'],
        goal:
            'Собрать разрозненные каналы лидогенерации в единую систему и сократить потери заявок',
        results: [
            'Рост квалифицированных лидов: +37%',
            'Снижение CPL: −18%',
            'Автоматизация 80% ручных операций',
        ],
        image: '/img/case/2.jpg',
    },
]

/* ---------- ANIMATION VARIANTS ---------- */

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
}

const containerStagger: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
}

const imageVariant: Variants = {
    hidden: { opacity: 0, scale: 1.08 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
        opacity: 0,
        scale: 0.96,
        transition: { duration: 0.4 },
    },
}

export default function Cases() {
    const [index, setIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const caseItem = cases[index]

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % cases.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + cases.length) % cases.length)
    }

    return (
        <section className={s.cases}>
            <div className={s.background}>
                <motion.svg
                    className={s.decorLine}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.path
                        d="M50 100 Q52 92 56 90 T60 80 T68 78 T72 74 T80 68 T86 62 T92 56 T100 50"
                        stroke="var(--zelenyy-2-osnovnoy)"
                        strokeWidth="0.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        strokeDasharray="200"
                        initial={{ strokeDashoffset: 200 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                            duration: 2.2,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.svg>
            </div>
            <div className="container">
                <div className={s.cases__content}>
                    {/* LEFT SIDE */}
                    <div className={s.left}>
                        <div>
                            <h2 className={s.caseNumber}>
                                КЕЙС №{String(index + 1).padStart(2, '0')}
                            </h2>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={caseItem.id}
                                    variants={containerStagger}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                >
                                    {/* TAGS */}
                                    <div className={s.tags}>
                                        {caseItem.tags.map((tag) => (
                                            <motion.span key={tag} variants={fadeUp}>
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={caseItem.id}
                                variants={containerStagger}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                {/* GOAL */}
                                <motion.div
                                    className={s.textBlock}
                                    variants={fadeUp}
                                >
                                    <p className={s.label}>Цель:</p>
                                    <p className={s.text}>{caseItem.goal}</p>
                                </motion.div>

                                {/* RESULTS */}
                                <motion.div
                                    className={s.textBlock}
                                    variants={fadeUp}
                                >
                                    <p className={s.label}>Результат:</p>
                                    <motion.ul
                                        className={s.list}
                                        variants={containerStagger}
                                    >
                                        {caseItem.results.map((item) => (
                                            <motion.li
                                                key={item}
                                                variants={fadeUp}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        <div className={s.pagination}>
                            <span className={s.active}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <span>—</span>
                            <span className={s.total}>
                                {String(cases.length).padStart(2, '0')}
                            </span>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={s.right}>
                        <AnimatePresence mode="wait">
                            <motion.h3
                                key={caseItem.id + '-title'}
                                className={s.title}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                {caseItem.title}
                            </motion.h3>
                        </AnimatePresence>

                        <div className={s.imageWrapper}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={caseItem.image}
                                    className={s.imageMotion}
                                    variants={imageVariant}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <Image
                                        src={caseItem.image}
                                        alt={caseItem.title}
                                        fill
                                        className={s.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                                        priority={index === 0}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className={s.navigation}>
                            <button 
                                onClick={prevSlide} 
                                className={s.arrowBtn}
                                aria-label="Previous case"
                            >
                                ←
                            </button>
                            <button 
                                onClick={nextSlide} 
                                className={s.nextBtn}
                                aria-label="Next case"
                            >
                                {isMobile ? 'Следующий →' : 'Следующий кейс →'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}