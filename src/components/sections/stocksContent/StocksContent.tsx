"use client";

import { useEffect, useState } from "react";
import s from "./StocksContent.module.scss";
import { Stocks } from "@/types/stocks";
import { getStocksCat } from "@/lib/stocks";

export default function StocksContent() {
    const [activeTab, setActiveTab] = useState<string>('site');
    const [items, setItems] = useState<Stocks[]>([]);


    useEffect(() => {
        const stocks = getStocksCat(activeTab);
        setItems(stocks || []);
    }, [activeTab])

    return (
        <section className={s.stocksContent}>
            <div className="container">
                <div className={s.tabs}>
                    <div onClick={() => setActiveTab('site')} className={`${s.tabsItem} ${activeTab == 'site' ? s.active : ''}`}>
                        Сайт
                    </div>
                    <div onClick={() => setActiveTab('spplication')} className={`${s.tabsItem} ${activeTab == 'spplication' ? s.active : ''}`}>
                        Приложение
                    </div>
                    <div onClick={() => setActiveTab('chatbot')} className={`${s.tabsItem} ${activeTab == 'chatbot' ? s.active : ''}`}>
                        Чат-бот
                    </div>
                    <div onClick={() => setActiveTab('marketing')} className={`${s.tabsItem} ${activeTab == 'marketing' ? s.active : ''}`}>
                        Маркетинг
                    </div>
                </div>


                <div className={s.content}>
                    {items.map((e, i) => (
                        <div key={e.id || i} className={s.stocksItem}>
                            <div className={s.imgBox}>
                                <img src={e.imgPrev || e.imgBig} alt={e.title} />
                            </div>
                            <div className={s.stocksItemContent}>

                                <div className={s.stocksItemText}> <h3 className={s.title}>{e.title}</h3>
                                    {e.discription && e.discription.map((desc, idx) => (
                                        <p className={s.discription} key={idx}>{desc}</p>
                                    ))}
                                </div>

                                <button className={s.but}>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" fill="#282631" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}