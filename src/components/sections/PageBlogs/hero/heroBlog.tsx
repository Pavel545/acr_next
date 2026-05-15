"use client";

import BreadCrumbs from "@/components/ui/Breadcrumbs/Breadcrumbs";
import s from "./heroBlog.module.scss";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { PostCard } from "@/types/blog";
import Image from "next/image";

export default function HeroBlog(props: PostCard) {
    const router = useRouter();

    return (
        <section className={s.hero}>
            <div className="container">
                <div className={s.heroNav}>
                    <BreadCrumbs items={[{ title: "Блог", href: "/blog" }, {title: props.title}]} />

                    <motion.button
                        onClick={() => router.back()}
                        className={s.infoBack}
                        type="button"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ x: 10, scale:1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className={s.infoBackButt} aria-hidden="true">
                            <motion.svg
                                width="8"
                                height="14"
                                viewBox="0 0 8 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                animate={{ x: [0, -3, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatDelay: 3,
                                }}
                            >
                                <path
                                    d="M6.65551 14L0.278481 7.66754C-0.0928259 7.29883 -0.0928268 6.70117 0.278481 6.33246L6.65551 0L8 1.33509L2.29521 7L8 12.6649L6.65551 14Z"
                                    fill="currentColor"
                                />
                            </motion.svg>
                        </span>

                        <span className={s.infoBackText}>
                            Вернуться назад
                        </span>
                    </motion.button>
                </div>

                <div className={s.info}>
                    <span className={s.type}>
                        {props.type}
                    </span>

                    <div className={s.time}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.584 5.74992V11.5833L8.66732 13.3333M22.084 11.5833C22.084 17.3823 17.383 22.0833 11.584 22.0833C5.785 22.0833 1.08398 17.3823 1.08398 11.5833C1.08398 5.78427 5.785 1.08325 11.584 1.08325C17.383 1.08325 22.084 5.78427 22.084 11.5833Z" stroke="#282631" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>
                            {props.time}
                        </span>
                    </div>
                </div>

                <div className={s.heroHeader}>
                    <h1 className={`${s.heroTitle} h2`}>

                        {props.title}
                    </h1>
                </div>
                <div className={s.imgBox}>
                        <Image className={s.img} src={props.img} alt={props.title} fill />
                </div>
            </div>
        </section>
    );
}