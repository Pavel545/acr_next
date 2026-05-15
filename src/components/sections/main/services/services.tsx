import s from './services.module.scss';
import { SectionTitle } from '@/components/ui/TitleReveal/TitleReveal';
import { SERVICES_DATA } from '@/config/constants/services';
import Link from 'next/link';

export default function Services() {
    return (
        <section className={s.services}>
            <div className='container'>
                <div className={s.servicesHeader}>
                    <SectionTitle>
                        услуги
                    </SectionTitle>
                    <p className={s.servicesText}>
                        Используйте передовые технологии <br />и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще <br />и прибыльнее
                    </p>
                </div>
            </div>

            <div className={s.servicesItems}>
                {SERVICES_DATA.map((service, index) => (
                    <Link 
                        key={service.id}
                        href={service.href} 
                        className={s.servicesItem}
                    >
                        <div className={s.servicesItemBg}>
                            <div className={s.lightSpot1}></div>
                            <div className={s.lightSpot2}></div>
                        </div>
                        <div className='container'>
                            <div className={s.servicesItemContent}>
                                <h3 className={"h3 " + s.servicesItemTitle}>
                                    <span className={s.number}>{service.number}</span>
                                    {service.name}
                                </h3>
                                <p className={s.servicesItemText}>
                                    {service.description}
                                </p>

                                <div className={`${s.servicesItemImg} ${s[`servicesItemImg${index + 1}`] || ''}`}>
                                    <service.decor3d className={s.servicesItemImgDecor} />
                                    {service.id === 'audit' && (
                                        <button className='butt'>Бесплатно</button>
                                    )}
                                </div>
                                <button className={s.servicesItemBtn}>
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}