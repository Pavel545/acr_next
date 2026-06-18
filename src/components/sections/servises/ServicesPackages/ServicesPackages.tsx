"use client";

import { Package, Packages } from "@/types/services";
import s from './ServicesPackages.module.scss';
import Icon from "@/assets/icons/services/top.svg";
import { motion } from "framer-motion";
import { useState } from "react";



export default function ServicesPackages({ packages }: { packages?: Packages }) {

    if (!packages) {
        return null; // Или можно отобразить заглушку, если данных нет
    }


    return (
        <section className={s.servicesPackages}>
            <div className="container">
                <h2 className={`h2`} dangerouslySetInnerHTML={{ __html: packages?.title }}></h2>


                <div className={s.packages}>
                    {packages?.items.map((item) => (
                        <PackageCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    )
}

function PackageCard({ item }: { item: Package }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div key={item.id} className={s.package} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className={s.packageHeader}>
                <h3 className={s.packageTitle}>{item.title}</h3>
                <Icon className={s.icon} />
            </div>
            <div className={s.packageBody}>
                <div className={s.packageContent} >
                    <ul className={s.features}>
                        {item.features.map((feature, index) => (
                            <li key={index} className={`t18 ${s.feature}`}>{feature}</li>
                        ))}
                    </ul>
                    <div className={s.packageInfo}>
                        <p className={`t18 ${s.timeline}`}>{item.timeline}</p>
                        <p className={s.price}> {item.price}</p>
                    </div>
                </div>
                <motion.div className={s.packageFooter} animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    <button className={`butt ${s.buts}`}>Заказать услугу</button>
                </motion.div>
            </div>
        </motion.div>
    )
}