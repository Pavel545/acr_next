import { Stocks } from "@/types/stocks";



export function getStocksCat(cat:string) {
    try {
        const data = require('@/data/stocks.json')

        return data.filter((e:Stocks) => e.cat === cat);
        
    } catch (error){
        console.error("Ошибка в получении акций:", error);
        return null;
    }
} 