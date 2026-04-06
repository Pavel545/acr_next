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
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                        <nav className={`${s.social_links} ${s.social_link_menu} ${menuOpen ? s.open : ''}`}>
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={s.social_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ '--i': index } as React.CSSProperties}
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
                        <span onClick={toggleMenu} className={`${s.menu_icon} ${menuOpen ? s.open : ''}`}>
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