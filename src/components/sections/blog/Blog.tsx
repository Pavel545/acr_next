"use client";

import Link from 'next/link';
import s from './Blog.module.css';
import BlogCard from '@/components/ui/BlogCard/BlogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import post from "@/data/blog.json";
import { mapPostToCard, Post } from '@/types/blog';

export default function Blog() {
    const typedPosts = post as Post[];
    const blogPosts = typedPosts
        .slice(0, 3)
        .map(mapPostToCard);
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