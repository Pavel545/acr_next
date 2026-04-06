'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import s from './header.module.scss';
import { SOCIAL_LINKS } from '@/config/constants';
import Logo from "../../../assets/icons/logo.svg";
import Menu from '../menu/menu';
import MenuIcon from "../../../assets/icons/menu.svg";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setmenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
        <header
            className={`${s.header} ${isVisible ? s.header_visible : s.header_hidden}`}>
            <div className='container'>
                <div className={`${s.header_container} ${s.header_scroll}`}>
                    <div className={s.header_left}>
                        <a href='/'
                            className={s.logo}>
                            <Logo className={s.logoImg} />
                        </a>

                        <Menu/>
                    </div>

                    <div className={s.header_right}>
                        <nav  className={`${s.social_links} ${s.social_link_menu} ${menuOpen ?? s.open}`}>
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
                        <span onClick={()=>setmenuOpen(!menuOpen)} className={s.social_link}>
                            <MenuIcon className={s.social_link_image} />
                        </span>
                        <button className='butt'>
                            Обсудить проект
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};