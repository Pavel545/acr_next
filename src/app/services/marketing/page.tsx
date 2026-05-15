import styles from '../services.module.css';

export default function Marketing() {
    return (
        <section className={styles.slide} id="slide06">
            <div className={styles.gr2}>
                <div className={styles.elGrid}>
                    <div className={`${styles.container2} ${styles.left}`}>
                        <div className={`${styles.group} ${styles.title}`}>
                            <h1 className="h2">Интернет-маркетинг</h1>
                            <p className={`${styles.t20} ${styles.grey} ${styles.mobIts}`}>
                                Полный комплекс интернет-маркетинга под ключ
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Что предлагаем:</h3>

                            <ul className={styles.ulSin}>
                                <li>Оптимизация сайта ( AOE ) — оптимизация контента под ИИ-поисковики и нейросети</li>
                                <li>Поисковая оптимизация сайта (SEO) и повышение позиций в Яндексе и Google</li>
                                <li>Настройка и ведение контекстной и таргетированной рекламы (Яндекс.Директ, VK Ads, Telegram Ads)</li>
                                <li>Продвижение в социальных сетях (SMM): стратегия, контент и таргетированная реклама</li>
                                <li>Контент-маркетинг и работа с репутацией</li>
                                <li>Настройка сквозной аналитики, отчётов и контроля эффективности</li>
                                <li>Постоянная оптимизация кампаний и масштабирование результата</li>
                            </ul>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Для чего это вам:</h3>
                            <p className={styles.t20}>
                                Получать стабильный поток целевых клиентов из интернета, эффективно тратить маркетинговый бюджет и видеть понятную отдачу от каждого вложенного рубля.
                            </p>
                        </div>

                        <div className={styles.group}>
                            <h3 className={styles.t30}>Результат:</h3>
                            <p className={styles.t20}>
                                Рост количества заявок и продаж, повышение узнаваемости бренда и стабильное увеличение прибыли вашего бизнеса с прозрачным контролем эффективности.
                            </p>
                        </div>

                        <div className={styles.bottom}>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Сроки:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> от 3 дней </span>
                            </div>
                            <div className={`${styles.group} ${styles.info}`}>
                                <p className={`${styles.t16} ${styles.grey}`}>Стоимость:</p>
                                <span className={`${styles.t20} ${styles.siniy}`}> от 25 000</span>
                            </div>
                            <button
                                className="butt2"
                                data-popup
                                data-popup-title="Интернет-маркетинг"
                            >
                                Интернет-маркетинг
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`${styles.elGrid} ${styles.right}`}>
                    <img className={styles.composits} src="/img/presa/6.png" alt="Интернет-маркетинг" />
                </div>
            </div>
        </section>
    );
}