import React from 'react';
import s from "./SmartChatbots.module.css";


export default function SmartChatbots() {
  const offers = [
    "Продуманный дизайн диалогов и конверсионных сценариев",
    "Интеграция с ИИ",
    "Разработка для MAX, Telegram, VK, сайта и других платформ",
    "Сложная бизнес-логика, интеграции с CRM, 1С, платежами и базами данных",
    "Обучение бота на ваших данных",
    "Полное тестирование, запуск и настройка аналитики"
  ];

  return (
    <section id="slide04" className={s.slide}>
      <div className={s.gr2}>
        <div className={s.elGrid}>
          <div className={`${s.container2} ${s.left}`}>
            <div className={`${s.group} ${s.title}`}>
              <h1 className={`h2`}>Умные чат-боты</h1>
              <p className={`${s.t20} ${s.grey}`}>
                Полный цикл разработки умных чат-ботов под ключ
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
                Автоматизировать общение с клиентами 24/7, повысить продажи, снизить нагрузку на менеджеров и значительно улучшить качество сервиса.
              </p>
            </div>
            
            <div className={s.group}>
              <h3 className={s.t30}>Результат:</h3>
              <p className={s.t20}>
                Умный чат-бот, который мгновенно отвечает, закрывает сделки, собирает лиды и работает как профессиональный сотрудник, давая рост конверсии и ощутимую экономию на персонале.
              </p>
            </div>

            <div className={s.bottom}>
              <div className={`${s.group} ${s.info}`}>
                <p className={`${s.t16} ${s.grey}`}>Сроки:</p>
                <span className={`${s.t20} ${s.siniy}`}>от 2 дней</span>
              </div>
              <div className={`${s.group} ${s.info}`}>
                <p className={`${s.t16} ${s.grey}`}>Стоимость:</p>
                <span className={`${s.t20} ${s.siniy}`}>от 20 000 ₽</span>
              </div>

              <div className={`${s.group} ${s.fosBox}`}>
                <p style={{ fontStyle: "italic", color: "var(--siniy)" }} className={s.t20}>
                  <span>Cценарий чат-бота, который приносит заявки</span>
                </p>
                <button
                  className='butt2'
                  data-popup
                  data-popup-title="Cценарий чат-бота, который приносит заявки"
                >
                  <b>Забрать</b> бесплатно
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`${s.elGrid} ${s.right}`}>
          <img
            className={s.composits}
            src="/img/presa/4.png"
            alt="Умные чат-боты"
          />
        </div>
      </div>
    </section>
  );
}