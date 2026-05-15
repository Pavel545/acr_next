import React from 'react';
import s from "./WebsiteDevelopment.module.css";

// Тип для CSS переменных
type CSSVariables = {
  '--colS'?: number;
  '--colEnd'?: number;
  '--rowS'?: number;
  '--rowEnd'?: number;
};

interface PackageItem {
  id: string;
  title: string;
  style: React.CSSProperties & CSSVariables;
  description: string;
  features: string[];
  timeline: string;
  price: string;
  isActive: boolean;
  popupTitle: string;
}

interface OfferItem {
  title: string;
}

interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  offers: OfferItem[];
  purpose: string;
  result: string;
  freebieText: string;
  freebiePopupTitle: string;
  packages: PackageItem[];
  decorImage: string;
}

export default function WebsiteDevelopment() {
  const offers = [
    {
      title: "Уникальный конверсионный дизайн и структура"
    },
    {
      title: "Адаптивная верстка под все устройства и браузеры"
    },
    {
      title: "Интеграция форм заявок, CRM, платежей и аналитики"
    },
    {
      title: "Оптимизация скорости загрузки и SEO"
    },
    {
      title: "A/B-тестирование и запуск на хостинг"
    },
    {
      title: "Дальнейшая поддержка и доработки"
    }
  ];

  const sections: SectionData[] = [
    {
      id: "slide08",
      title: "Разработка лендинга",
      subtitle: "Полный цикл разработки продающего лендинга под ключ",
      offers: offers,
      purpose: "Получить мощный инструмент продаж, который работает 24/7 и превращает посетителей в клиентов с максимальной эффективностью.",
      result: "Готовый продающий лендинг, который уже в ближайшее время обеспечит рост лидов, конверсии и дохода вашего бизнеса.",
      freebieText: "Дизайн первого экрана",
      freebiePopupTitle: "Дизайн первого экрана",
      packages: [
        {
          id: "business",
          title: "БИЗНЕС",
          style: { "--colS": 1, "--colEnd": 1, "--rowS": 1, "--rowEnd": 2 } as React.CSSProperties & CSSVariables,
          description: "Когда нужен максимум продаж и скорости",
          features: [
            "Ультра-скорость загрузки (<2 сек)",
            "Экспертный контент для ИИ-поисковиков",
            "Telegram Mini App + интеграция с CRM"
          ],
          timeline: "от 14 дней",
          price: "95 000 ₽",
          isActive: true,
          popupTitle: "Разработка лендинга: БИЗНЕС"
        },
        {
          id: "economy",
          title: "ЭКОНОМ",
          style: { "--colS": 2, "--colEnd": 1, "--rowS": 1, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Идеально для самого дешёвого и быстрого старта",
          features: [
            "Базовая мобильная адаптация",
            "Продающий текст",
            "Формы заказов"
          ],
          timeline: "от 7 дней",
          price: "30 000 ₽",
          isActive: false,
          popupTitle: "Разработка лендинга: ЭКОНОМ"
        },
        {
          id: "standard",
          title: "СТАНДАРТ",
          style: { "--colS": 2, "--colEnd": 1, "--rowS": 2, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Отличное качество за разумные деньги",
          features: [
            "Проработанная мобильная версия",
            "UX-копирайтинг + анализ ЦА",
            "Чат-бот + интеграции с соцсетями"
          ],
          timeline: "от 10 дней",
          price: "55 000 ₽",
          isActive: false,
          popupTitle: "Разработка лендинга: СТАНДАРТ"
        }
      ],
      decorImage: ""
    },
    {
      id: "slide09",
      title: "Интернет - магазин",
      subtitle: "Полноценная продающая корпоративная платформа для крупного бизнеса и холдингов",
      offers: [
        { title: "Современный интернет-магазин" },
        { title: "Автоматизацию продаж" },
        { title: "Удобную корзину" },
        { title: "Все необходимые интеграции" }
      ],
      purpose: "Запустить или вывести на новый уровень онлайн-торговлю, минимизировать ручную работу и увеличить продажи",
      result: "Рабочий магазин, который продаёт 24/7, автоматически обрабатывает заказы, повышает лояльность и легко масштабируется под рост нагрузки",
      freebieText: "Чек-лист запуска прибыльного интернет-магазина",
      freebiePopupTitle: "Чек-лист запуска прибыльного интернет-магазина",
      packages: [
        {
          id: "business",
          title: "БИЗНЕС",
          style: { "--colS": 1, "--colEnd": 2, "--rowS": 2, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Для серьёзного масштаба и конкурентного преимущества",
          features: [
            "Глобальная автоматизация процессов",
            "Персонализация на базе ИИ",
            "Scalable-архитектура (нагрузка ×10)"
          ],
          timeline: "от 100 дней",
          price: "от 500 000 ₽",
          isActive: true,
          popupTitle: "Интернет-магазин: БИЗНЕС"
        },
        {
          id: "economy",
          title: "ЭКОНОМ",
          style: { "--colS": 1, "--colEnd": 1, "--rowS": 1, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Быстрый запуск магазина",
          features: [
            "Онлайн-касса и корзина",
            "Формы обратной связи",
            "Обычный хостинг"
          ],
          timeline: "от 60 дней",
          price: "120 000 ₽",
          isActive: false,
          popupTitle: "Интернет-магазин: ЭКОНОМ"
        },
        {
          id: "standard",
          title: "СТАНДАРТ",
          style: { "--colS": 2, "--colEnd": 1, "--rowS": 1, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Комфортный рост продаж",
          features: [
            "Интеграция с CRM и складом",
            "Онлайн-консультант",
            "Облачная архитектура + WebView-приложение"
          ],
          timeline: "от 75 дней",
          price: "250 000 ₽",
          isActive: false,
          popupTitle: "Интернет-магазин: СТАНДАРТ"
        }
      ],
      decorImage: "/img/presa/decor3.svg"
    },
    {
      id: "slide10",
      title: "Корпоративный сайт",
      subtitle: "Полный цикл разработки профессионального корпоративного сайта под ключ",
      offers: [
        { title: "Современный фирменный дизайн и продуманная многостраничная структура" },
        { title: "Адаптивная верстка под все устройства и браузеры" },
        { title: "Интеграция с CRM, формами заявок, онлайн-консультантом и аналитикой" },
        { title: "Оптимизация скорости загрузки, SEO и безопасности" }
      ],
      purpose: "Получить представительный сайт, который укрепляет доверие к бренду, профессионально презентует компанию и эффективно генерирует лиды и заявки.",
      result: "Готовый корпоративный сайт, который повышает имидж компании, привлекает целевых клиентов и способствует устойчивому росту вашего бизнеса.",
      freebieText: "Получите чек-лист профессионального корпоративного сайта — лица вашего бренда",
      freebiePopupTitle: "Получите чек-лист профессионального корпоративного сайта — лица вашего бренда",
      packages: [
        {
          id: "business",
          title: "БИЗНЕС",
          style: { "--colS": 2, "--colEnd": 1, "--rowS": 1, "--rowEnd": 2 } as React.CSSProperties & CSSVariables,
          description: "Максимум доверия и технологичности",
          features: [
            "Личный кабинет + API-интеграции",
            "Агрессивный захват ИИ-выдачи",
            "ИИ-ассистент с обучением на ваших данных + 24/7 мониторинг"
          ],
          timeline: "от 100 дней",
          price: "от 350 000 ₽",
          isActive: true,
          popupTitle: "Корпоративный сайт: БИЗНЕС"
        },
        {
          id: "economy",
          title: "ЭКОНОМ",
          style: { "--colS": 1, "--colEnd": 1, "--rowS": 1, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Подходит для старта среднего бизнеса",
          features: [
            "Каталог и прайс-листы",
            "Базовая SEO-оптимизация",
            "1 год хостинга"
          ],
          timeline: "от 30 дней",
          price: "100 000 ₽",
          isActive: false,
          popupTitle: "Корпоративный сайт: ЭКОНОМ"
        },
        {
          id: "standard",
          title: "СТАНДАРТ",
          style: { "--colS": 1, "--colEnd": 1, "--rowS": 2, "--rowEnd": 1 } as React.CSSProperties & CSSVariables,
          description: "Оптимальный баланс цены и функционала",
          features: [
            "Интерактивная карта и отзывы",
            "SEO 2.0",
            "Регулярные бэкапы + базовый чат-бот"
          ],
          timeline: "от 45 дней",
          price: "180 000 ₽",
          isActive: false,
          popupTitle: "Корпоративный сайт: СТАНДАРТ"
        }
      ],
      decorImage: "/img/presa/decor4.svg"
    }
  ];

  const renderSection = (section: SectionData) => (
    <section key={section.id} id={section.id}  className="slide">
      <div className={`${s.container2} ${s.cont}`}>
        <div className={s.group}>
          <h2 className={`h2 `}>{section.title}</h2>
          <p className={`${s.t20} ${s.grey}`}>{section.subtitle}</p>
        </div>

        <div className={s.content}>
          <div className={s.left}>
            <div className={s.group}>
              <h3 className={`${s.t25} ${s.tit}`}>Что предлагаем:</h3>
              <ul className={s.ulSin}>
                {section.offers.map((offer, index) => (
                  <li key={index}>{offer.title}</li>
                ))}
              </ul>
            </div>

            <div className={s.group}>
              <h3 className={`${s.t25} ${s.tit}`}>Для чего это вам:</h3>
              <p className={s.t20}>{section.purpose}</p>
            </div>

            <div className={s.group}>
              <h3 className={`${s.t25} ${s.tit}`}>Результат:</h3>
              <p className={s.t20}>{section.result}</p>
            </div>

            <div className={`${s.group} ${s.fosBox}`}>
              <p style={{ fontStyle: "italic", color: "var(--siniy)" }} className={s.t20}>
                <span>{section.freebieText}</span>
              </p>
              <button
                className="butt2"
                data-popup
                data-popup-title={section.freebiePopupTitle}
              >
                <b>Получить</b> бесплатно
              </button>
            </div>
          </div>

          <div className={s.right}>
            {section.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`${s.item} ${pkg.isActive ? s.active : ""}`}
                data-popup
                data-popup-title={pkg.popupTitle}
                style={pkg.style}
              >
                <div className={s.group}>
                  <h3 className={`${s.t30} ${s.tit}`}>{pkg.title}</h3>
                  <p className={`${s.t16} ${s.ps}`}>{pkg.description}</p>
                  <ul className={s.list}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={`${s.group} ${s.row}`}>
                  <div className={`${s.group} ${s.grup2}`}>
                    <p className={`${s.t16} ${s.grey}`}>Сроки:</p>
                    <span className={`${s.t20} ${s.siniy}`}>{pkg.timeline}</span>
                  </div>
                  <div className={`${s.group} ${s.grup2}`}>
                    <p className={`${s.t16} ${s.grey}`}>Стоимость:</p>
                    <span className={`${s.t20} ${s.siniy}`}>{pkg.price}</span>
                  </div>
                </div>
              </div>
            ))}
            {section.decorImage && (
              <div className={s.decor}>
                <img className={s.decorImg} src={section.decorImage} alt="Декор" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <main style={{background:"var(--svetlyy)"}}>
        {sections.map((section) => renderSection(section))}
      </main>
    </>
  );
}