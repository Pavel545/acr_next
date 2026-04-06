"use client";
import { useState, useEffect } from 'react';
import { VideoSection } from '@/components/ui/VideoSection/VideoSection';
import s from './hero.module.css';
import CardWisit from '@/components/ui/CardWisit/CardWisit';
import ServicesCard from '@/components/ui/ServicesCard/ServicesCard';

import Icon1 from '@/assets/icons/services/1.svg';
import Icon2 from '@/assets/icons/services/2.svg';
import Icon3 from '@/assets/icons/services/3.svg';
import Icon4 from '@/assets/icons/services/4.svg';
import Icon5 from '@/assets/icons/services/5.svg';
import Icon6 from '@/assets/icons/services/6.svg';

export default function HeroMain() {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);
    const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);

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

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <VideoSection className={s.hero} videoSrc="/video/heroMain.webm" poster="/video/heroMainPoster.jpg" priority>
            <div className={s.content}>
                <div className={s.heroHeading}>
                    <h1 className={'h1 ' + s.title}>
                        создаем  <br />
                        <span>
                            сайты с нейросетями, <br /> мобильные приложения,   <br />и умные чат-боты
                        </span>
                    </h1>

                    <CardWisit src="/img/eva1.png" name="Ева " post="ИИ-ассистент" textButton="Обсудить проект" />
                </div>

                <div className={s.services}>
                    <p className={s.servicesTitle}>
                        Услуги:
                    </p>
                    <div className={`${s.servicesList} ${!isExpanded ? s.collapsed : ''}`}>
                        <ServicesCard
                            icon={<Icon1 className="iconS" />}
                            text="Разработка сайта"
                            href="/services/web-development"
                            isGloballyExpanded={isExpanded}
                        />
                        <ServicesCard
                            icon={<Icon2 className="iconS" />}
                            text="Умный чат-бот"
                            href="/services/ai-chatbot"
                            isGloballyExpanded={isExpanded}
                        />
                        <ServicesCard
                            icon={<Icon3 className="iconS" />}
                            text="Мобильное приложение"
                            href="/services/mobile-app-development"
                            isGloballyExpanded={isExpanded}
                        />
                        <ServicesCard
                            icon={<Icon4 className="iconS" />}
                            text="Дизайн"
                            href="/services/design"
                            isGloballyExpanded={isExpanded}
                        />
                        <ServicesCard
                            icon={<Icon5 className="iconS" />}
                            text="Маркетинг"
                            href="/services/marketing"
                            isGloballyExpanded={isExpanded}
                        />
                        <ServicesCard
                            icon={<Icon6 className={`iconS ${!isExpanded ? s.rotated : ''}`} />}
                            onClick={handleToggle}
                            isGloballyExpanded={isExpanded}
                            isToggleButton={true}
                        />
                    </div>
                </div>
            </div>
        </VideoSection>
    );
}