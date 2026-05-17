"use client"

import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/config/constants";
import s from "./footer.module.scss";
import Image from "next/image";
import FosFot from "@/components/ui/fosFot/fosFot";
import { SERVICES_DATA } from "@/config/constants/services";
import MobMenu from "@/components/ui/MobMenu/MobMenu";
import { useMediaQuery } from "@/lib/isMobile";



export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.leftContent}>
                        <div className={s.leftNavBox}>
                            <h3 className={`t16 ${s.leftNavBoxTitle}`}>
                                Навигация
                            </h3>

                            <nav className={s.leftNavList}>
                                {NAVIGATION_LINKS.map((e, i) => (
                                    <a key={`NAVIGATION_LINKS-${i}`} className={`t18 ${s.leftNavLink}`} href={e.href}> <span>{e.name}</span> </a>
                                ))}

                            </nav>
                        </div>



                        {!isMobile && <div className={s.leftNavBox}>
                            <h3 className={`t16 ${s.leftNavBoxTitle}`}>Связаться:</h3>
                            <nav className={s.social_links}>
                                {SOCIAL_LINKS.map((link) => (
                                    <a key={link.name + "_foot"} href={link.href} className={s.social_link} target="_blank" rel="noopener noreferrer">
                                        <Image className={s.social_link_image} src={`/${link.icon}`} alt={link.name} width={45} height={45} />
                                    </a>
                                ))}
                            </nav>
                        </div>}

                    </div>

                    <div className={s.leftNavBox}>
                        <h3 className={`t16 ${s.leftNavBoxTitle}`}>Услуги</h3>
                        <nav className={s.leftNavList}>
                            {SERVICES_DATA.map((e, i) => (
                                <a key={i} className={`t18 ${s.leftNavLink}`} href={e.href}>{e.name}</a>
                            ))}
                        </nav>
                    </div>
                    {isMobile && <div className={s.leftNavBox}>
                        <h3 className={`t16 ${s.leftNavBoxTitle}`}>Связаться:</h3>
                        <nav className={s.social_links}>
                            {SOCIAL_LINKS.map((link) => (
                                <a key={link.name + "_foot"} href={link.href} className={s.social_link} target="_blank" rel="noopener noreferrer">
                                    <Image className={s.social_link_image} src={`/${link.icon}`} alt={link.name} width={45} height={45} />
                                </a>
                            ))}
                        </nav>
                    </div>}
                    <div className={s.footFos}>
                        <FosFot />
                    </div>
                </div>

                {/* Линия с политикой и копирайтом */}
                <div className={s.footerBottom}>
                    <div className={s.divider}></div>
                    <div className={s.bottomContent}>
                        <div className={s.copyright}>
                            © {currentYear} АЦР. Все права защищены
                        </div>
                        <div className={s.policyLinks}>
                            <a href="/privacy-policy" className={s.policyLink}>
                                Политика конфиденциальности
                            </a>
                            <a href="/terms-of-use" className={s.policyLink}>
                                Пользовательское соглашение
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* {isMobile && <MobMenu />} */}
        </footer>
    )
}