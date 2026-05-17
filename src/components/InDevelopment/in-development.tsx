import Link from "next/link";
import s from "./style.module.scss";
import InDev from "@/assets/in-deve.svg"
import Image from "next/image";
export default function InDevelopment() {
    

    return ( 
       <main className={s.InDevelopment} style={{ background: "var(--svetlyy)" }}>
            <section className='erPage'>
                <div className="container erPageContainer">
                    <div  className={`${s.imagesBox} `}>
                        <Image className={`${s.imagesStatic}`} src={'/in-deve.svg'} alt="Страница в разработке" width={623} height={547}/>
                        <InDev className={`${s.images}`}/>
                    </div>
                    <h1 className="h1">Страница в разработке!</h1>
                    <Link
                        href="/"
                        className="butt"
                    >
                        Вернуться на главную
                    </Link>

                </div>
            </section>
        </main>
    )
}