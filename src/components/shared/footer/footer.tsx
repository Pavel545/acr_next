import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/config/constants";
import s from "./footer.module.css";
import Image from "next/image";
import FosFot from "@/components/ui/fosFot/fosFot";



export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.leftContent}>
                        <p className="h2">
                            время Цифрового <br />
                            ускорения
                        </p>

                        <nav className={s.footLinks}>
                            {NAVIGATION_LINKS.map((e,i)=>(
                                <a key={i} className={s.footLink} href={e.href}>{e.name}</a>
                            ))}
                        </nav>

                        <nav className={s.social_links}>
                            {SOCIAL_LINKS.map((link) => (
                                <a key={link.name + "_foot"} href={link.href} className={s.social_link} target="_blank" rel="noopener noreferrer">
                                    <Image className={s.social_link_image} src={`/${link.icon}`} alt={link.name} width={45} height={45} />
                                </a>
                            ))}
                        </nav>
                    </div>
                    
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
        </footer>
    )
}