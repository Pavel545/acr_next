'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import s from './header.module.scss';
import { NAVIGATION_LINKS, SOCIAL_LINKS } from '@/config/constants';
import Logo from "../../../assets/icons/logo.svg";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            // Определяем направление скролла
            if (currentScrollY > lastScrollY) {
                // Скролл вниз - прячем
                setIsVisible(false);
            } else {
                // Скролл вверх - показываем
                setIsVisible(true);
            }
            
            // Обновляем последнюю позицию скролла
            setLastScrollY(currentScrollY);
        };

        // Добавляем слушатель скролла
        window.addEventListener('scroll', controlHeader);

        // Очищаем слушатель при размонтировании
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    return (
        <header onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} className={`${s.header} ${isVisible ? s.header_visible : s.header_hidden}`}>
            <div className='container'>
                <div className={`${s.header_container} ${s.header_scroll}`}>
                    <a href="/" className={s.logo}>
                        <Logo className={s.logoImg} />
                    </a>

                      <nav className={s.navigation}>
                        {NAVIGATION_LINKS.map((link) => {
                            const IconComponent = link.icons;
                            return (
                                <a 
                                    key={link.name} 
                                    href={link.href} 
                                    className={`${s.nav_link} ${isHovered ? s.nav_link_visible : s.nav_link_hidden}`}
                                >
                                    <IconComponent className={s.nav_icon} />
                                    <span className={s.nav_link_text}>{link.name}</span>
                                </a>
                            );
                        })}
                    </nav>

                    <nav className={s.social_links}>
                        {SOCIAL_LINKS.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={s.social_link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image 
                                    className={s.social_link_image} 
                                    src={`/${link.icon}`} 
                                    alt={link.name} 
                                    width={45} 
                                    height={45} 
                                />
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};