import React from 'react';
import s from "./website-policy.module.css";
interface WebsitePolicyProps {
  onGetFree?: (title: string) => void;
}

export default function WebsitePolicy({ onGetFree }: WebsitePolicyProps) {
  const items = [
    { icon: "/icons/presa/s7/1.svg", title: "Защита данных и ФЗ-152" },
    { icon: "/icons/presa/s7/2.svg", title: "Пользовательское соглашение" },
    { icon: "/icons/presa/s7/3.svg", title: "Соблюдение закона о рекламе" },
    { icon: "/icons/presa/s7/4.svg", title: "Проверка SEO-потенциала" },
    { icon: "/icons/presa/s7/5.svg", title: "Чистота языка" },
    { icon: "/icons/presa/s7/4.svg", title: "Раскрытие работы нейросетей" },
    { icon: "/icons/presa/s7/5.svg", title: "Проверка сбора данных" },
    { icon: "/icons/presa/s7/5.svg", title: "Публичная оферта" }
  ];

  const benefits = [
    "Полное соответствие актуальным требованиям надзорных органов",
    "Ваш сайт вызывает доверие у крупных заказчиков и холдингов",
    "Четкое разделение ответственности между владельцем сайта и посетителем",
    "Юридически «чистый» ресурс"
  ];



  return (
    <section id="slide07" className="slide">
      <div className={s.container2}>
        <h1 className={`h2 `}>Политика сайта</h1>

        <div className={s.content}>
          <div className={s.left}>
            <h3 className={`${s.t25} ${s.tit}`}>Что предлагаем:</h3>

            <div className={s.leftContent}>
              {items.map((item, index) => (
                <div key={index} className={s.item}>
                  <img src={item.icon} alt={item.title} />
                  <p className={`${s.t20} ${s.itemT}`}>{item.title}</p>
                </div>
              ))}
            </div>

            <p className={`${s.ps} ${s.siniy} ${s.t25}`}>
              * Обеспечим полную правовую безопасность вашего бизнеса в
              цифровой среде
            </p>
          </div>

          <div className={s.right}>
            <h3 className={`${s.t25} ${s.tit}`}>Результат для вас</h3>

            <ul className={s.rightList}>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>

            <div className={`${s.group} ${s.qw}`}>
              <div className={`${s.group} ${s.grup2}`}>
                <p className={`${s.t16} ${s.grey}`}>Сроки:</p>
                <span className={`${s.t20} ${s.siniy}`}>2 - 5 дней</span>
              </div>
              <div className={`${s.group} ${s.grup2}`}>
                <p className={`${s.t16} ${s.grey}`}>Стоимость:</p>
                <span className={`${s.t20} ${s.siniy}`}>от 15 000 ₽</span>
              </div>
              
            </div>
<div className={`${s.group} ${s.fosBox}`}>
                <p style={{ fontStyle: "italic", color: "var(--siniy)" }} className={s.t20}>
                  <span>Аудит работы сайта и отчёт по ошибкам</span>
                </p>
                <button
                  className='butt2'
                  data-popup
                  data-popup-title="Аудит работы сайта и отчёт по ошибкам"
                  data-popup-service="Разработка"
                >
                  <b>Получить</b> бесплатно
                </button>
              </div>
            <div className={s.decor}>
              <img className={s.decorImg} src="/img/presa/decor.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}