import BreadCrumbs, { Crumb } from "../Breadcrumbs/Breadcrumbs";
import s from "./HeroCildPage.module.scss";


export default function HeroCildPage({breadCrumbs, title}:{breadCrumbs:Crumb[], title:string}) {
    return (
        <section className={s.HeroCildPage}>
            <div className="container">
                <BreadCrumbs items={breadCrumbs} />

                <h1 className={s.title}>
                    {title}
                </h1>
            </div>
        </section>
    )
}