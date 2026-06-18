import HeroCildPage from "@/components/ui/HeroCildPage/HeroCildPage";
import InDevelopment from "../../components/InDevelopment/in-development";
import s from "./contacts.module.scss";
import { SOCIAL_LINKS } from "@/config/constants";
import Image from "next/image";



export default function Contacts() {



    return <main>
        <HeroCildPage theme="whiteFone" breadCrumbs={[{ title: 'Контакты' }]} title="Контакты" />

        <div className="container">
            <div className={s.content}>
                <div className={s.linkBox}>
                    <div className={s.item}>
                        <h3 className={s.title}>
                            Адрес:
                        </h3>

                        <a className={s.link} href="https://yandex.ru/maps/-/CPXvAWJW" target="_blank" rel="noopener noreferrer">432017 <br /> г. Ульяновск,  <br /> ул. ленина, д. 130</a>
                    </div>
                    <div className={s.item}>
                        <h3 className={s.title}>
                            Почта:
                        </h3>

                        <a className={s.link} href="mailto:acr-agency@yandex.ru">acr-agency@yandex.ru</a>
                    </div>
                    <div className={s.item}>
                        <h3 className={s.title}>
                            Адрес
                        </h3>

                        <a className={s.link} href="tel:+79272705330">+7 927 270-53-30    </a>

                    </div>
                    <div className={s.item}>
                        <h3 className={s.title}>
                            Мы в мессенджерах:
                        </h3>

                        <div className={s.soc}>
                            {SOCIAL_LINKS.map((link) => {

                                const IconComponent = link.iconSvg;
                                return (
                                    <a key={link.name + "_foot"} href={link.href} className={s.social_link} target="_blank" rel="noopener noreferrer">
                                        <IconComponent className={s.social_link_image} />
                                    </a>
                                )

                            })}
                        </div>
                    </div>
                </div>

                <div className={s.mapBox}>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A148b4d8d414a5d6710d30e4ed0cd3105f6c07ae2a085ef7f991f8776be183475&amp;source=constructor"
                        title="Карта расположения компании"
                        loading="lazy"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    </main>
}