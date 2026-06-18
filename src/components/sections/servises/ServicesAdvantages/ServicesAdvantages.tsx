import { Advantages } from '@/types/services';
import s from './ServicesAdvantages.module.scss';
import Image from 'next/image';



export default function ServicesAdvantages({ advantages }: { advantages?: Advantages }) {

    if (!advantages) {
        return null; // Или можно отобразить заглушку, если данных нет
    }

    return (
        <section className={s.servicesAdvantages}>
            <div className="container">
                <h2 className={`h2 ${s.title}`} dangerouslySetInnerHTML={{__html:advantages.title}}></h2>
                <div className={s.advantages}>
                    {advantages?.items.map((item, index) => (
                        <div key={index} className={s.advantage}>
                            {item.icon && <div className={s.iconBox}>
                                <Image src={item.icon} className={s.icon} alt={item.title} width={55} height={55}/>
                            </div>}
                            <h3 className={s.advantageTitle}>{item.title}</h3>
                            <p className={s.advantageDescription}>{item.description}</p>
                        </div>
                    ))}
                </div>


                <div className={s.buttons}>
                    <button className={`butt ${s.buts}`}>Заказать услугу</button>
                </div>
            </div>
        </section>
    )
}