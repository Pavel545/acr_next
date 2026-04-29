"use client";

import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/config/constants";
import s from "./BurgerMenu.module.scss";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function BurgerMenu() {
    const [active, setActive] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleActive = () => {
        setActive(!active);
    };

    const closeMenu = () => {
        setActive(false);
    };

    // Закрытие при клике ВНЕ меню и кнопки
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Проверяем, что меню открыто
            if (!active) return;

            // Проверяем, что клик был НЕ по меню И НЕ по кнопке
            const isClickOnMenu = menuRef.current?.contains(event.target as Node);
            const isClickOnButton = buttonRef.current?.contains(event.target as Node);

            if (!isClickOnMenu && !isClickOnButton) {
                closeMenu();
            }
        };

        // Добавляем слушатель с задержкой, чтобы не сработал сразу при открытии
        const timer = setTimeout(() => {
            document.addEventListener('mousedown', handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [active]);

    // Блокировка скролла
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [active]);

    // Закрытие при нажатии ESC
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && active) {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, [active]);

    const button = (
        <div
            ref={buttonRef}
            className={`${s.burger_menu_button} ${active ? s.active : ''}`}
            onClick={toggleActive}
        >
            <div className={s.line}></div>
            <div className={s.line}></div>
        </div>
    );

    const menu = createPortal(
        <div
            ref={menuRef}
            className={`${s.burger_menu} ${active ? s.active : ''}`}
            onClick={toggleActive}
        >
            <div onClick={(e) => e.stopPropagation()} className={s.navigation_container}>
                <nav className={s.navigation}>
                    {NAVIGATION_LINKS.map((link) => {
                        return (
                            <a
                                href={link.href}
                                className={s.nav_link}
                                key={link.name}
                                onClick={closeMenu}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>


                <div className={s.socials}>
                    <button className="butt">
                        Обсудить проект
                    </button>
                    <nav className={s.social_links}>
                        {SOCIAL_LINKS.map((link) => {

                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={s.nav_link}
                                >
                                    <Image src={link.icon} alt={link.name} width={45} height={45} />
                                </a>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </div>,
        document.body
    );

    return (
        <>
            {button}
            {menu}
        </>
    );
}