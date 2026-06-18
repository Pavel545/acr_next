import HeroCildPage from "@/components/ui/HeroCildPage/HeroCildPage";
import InDevelopment from "../../components/InDevelopment/in-development";
import StocksContent from "@/components/sections/stocksContent/StocksContent";




export default function Stocks() {
    return (

        <main>
            <HeroCildPage theme="whiteFone" breadCrumbs={[{title:"Акции"}]} title="Акции" />
            <StocksContent/>
        </main>
    )
}