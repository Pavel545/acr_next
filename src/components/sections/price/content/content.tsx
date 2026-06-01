"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./style.module.scss";
import data from "./price-list.json";
import Serch from "@/assets/icons/serch.svg";

export default function PriceContant() {
    const [activeItem, setActiveItem] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);
    const rightSectionRef = useRef<HTMLDivElement>(null);
    const leftListRef = useRef<HTMLOListElement>(null);

    // Filter data based on search term
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredData(data);
            return;
        }

        const filtered = data
            .map(category => ({
                ...category,
                item: category.item.filter(priceItem =>
                    priceItem.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            }))
            .filter(category => category.item.length > 0);

        setFilteredData(filtered);
        setActiveItem(0);

        // Скролл в начало при поиске
        if (rightSectionRef.current) {
            rightSectionRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (leftListRef.current) {
            leftListRef.current.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }, [searchTerm]);

    // Smooth scroll to service section
    const scrollToService = (index: number) => {
        setActiveItem(index);

        const element = document.getElementById(`service-${index}`);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Highlight matching text
    const highlightText = (text: string, highlight: string) => {
        if (!highlight.trim()) return text;

        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === highlight.toLowerCase() ?
                <mark key={i} className={s.highlight}>{part}</mark> : part
        );
    };

    // Clear search
    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className={s.priceContant}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.left}>
                        <label htmlFor="service-search" className={s.label}>
                            <input
                                type="text"
                                id="service-search"
                                placeholder="Поиск услуг..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className={s.searchIcon}>
                                <Serch />
                            </span>
                            {searchTerm && (
                                <button
                                    className={s.clearSearch}
                                    onClick={clearSearch}
                                    aria-label="Clear search"
                                >
                                    ×
                                </button>
                            )}
                        </label>

                        {searchTerm && (
                            <div className={s.searchResults}>
                                <div className={s.searchInfo}>
                                    Найдено: {filteredData.reduce((acc, cat) => acc + cat.item.length, 0)} услуг
                                </div>
                            </div>
                        )}

                        <ol className={s.leftList} ref={leftListRef}>
                            {filteredData.map((item, index) => (
                                <motion.li
                                    key={item.servis}
                                    className={`${s.leftItem} ${activeItem === data.findIndex(d => d.servis === item.servis) ? s.active : ""}`}
                                    onClick={() => scrollToService(data.findIndex(d => d.servis === item.servis))}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: index * 0.03 }}
                                >
                                    {highlightText(item.servis, searchTerm)}
                                    {searchTerm && item.item.length > 0 && (
                                        <span className={s.matchCount}>
                                            {item.item.length}
                                        </span>
                                    )}
                                </motion.li>
                            ))}

                            {filteredData.length === 0 && (
                                <motion.div
                                    className={s.noResults}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    Ничего не найдено
                                </motion.div>
                            )}
                        </ol>
                    </div>

                    <div className={s.right} ref={rightSectionRef}>
                        {filteredData.map((item, index) => {
                            const originalIndex = data.findIndex(d => d.servis === item.servis);
                            return (
                                <div
                                    key={item.servis}
                                    id={`service-${originalIndex}`}
                                    className={`${s.rightItem} ${activeItem === originalIndex ? s.active : ""}`}
                                >
                                    <h3 className={s.servis}>
                                        {highlightText(item.servis, searchTerm)}
                                    </h3>

                                    <ul className={s.priceList}>
                                        {item.item.map((priceItem, priceIndex) => (
                                            <motion.li
                                                key={priceIndex}
                                                className={s.priceItem}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.2, delay: priceIndex * 0.02 }}
                                            >
                                                <span className={s.name}>
                                                    {highlightText(priceItem.name, searchTerm)}
                                                </span>
                                                <span className={s.price}>
                                                    {priceItem.price}
                                                </span>
                                                <span className={s.arrow}>
                                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" fill="white" />
                                                    </svg>
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}

                        {filteredData.length === 0 && (
                            <motion.div
                                className={s.noResultsRight}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                            >
                                <p>По вашему запросу "{searchTerm}" ничего не найдено</p>
                                <button onClick={clearSearch} className={s.resetButton}>
                                    Очистить поиск
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}