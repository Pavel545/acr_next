"use client";

import s from './ServicesHero.module.scss';
import { useState, useEffect, useRef } from 'react';
import { VideoSection } from '@/components/ui/VideoSection/VideoSection';
import CardWisit from '@/components/ui/CardWisit/CardWisit';
import ServicesCard from '@/components/ui/ServicesCard/ServicesCard';
import Icon6 from '@/assets/icons/services/6.svg';
import { useMediaQuery } from '@/lib/isMobile';
import { SERVICES_DATA } from '@/config/constants/services';
import BreadCrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';

export default function ServicesHero({ hero, related }: { hero?: { title: string; description: string }, related?:{icon:string; slug:string; title:string;}[] }) {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);
    const [isCardFloating, setIsCardFloating] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery("(max-width: 768px)")

    // Авто-сворачивание через 3 секунды после монтирования (только 1 раз)
    useEffect(() => {
        if (!hasAutoCollapsed) {
            const timer = setTimeout(() => {
                setIsExpanded(false);
                setHasAutoCollapsed(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [hasAutoCollapsed]);

    // Использование Intersection Observer
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsCardFloating(!entry.isIntersecting);
            },
            {
                threshold: 0,
                rootMargin: '0px'
            }
        );

        observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    // Определяем, показывать ли кнопку переключения
    const showToggleButton = !isMobile;

    return (
        <VideoSection
            className={s.hero}
            videoSrc="/video/heroMain.webm"
            poster="/video/heroMainPoster.jpg"
            priority
        >
            <div className={s.content} ref={sectionRef}>
                <BreadCrumbs items={[{ title: 'Услуги', href: '/services' }, { title: hero?.title || 'Наши услуги' }]} />

                <div className={s.heroHeading}>
                    <h1 className={'h1 ' + s.title}>
                        {hero?.title || 'Наши услуги'}
                    </h1>
                    <h2 className={s.description}>
                        {hero?.description || 'Мы предлагаем широкий спектр услуг, чтобы помочь вашему бизнесу расти и процветать в цифровом мире.'}
                    </h2>

                    <div className={` ${s.buttons} `}>
                        <button
                            className={`butt ${s.buts}`}
                            data-popup
                            data-popup-title="Обсудить проект"
                        >
                            Заказать услугу
                        </button>

                        <a href="/presentation.pdf" target="_blank" rel="noopener noreferrer"
                            className={`butt3 ${s.buts}`}
                            data-popup
                            data-popup-title="Обсудить проект"
                        >
                            Скачать презентацию
                        </a>
                    </div>


                </div>

                {related &&  <div className={s.services}>
                    <p className={s.servicesTitle}>Направления:</p>
                    <div className={`${s.servicesList} ${!isExpanded ? s.collapsed : ''}`}>
                        {/* Рендерим все сервисы из константы */}
                        {related.map((service) => (
                            <ServicesCard
                                key={`name`}
                                icon={<Image src={service.icon} alt='' width={40} height={40} className='iconS' />}
                                text={service.title}
                                href={service.slug}
                                isGloballyExpanded={isMobile ? true : isExpanded}
                                isMobile={isMobile}
                            />
                        ))}

                        {/* Кнопка-переключатель (только если не мобилка) */}
                        {showToggleButton && (
                            <ServicesCard
                                icon={<Icon6 className={`iconS ${!isExpanded ? s.rotated : ''}`} />}
                                onClick={handleToggle}
                                isGloballyExpanded={isMobile ? true : isExpanded}
                                isMobile={isMobile}
                                isToggleButton={true}
                            />
                        )}
                    </div>
                </div>}
            </div>
        </VideoSection>
    );
}


const DynamicIcon = ({ iconName }: { iconName: string }) => {
    const [icon, setIcon] = useState<string | null>(null);

    useEffect(() => {
        import(`@/assets/icons/services/${iconName}.svg`)
            .then(module => setIcon(module.default))
            .catch(() => setIcon(null));
    }, [iconName]);

    if (!icon) return null;
    
    return <Image src={icon} alt='' width={40} height={40} className='iconS' />;
};