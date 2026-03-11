import { Counter } from '@/components/ui/Counter';
import s from './advantages.module.css';

export default function Advantages() {

    return (
        <section className={s.advantages}>
            <div className='container'>
                <h2 className={'h2 ' + s.title}>
                    <span className='siniy '>Энергия наших цифр </span><br /> для реальных достижений
                </h2>
                <div className={s.advantagesList}>
                    <div className={s.advantagesItem}>
                        <h3 className={s.advantagesItemTitle}><Counter className='siniy' end={16} suffix=" лет" /></h3>
                        <p className={s.advantagesItemText}>На рынке цифровых продуктов</p>
                    </div>
                    <div className={s.advantagesItem}>
                        <h3 className={s.advantagesItemTitle}><Counter duration={2000} className='siniy' end={96} suffix="%" /></h3>
                        <p className={s.advantagesItemText}>довольных клиентов</p>
                    </div>
                    <div className={s.advantagesItem}>
                        <h3 className={s.advantagesItemTitle}><Counter duration={4000} className='siniy' end={3} suffix=" года" /></h3>
                        <p className={s.advantagesItemText}>Средняя длительность партнёрства</p>
                    </div>
                    <div className={s.advantagesItem}>
                        <h3 className={s.advantagesItemTitle}><Counter duration={3000} className='siniy' end={2} suffix="х" /></h3>
                        <p className={s.advantagesItemText}> Увеличение конверсии в среднем</p>
                    </div>
                </div>
            </div>
        </section>
    )
}