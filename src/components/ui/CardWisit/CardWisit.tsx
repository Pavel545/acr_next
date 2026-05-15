import Image from "next/image";
import { useState, useEffect } from "react";
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

    useEffect(() => {
        setIsCompact(isFloating);
    }, [isFloating]);

    const handleClick = () => {
        if (isCompact) {
            // Действие при клике на компактную версию
            console.log("Quick access clicked");
        }
    };

    return (
        <div className={`${s.card} ${isCompact ? s.compact : ''} ${isFloating ? s.floating : ''}`} onClick={handleClick}>
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
                    <button data-popup
                        data-popup-title="Обсудить проект" className={`${s.button} butt`}>
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