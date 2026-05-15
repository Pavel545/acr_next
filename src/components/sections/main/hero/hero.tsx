"use client";
import { useState, useEffect, useRef } from 'react';
import { VideoSection } from '@/components/ui/VideoSection/VideoSection';
import s from './hero.module.css';
import CardWisit from '@/components/ui/CardWisit/CardWisit';
import ServicesCard from '@/components/ui/ServicesCard/ServicesCard';
import Icon6 from '@/assets/icons/services/6.svg';
import { useMediaQuery } from '@/lib/isMobile';
import { SERVICES_DATA } from '@/config/constants/services';

export default function HeroMain() {
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
                <div className={s.heroHeading}>
                    <h1 className={'h1 ' + s.title}>
                        создаем  <br />
                        <span>
                            сайты с нейросетями, <br /> мобильные приложения,   <br />и умные чат-боты
                        </span>
                    </h1>

                    {!isMobile && (
                        <CardWisit
                            src="/img/eva1.png"
                            name="Ева"
                            post="ИИ-ассистент"
                            textButton="Обсудить проект"
                            isFloating={isCardFloating}
                        />
                    )}
                </div>

                <div className={s.services}>
                    <p className={s.servicesTitle}>Услуги:</p>
                    <div className={`${s.servicesList} ${!isExpanded ? s.collapsed : ''}`}>
                        {/* Рендерим все сервисы из константы */}
                        {SERVICES_DATA.filter(s => s.id !== 'audit' && s.id !== 'website-policy').map((service) => (
                            <ServicesCard
                                key={service.id}
                                icon={<service.icon className="iconS" />}
                                text={service.name}
                                href={service.href}
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
                </div>
            </div>
        </VideoSection>
    );
}