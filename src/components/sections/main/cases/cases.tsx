'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Variants } from 'framer-motion'
import Image from 'next/image'
import s from './cases.module.css'

const cases = [
    {
        id: 1,
        name: "ЧАТ-БОТ + САЙТ ВНУТРИ MAX",
        title: 'Пациенты всегда могут записаться на прием - даже при ограничении мобильного интернета',
        tags: ['Привлечение', 'Сервис', 'Лояльность', 'Конверсия', 'Аналитика'],
        goal:
            'Обеспечить пациентам бесперебойную онлайн-запись 24/7 даже при слабом интернете, разгрузить администраторов и увеличить конверсию в реальную запись на 20–40% за счёт автоматизации и ИИ',
        results: [
            'Онлайн-запись 24/7 без звонков',
            'Автоматический сбор заявок даже вне рабочего времени ',
            'Полное закрытие «дыр» в расписании',
            'Снижение нагрузки на администраторов',
            'Цифровая медкарта и автоматические напоминания',
            'Геймификация и персональные награды от ИИ (особенно для детей)',
            'ИИ-персонализация и предиктивная аналитика',
            'Высокая скорость и полная независимость от качества интернета'
        ],
        price: 'Стоимость интеграции «под ключ»:<b> 200 000 ₽</b>',
        image: '/img/case/3.jpg',
        presentation: '/docs/КП Стоматология.pdf'
    }
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
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const caseItem = cases[index];
    const [showAllResults, setShowAllResults] = useState(false)
    const [goalOpen, setGoalOpen] = useState(false)
    const [resultsOpen, setResultsOpen] = useState(false)
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, []);

    useEffect(() => {
        setShowAllResults(false)
        setGoalOpen(false)
        setResultsOpen(false)
    }, [index])

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % cases.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + cases.length) % cases.length)
    }

    const visibleResults = showAllResults
        ? caseItem.results
        : caseItem.results.slice(0, 3)

    const hasHiddenResults = caseItem.results.length > 3

    const accordionBlock: Variants = {
        closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.3 }
        },
        open: {
            height: 'auto',
            opacity: 1,
            transition: { duration: 0.4 }
        }
    }
    const accordionVariants: Variants = {
        collapsed: {
            height: 0,
            opacity: 0,
            marginTop: 0,
            transition: { duration: 0.3 }
        },
        open: {
            height: 'auto',
            opacity: 1,
            marginTop: 8,
            transition: { duration: 0.4 }
        }
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
                                {caseItem.name}
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
                                <motion.div className={s.textBlock} variants={fadeUp}>
                                    <button
                                        className={`${s.accordionHeader} ${goalOpen ? s.open : ''}`}
                                        onClick={() => isMobile && setGoalOpen(prev => !prev)}
                                    >
                                        <span className={s.label}>Цель:</span>
                                        {isMobile && (
                                            <span className={s.accordionIcon}>
                                                {goalOpen ? '−' : '+'}
                                            </span>
                                        )}
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {(!isMobile || goalOpen) && (
                                            <motion.div
                                                variants={accordionBlock}
                                                initial={isMobile ? "closed" : false}
                                                animate="open"
                                                exit="closed"
                                            >
                                                <p className={s.text}>{caseItem.goal}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* RESULTS */}
                                <motion.div className={s.textBlock} variants={fadeUp}>
                                    <button
                                        className={`${s.accordionHeader} ${resultsOpen ? s.open : ''}`}
                                        onClick={() => isMobile && setResultsOpen(prev => !prev)}
                                    >
                                        <span className={s.label}>Результат:</span>
                                        {isMobile && (
                                            <span className={s.accordionIcon}>
                                                {resultsOpen ? '−' : '+'}
                                            </span>
                                        )}
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {(!isMobile || resultsOpen) && (
                                            <motion.div
                                                variants={accordionBlock}
                                                initial={isMobile ? "closed" : false}
                                                animate="open"
                                                exit="closed"
                                            >
                                                <motion.ul className={s.list} variants={containerStagger}>
                                                    {visibleResults.map((item) => (
                                                        <motion.li key={item} variants={fadeUp}>
                                                            {item}
                                                        </motion.li>
                                                    ))}
                                                </motion.ul>

                                                <AnimatePresence initial={false}>
                                                    {showAllResults && hasHiddenResults && (
                                                        <motion.ul
                                                            className={s.list}
                                                            variants={accordionVariants}
                                                            initial="collapsed"
                                                            animate="open"
                                                            exit="collapsed"
                                                        >
                                                            {caseItem.results.slice(3).map((item) => (
                                                                <motion.li key={item} variants={fadeUp}>
                                                                    {item}
                                                                </motion.li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>

                                                {hasHiddenResults && (
                                                    <button
                                                        className={s.moreBtn}
                                                        onClick={() => setShowAllResults(prev => !prev)}
                                                    >
                                                        {showAllResults ? 'Скрыть' : 'Показать ещё'}
                                                    </button>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={caseItem.id + '-menu'}
                                className={s.menu}
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                <p
                                    className={s.price}
                                    dangerouslySetInnerHTML={{ __html: caseItem.price }}
                                />

                                <div className={s.buttBOX}>
                                    <button data-popup
                                        data-popup-title="Хочу так же" data-popup-service={caseItem.name} className="butt">
                                        Хочу так же
                                    </button>
                                    <a target='_blank' href={caseItem.presentation} className={`butt ${s.butt}`}>
                                        Скачать презентацию
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

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
                        <div className={s.navigationBox}>
                            <div className={s.pagination}>
                                <span className={s.active}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span>—</span>
                                <span className={s.total}>
                                    {String(cases.length).padStart(2, '0')}
                                </span>
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
            </div>
        </section>
    )
}