import HeroCildPage from "@/components/ui/HeroCildPage/HeroCildPage";
import s from "./style.module.scss";
import PriceContant from "@/components/sections/price/content/content";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Прайс-лист',
  description: 'Прайс-лист компании АЦР',
  keywords: ['прайс-лист', 'цены', 'услуги', 'АЦР'],
  authors: [{ name: 'АЦР' }],
  openGraph: {
    title: 'Прайс-лист',
    description: 'Прайс-лист компании АЦR',
    images: ['/img/fonPartnerOg.jpg'],
  },
}

export default function Price() {
    return (
        <main className={s.pricePage}>
            <HeroCildPage breadCrumbs={[{title:'Услуги', href:"/services"},{title:'Прайс-лист'}]} title="Прайс-лист" />

            <PriceContant />

           
        </main>
    )
}