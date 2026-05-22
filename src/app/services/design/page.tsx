import styles from '../mobile-app/MobileApp.module.css';

export default function Design() {
    return (
        <section className={styles.slide} id="slide06">
            <div className={styles.gr2}>
                <div className={styles.elGrid}>
                    <div className={`${styles.container2} ${styles.left}`}>
                        <div className={`${styles.group} ${styles.title}`}>
                            <h1 className="h2">Дизайн</h1>
                            <p className={`${styles.t20} ${styles.grey} ${styles.mobIts}`}>
                                Полный цикл профессиональной разработки дизайна под ключ
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Что предлагаем:</h3>
                            <p className={styles.t20}>
                                Что предлагаем:
                            </p>
                            <ul className={styles.ulSin}>
                                <li>Уникальный современный UI/UX-дизайн для сайтов</li>
                                <li>лендингов и мобильных приложений</li>
                                <li>Разработка фирменного стиля и визуальной идентичности бренда</li>
                                <li>Создание структуры, интерактивных прототипов и готовых дизайн-макетови</li>
                                <li>Адаптивный дизайн под все устройства и экраны</li>
                                <li>Проработка конверсионных элементов и пользовательских сценариев</li>
                                <li>
                                    Тестирование юзабилити и редизайн существующих проектов
                                </li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Для чего это вам:</h3>
                            <p className={styles.t20}>
                                Получить современный,  красивый, удобный и продающий дизайн, который вызывает доверие у клиентов, улучшает пользовательский опыт и значительно повышает конверсию.
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Результат:</h3>
                            <p className={styles.t20}>
                                Современный и эффективный дизайн, который усиливает имидж вашего бренда, выделяет вас среди конкурентов и помогает быстрее превращать посетителей в реальных клиентов.
                            </p>
                        </div>

                        <div className={styles.bottom}>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Сроки:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> от 3 дней </span>
                            </div>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Стоимость:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> от 20 000</span>
                            </div>
                            <button
                              className={`butt2 ${styles.butM}`}
                                data-popup
                                data-popup-title="Дизайн"
                            >
                                Заказать Дизайн
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.elGrid} ${styles.right}`}>
                    <img className={styles.composits} src="/img/presa/6.png" alt="Дизайн" />
                </div>
            </div>
        </section>
    );
}