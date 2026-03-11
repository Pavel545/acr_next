import s from './services.module.scss';

import Decor1 from '@/assets/images/services3D/7.svg';
import Decor4 from '@/assets/images/services3D/1.svg';
import Decor5 from '@/assets/images/services3D/2.svg';
import Decor2 from '@/assets/images/services3D/3.svg';
import Decor6 from '@/assets/images/services3D/4.svg';
import Decor7 from '@/assets/images/services3D/5.svg';
import Decor3 from '@/assets/images/services3D/6.svg';

export default function Services() {


    return (
        <section className={s.services}>
            <div className='container'>
                <div className={s.servicesHeader}>
                    <h2 className={"h2 " + s.servicesTitle}>услуги</h2>

                    <p className={s.servicesText}>
                        Используйте передовые технологии <br />и инновационные инструменты, чтобы сделать ваш бизнес быстрее, проще <br />и прибыльнее
                    </p>
                </div>

            </div>

            <div className={s.servicesItems}>
                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>01</span> Аудит сайта</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg1}>
                                <Decor1 className={s.servicesItemImgDecor}/>
                                <button className='butt'>Бесплатно</button>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>02</span>Политика сайта</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg2}>
                                <Decor2 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>03</span>Разработка сайта</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg3}>
                                <Decor3 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>04</span>Разработка мобильного приложения</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg4}>
                                <Decor4 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>05</span>Умный чат-бот</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg5}>
                                <Decor5 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>06</span>Дизайн</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg6}>
                                <Decor6 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={s.servicesItem}>
                    <div className={s.servicesItemBg}>
                        <div className={s.lightSpot1}></div>
                        <div className={s.lightSpot2}></div>
                    </div>
                    <div className='container'>
                        <div className={s.servicesItemContent}>
                            <h3 className={"h3 " + s.servicesItemTitle}><span className={s.number}>07</span>МАРКЕТИНГ</h3>
                            <p className={s.servicesItemText}>
                                Создаем нативные и кроссплатформенные мобильные приложения для iOS и Android
                            </p>

                            <div className={s.servicesItemImg + ' ' + s.servicesItemImg7}>
                                <Decor7 className={s.servicesItemImgDecor}/>
                            </div>
                            <button className={s.servicesItemBtn}>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.48828 0.392417C1.09995 -0.166068 2.0488 -0.123353 2.60742 0.48812L9.2373 7.74886C9.97754 8.5598 9.96323 9.80617 9.20508 10.6004L2.58496 17.536C2.01294 18.1349 1.063 18.1566 0.463866 17.5848C-0.135103 17.0128 -0.156803 16.0629 0.415038 15.4637L6.44824 9.14339L0.392577 2.51156C-0.165882 1.89991 -0.123113 0.951049 0.48828 0.392417Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}