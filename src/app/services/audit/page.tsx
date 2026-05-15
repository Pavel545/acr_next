import styles from '../services.module.css';

export default function Audit() {
    return (
        <section className={styles.slide} id="slide06">
            <div className={styles.gr2}>
                <div className={styles.elGrid}>
                    <div className={`${styles.container2} ${styles.left}`}>
                        <div className={`${styles.group} ${styles.title}`}>
                            <h1 className="h2">Аудит</h1>
                            <p className={`${styles.t20} ${styles.grey} ${styles.mobIts}`}>
                                Бесплатный глубокий аудит сайта по 120+ параметрам:
                                скорость, SEO, юзабилити и безопасность. Получаете
                                готовый план роста
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Что предлагаем:</h3>
                            <p className={styles.t20}>
                                Глубокий комплексный аудит вашего сайта по более чем 120
                                параметрам:
                            </p>
                            <ul className={styles.ulSin}>
                                <li>Техническая оптимизация</li>
                                <li>SEO-анализ</li>
                                <li>Проверка юзабилити</li>
                                <li>Скорости загрузки</li>
                                <li>Мобильной адаптивности</li>
                                <li>Конверсионных элементов и безопасности</li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Для чего это вам:</h3>
                            <p className={styles.t20}>
                                Чтобы точно выявить все скрытые проблемы, которые мешают
                                сайту привлекать клиентов и продавать, и получить
                                готовый план действий без лишних затрат
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Результат:</h3>
                            <p className={styles.t20}>
                                Подробный отчёт с приоритетными рекомендациями и
                                «быстрыми победами», которые уже в ближайшее время дадут
                                рост трафика, конверсии и позиций в поисковиках
                            </p>
                        </div>

                        <div className={styles.bottom}>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Сроки:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> от 1 дня </span>
                            </div>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Стоимость:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> Бесплатно</span>
                            </div>
                            <button
                                className="butt2"
                                data-popup
                                data-popup-title="Заказать сайт"
                                data-popup-service="Разработка"
                            >
                                Заказат аудит
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.elGrid} ${styles.right}`}>
                    <img className={styles.composits} src="/img/presa/6.png" alt="Аудит" />
                </div>
            </div>
        </section>
    );
}