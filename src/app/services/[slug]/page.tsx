import NotFound from "@/app/not-found";
import ServicesAdvantages from "@/components/sections/servises/ServicesAdvantages/ServicesAdvantages";
import ServicesHero from "@/components/sections/servises/ServicesHero/ServicesHero";
import ServicesPackages from "@/components/sections/servises/ServicesPackages/ServicesPackages";
import ServicesFaq from "@/components/sections/servises/ServicesFaq/ServicesFaq";
import { getServicesSlug } from "@/lib/services";
import ServicesTeams from "@/components/sections/servises/ServicesTeams/ServicesTeams";
import ServicesApproaches from "@/components/sections/servises/ServicesApproaches/ServicesApproaches";


export default async function Rasrabotka({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const service = getServicesSlug(slug);
    console.log(service);
    
    if (!service) {
        // Если данных нет, можно показать 404 или другую страницу
        return <NotFound />;
    }

    return (
        <main style={{ background: "var(--svetlyy)" }}>
            <ServicesHero related={service?.relatedServices || null} hero={service?.content?.hero} />
            {service?.content?.advantages && <ServicesAdvantages advantages={service?.content?.advantages} />}
            <ServicesApproaches />
            {service?.content?.packages && <ServicesPackages packages={service?.content?.packages} />}
            {service?.content?.teams && <ServicesTeams teams={service?.content?.teams} />}
            {service?.content?.faq && <ServicesFaq faq={service?.content?.faq} />}
        </main>
    )
}