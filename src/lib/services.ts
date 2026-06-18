import { Service } from "@/types/services";


export function getServicesSlug(slug: string) {
    try {
        const data = require(`@/data/services.json`);
        const currentService = data.find((service: Service) => service.slug === slug);
        
        if (!currentService) return null;
        
        // Если у текущей услуги нет slugCat, возвращаем пустой массив
        if (!currentService.slugCat) return { ...currentService, relatedServices: [] };
        
        // Находим все услуги с таким же slugCat (исключая текущую)
        const relatedServices = data
            .filter((service: Service) => 
                service.slugCat === currentService.slugCat && 
                service.slug !== slug
            )
            .map((service: Service) => ({
                slug: service.slug,
                title: service.title,
                icon: service.icon
            }));
        
        return {
            ...currentService,
            relatedServices
        };
    } catch (error) {
        console.error("Error fetching service data:", error);
        return null;
    }
}