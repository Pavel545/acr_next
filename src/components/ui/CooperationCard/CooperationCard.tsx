import s from './CooperationCard.module.scss';
import { useEffect, useState } from 'react';

export default function CooperationCard({
  title,
  count,
  text,
  icons,
}: {
  title: string;
  count: string;
  text: string[];
  icons: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Для мобильных устройств - отображаем весь контент без переворота
  if (isMobile) {
    return (
      <div className={s.cooperationCardMobile}>
        <div className={s.cooperationCardFront}>
          <div className={s.cooperationCardFront__header}>
            <div className={s.cooperationCard__count}>{count}</div>
            <img src={icons} alt="icon" className={s.cooperationCard__icon} />
          </div>
          <h3 className={s.cooperationCard__title}>{title}</h3>
        </div>
        
        <div className={s.cooperationCardBack}>
          <h3 className={s.cooperationCardBack__title}>{title}</h3>
          {text.map((item, index) => (
            <p key={index} className={s.cooperationCardBack__text}>
              {item}
            </p>
          ))}
        </div>
      </div>
    );
  }

  // Для десктопа - с эффектом переворота
  return (
    <div className={s.cooperationCard}>
      <div className={s.cooperationCardInner}>
        <div className={s.cooperationCardFront}>
          <div className={s.cooperationCardFront__header}>
            <div className={s.cooperationCard__count}>{count}</div>
            <img src={icons} alt="icon" className={s.cooperationCard__icon} />
          </div>
          <h3 className={s.cooperationCard__title}>{title}</h3>
        </div>

        <div className={s.cooperationCardBack}>
          <h3 className={s.cooperationCardBack__title}>{title}</h3>
          {text.map((item, index) => (
            <p key={index} className={s.cooperationCardBack__text}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}