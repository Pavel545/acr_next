import s from "./styles.module.css";

const consentBlocks = [
  <>Настоящим я, субъект персональных данных, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» свободно, своей волей и в своем интересе даю согласие ООО «Аналитический Центр Развитие» (Оператор, ИНН 7325112704, КПП 732601001) на обработку моих персональных данных, указанных мной при заполнении форм на сайте <a className={s.link} href="https://acr-agency.ru">acr-agency.ru</a>.</>,
];

const infoCards = [
  {
    title: "Состав обрабатываемых данных",
    text: "фамилия, имя, отчество, адрес электронной почты, номер телефона.",
  },
  {
    title: "Цели обработки данных",
    text: "предоставление обратной связи, предоставление услуг, рассылок, а также в иных целях, предусмотренных Политикой конфиденциальности.",
  },
  {
    title: "Характер согласия",
    text: "согласие является конкретным, предметным, информированным, сознательным и однозначным.",
  },
  {
    title: "Способы обработки",
    text: "сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, обезличивание, блокирование, удаление, уничтожение.",
  },
  {
    title: "Формат обработки",
    text: "обработка персональных данных осуществляется с использованием средств автоматизации и без них.",
  },
];

export default function SoglasieObrabotkaPersDannih() {
  return (
    <>
      <main className={s.page}>
        <div className="container">
          <section className={s.hero}>
            <span className={s.badge}>ООО «Аналитический Центр Развитие»</span>
            <h1 className={`h1 ${s.tit}`}>Согласие на обработку персональных данных</h1>
            <p className={s.lead}>
              Документ подтверждает согласие пользователя на обработку персональных
              данных, передаваемых через формы на сайте.
            </p>
          </section>

          <section className={s.section}>
            <div className={s.textBlock}>
              {consentBlocks.map((text, index) => (
                <p key={index} className={s.paragraph}>
                  {text}
                </p>
              ))}
            </div>

            <div className={s.cards}>
              {infoCards.map((card, index) => (
                <article key={index} className={s.card}>
                  <p className={s.cardLabel}>{card.title}</p>
                  <p className={s.cardText}>{card.text}</p>
                </article>
              ))}
            </div>

            <div className={s.notice}>
              <p className={s.noticeTitle}>Срок действия согласия</p>
              <p className={s.noticeText}>
                Настоящее согласие действует с момента его предоставления до дня
                его отзыва путём направления письменного уведомления на
                электронный адрес:
              </p>
              <a href="mailto:acr-agency@yandex.ru" className={s.link}>
                acr-agency@yandex.ru
              </a>
            </div>

            <div className={s.finalBlock}>
              <p className={s.paragraph}>
                Я подтверждаю, что ознакомлен(а) с{" "}
                <a className={s.link} href="/politiko">
                  Политикой конфиденциальности
                </a>
                , права и обязанности в области персональных данных мне разъяснены.
              </p>
              <p className={s.paragraph} style={{ marginTop: '14px' }}>
                Телефон для связи:{" "}
                <a href="tel:+79093587042" className={s.link}>
                  +7 (909) 358-70-42
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}