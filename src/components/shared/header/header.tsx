'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import s from './header.module.scss';
import { SOCIAL_LINKS } from '@/config/constants';
import Logo from "../../../assets/icons/logo.svg";
import MenuIcon from "../../../assets/icons/menu.svg";
import Menu from '../menu/menu';
import { useMediaQuery } from '@/lib/isMobile';
import BurgerMenu from '@/components/ui/BurgerMenu/BurgerMenu';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)")

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
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className={`${s.header} ${isVisible ? s.visible : s.hidden}`}>
            <div className="container">
                <div className={s.inner}>

                    {/* LEFT */}
                    <div onMouseEnter={() => { setIsHovered(true); setMenuOpen(false); }}
                        onMouseLeave={() => setIsHovered(false)} className={s.left}>
                        <a href="/" className={`${s.logo} ${isHovered ? s.hovered : ''}`}>
                            <Logo className={s.logoImg} />
                        </a>
                        {!isMobile && <Menu className={s.mobNo} isHovered={isHovered} />}
                    </div>

                    {/* RIGHT */}
                   {!isMobile && <div className={s.right}>

                        {/* desktop socials */}
                        <nav className={`${s.socials} ${menuOpen ? s.open : ''}`}>
                            {SOCIAL_LINKS.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ '--i': index } as React.CSSProperties}
                                    className={s.social}
                                >
                                    <Image
                                        src={`/${link.icon}`}
                                        alt={link.name}
                                        width={40}
                                        height={40}
                                    />
                                </a>
                            ))}
                        </nav>

                        {/* burger */}
                        <button
                            onClick={toggleMenu}
                            className={`${s.burger} ${menuOpen ? s.open : ''}`}
                        >
                            <MenuIcon />
                        </button>

                        <button className={"butt"}>
                            Обсудить проект
                        </button>
                    </div>}

                    { isMobile && <BurgerMenu /> }
                </div>
            </div>

            
        </header>
    );
};