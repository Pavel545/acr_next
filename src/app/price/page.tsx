import HeroCildPage from "@/components/ui/HeroCildPage/HeroCildPage";
import s from "./style.module.scss";
import PriceContant from "@/components/sections/price/content/content";
import Image from "next/image";

export default function Price() {
    return (
        <main className={s.pricePage}>
            <HeroCildPage breadCrumbs={[{title:'Услуги', href:"/services"},{title:'Прайс-лист'}]} title="Прайс-лист" />

            <PriceContant />

           
        </main>
    )
}