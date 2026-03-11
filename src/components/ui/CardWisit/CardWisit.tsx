import Image from "next/image";
import s from "./CardWisit.module.css";



export default function CardWisit({ src, name, post, textButton }: { src: string, name: string, post: string, textButton: string }) {
    return (
        <div className={s.card}>
            <div className={s.cardImgBox}>
                <Image className={s.cardImg} src={src}
                    alt={name}
                    width={142}
                    height={142}
                />
            </div>
            <div className={s.cardContent}>
                <h3 className={s.name}>{name}</h3>
                <p className={s.post}>{post}</p>
                <button className={`${s.button} butt`}>
                    {textButton}
                </button>
            </div>
        </div>
    )
}