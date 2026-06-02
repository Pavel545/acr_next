import BreadCrumbs, { Crumb } from "../Breadcrumbs/Breadcrumbs";
import s from "./HeroCildPage.module.scss";


export default function HeroCildPage({breadCrumbs, title, theme="darkFon"}:{breadCrumbs:Crumb[], title:string, theme?:"darkFon" | "whiteFone"}) {
    return (
        <section className={s.HeroCildPage + " " + theme }>
            <div className={`container ${s.HeroCildPageContent}`}>
                <BreadCrumbs items={breadCrumbs} />

                <h1 className={s.title}>
                    {title}
                </h1>
            </div>
        </section>
    )
}