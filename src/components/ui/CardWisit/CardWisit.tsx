// CardWisit.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useChat } from "@/contexts/ChatContext"; // импортируем хук
import s from "./CardWisit.module.css";

export default function CardWisit({
    src,
    name,
    post,
    textButton,
    isFloating = false
}: {
    src: string,
    name: string,
    post: string,
    textButton: string,
    isFloating?: boolean
}) {
    const [isCompact, setIsCompact] = useState(false);
    const { openChat } = useChat(); // получаем функцию открытия чата

    useEffect(() => {
        setIsCompact(isFloating);
    }, [isFloating]);

    const handleCardClick = () => {
        if (isCompact) {
            openChat(); // Открываем чат при клике на компактную версию
        }
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Предотвращаем всплытие, чтобы не сработал handleCardClick

        openChat(); // Открываем чат при клике на кнопку
    };

    return (
        <div className={`${s.card} ${isCompact ? s.compact : ''} ${isFloating ? s.floating : ''}`} onClick={handleCardClick}>
            <div className={s.cardImgBox}>
                <Image
                    className={s.cardImg}
                    src={src}
                    alt={name}
                    width={isCompact ? 40 : 142}
                    height={isCompact ? 40 : 142}
                />
            </div>
            {!isCompact && (
                <div className={s.cardContent}>
                    <h3 className={s.name}>{name}</h3>
                    <p className={s.post}>{post}</p>
                    <button
                        onClick={handleButtonClick}
                        className={`${s.button} butt`}
                    >
                        {textButton}
                    </button>
                </div>
            )}
            {isCompact && (
                <div className={s.tooltip}>
                    <span>{name}</span>
                </div>
            )}
        </div>
    );
}