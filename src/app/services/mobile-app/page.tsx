import s from "./MobileApp.module.css";

interface MobileAppProps {
  onGetFree?: (title: string) => void;
}

export default function MobileApp() {
  const offers = [
    "Современный конверсионный UI/UX-дизайн",
    "Кросс-платформенная (Flutter / React Native) или нативная разработка",
    "Backend, API-интеграции и сложная бизнес-логика",
    "Push-уведомления, аналитика, платежи и другие функции",
    "Полное тестирование и публикация в App Store / Google Play"
  ];



  return (
    <section id="slide05" className={s.slide}>
      <div className={s.gr2}>
        <div className={s.elGrid}>
          <div className={`${s.container2} ${s.left}`}>
            <div className={`${s.group} ${s.title}`}>
              <h1 className={`h2`}>Мобильное приложение</h1>
              <p className={`${s.t20} ${s.grey}`}>
                Полный цикл разработки мобильного приложения под iOS и Android под ключ:
              </p>
            </div>
            
            <div className={s.group}>
              <h3 className={s.t30}>Что предлагаем:</h3>
              <ul className={s.ulSin}>
                {offers.map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>
            
            <div className={s.group}>
              <h3 className={s.t30}>Для чего это вам:</h3>
              <p className={s.t20}>
                Получить современное, быстрое и удобное приложение, которое привлечёт и удержит клиентов, повысит продажи и автоматизирует бизнес-процессы.
              </p>
            </div>
            
            <div className={s.group}>
              <h3 className={s.t30}>Результат:</h3>
              <p className={s.t20}>
                Готовое приложение, соответствующее всем стандартам, которое уже в ближайшее время даст рост установок, конверсии и дохода вашего бизнеса.
              </p>
            </div>

            <div className={s.bottom}>
              <div className={`${s.group} ${s.info}`}>
                <p className={`${s.t16} ${s.grey}`}>Сроки:</p>
                <span className={`${s.t20} ${s.siniy}`}>от 20 дней</span>
              </div>
              <div className={`${s.group} ${s.info}`}>
                <p className={`${s.t16} ${s.grey}`}>Стоимость:</p>
                <span className={`${s.t20} ${s.siniy}`}>от 200 000 ₽</span>
              </div>

              <div className={`${s.group} ${s.fosBox}`}>
                <p style={{ fontStyle: "italic", color: "var(--siniy)" }} className={s.t20}>
                  <span>Бесплатный дизайн главного экрана приложения</span>
                </p>
                <button
                  className='butt2'
                  data-popup
                  data-popup-title="Бесплатный дизайн главного экрана приложения"
                >
                  <b>Получить</b> бесплатно
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${s.elGrid} ${s.right}`}>
          <img
            className={s.composits}
            src="/img/presa/5.png"
            alt="Мобильное приложение"
          />
        </div>
      </div>
    </section>
  );
}