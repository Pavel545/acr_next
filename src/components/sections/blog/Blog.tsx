"use client";

import Link from 'next/link';
import s from './Blog.module.css';
import BlogCard from '@/components/ui/BlogCard/BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Blog() {
    const blogPosts = [
        {
            id: 1,
            type: 'Статья',
            date : '20/03/2026',
            time: '5 мин.',
            title :"Ускорение Сайта в 2 Раза",
            textMini:"Медленный сайт — это потерянные клиенты и низкие позиции в поисковиках. Мы устраним тормоза. Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее ",
            img: "/img/blog/1.jpg",
        },
        {
            id: 2,
            type: 'Статья',
            date : '20/03/2026',
            time: '5 мин.',
            title :"Ускорение Сайта в 2 Раза",
            textMini:"Медленный сайт — это потерянные клиенты и низкие позиции в поисковиках. Мы устраним тормоза. Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее ",
            img: "/img/blog/2.jpg",
        },
        {
            id: 3,
            type: 'Статья',
            date : '20/03/2026',
            time: '5 мин.',
            title :"Ускорение Сайта в 2 Раза",
            textMini:"Медленный сайт — это потерянные клиенты и низкие позиции в поисковиках. Мы устраним тормоза. Используйте передовые технологии и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще и прибыльнее ",
            img: "/img/blog/3.jpg",
        }
    ]

    return (
        <section className={s.blog}>
            <div className='container'>
                <div className={s.blogTitle}>
                    <h2 className='h2'>
                        Наш блог
                    </h2>

                    <Link href="/blog" className='btn'>
                        Смотреть все
                    </Link>
                </div>

                {/* Десктопная сетка */}
                <div className={s.blogContentDesktop}>
                    {blogPosts.map((post, key) => (
                        <BlogCard key={key} {...post} />
                    ))}
                </div>

                {/* Мобильный слайдер */}
                <div className={s.blogSliderMobile}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {blogPosts.map((post, key) => (
                            <SwiperSlide key={key}>
                                <BlogCard {...post} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}