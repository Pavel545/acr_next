"use client";

import s from './ServicesPackages.module.scss';
import Icon from "@/assets/icons/services/top.svg";
import { motion } from "framer-motion";


export default function SinglePriceService({ service }: { service?: any }) {

    if (!service) {
        return null; // Или можно отобразить заглушку, если данных нет
    }


    return (
        <section className={s.servicesPackages}>
            <div className="container">
                <h2 className={`h2`} dangerouslySetInnerHTML={{ __html: service?.title }}></h2>

                <div className={s.package}>
                    <div className={s.packageHeader}>
                        <h3 className={s.packageTitle}>{service.title}</h3>
                        <Icon className={s.icon} />
                    </div>
                    <div className={s.packageBody}>
                        <div className={s.packageContent} >
                            <ul className={s.features}>
                                {service.features.map((feature, index) => (
                                    <li key={index} className={`t18 ${s.feature}`}>{feature}</li>
                                ))}
                            </ul>
                            <div className={s.packageInfo}>
                                <p className={`t18 ${s.timeline}`}>{service.timeline}</p>
                                <p className={s.price}> {service.price}</p>
                            </div>
                        </div>
                        <motion.div className={s.packageFooter} animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                            <button className={`butt ${s.buts}`}>Заказать услугу</button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    )
}