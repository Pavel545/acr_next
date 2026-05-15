"use client"

import { SOCIAL_LINKS } from "@/config/constants";
import s from "./footer.module.css";
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
                        <p className="h2">
                            Давайте обсудим ваш проект
                        </p>
                        <p className={s.leftContentText}>
                            Выберите нужную услугу, кратко опишите вашу задачу и заполните свои контактные данные.
                        </p>


                        <nav className={s.social_links}>
                            {SOCIAL_LINKS.map((link) => (
                                <a key={link.name + "_foot"} href={link.href} className={s.social_link} target="_blank" rel="noopener noreferrer">
                                    <Image className={s.social_link_image} src={`/${link.icon}`} alt={link.name} width={45} height={45} />
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className={s.footFos}>
                        <div>
                            <h3 className="h3">Услуги</h3>
                            <nav className={s.footLinks}>
                                {SERVICES_DATA.map((e, i) => (
                                    <a key={i} className={s.footLink} href={e.href}>{e.name}</a>
                                ))}
                            </nav>
                        </div>
                        
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
            {isMobile && <MobMenu/> }
        </footer>
    )
}