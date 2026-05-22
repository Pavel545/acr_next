import s from "./styles.module.css";

// ===== НАСТРОЙКИ КОМПАНИИ =====
const companyConfig = {
  name: "ООО «Аналитический Центр Развитие»",
  shortName: "АЦ Развитие",
  siteUrl: "acr-agency.ru",
  siteDomain: "acr-agency.ru",
  fullSiteUrl: "https://acr-agency.ru",
  policyUrl: "https://acr-agency.ru/soglasie-obrabotka-pers-dannih",
  email: "acr-agency@yandex.ru",
  phone: "+7 (909) 358-70-42",
  phoneRaw: "+79093587042",
  address: "432063, РФ, Ульяновская обл., г. Ульяновск, ул. Кирова, д. 6, кв. 397",
  inn: "7325112704",
  kpp: "732601001",
  ogrn: "1127325002573",
  bankAccount: "40702810129280002066",
  bik: "042202824",
  bank: 'ФИЛИАЛ "НИЖЕГОРОДСКИЙ" АО "АЛЬФА-БАНК"',
};

// ===== ДАННЫЕ ДЛЯ ПОЛИТИКИ COOKIE =====
const sections = [
  {
    title: "1. Общие положения",
    content: [
      `Настоящая Политика в отношении файлов cookie (далее — Политика) определяет порядок и условия использования ${companyConfig.name} (ИНН ${companyConfig.inn}) (далее — Оператор, Общество, Мы) файлов cookie пользователей во время их посещения и использования сайта <a href="${companyConfig.fullSiteUrl}">${companyConfig.fullSiteUrl}</a> (далее — Сайт).`,
      `Настоящая Политика дополняет положения документа «Политика обработки персональных данных», размещенного по адресу ${companyConfig.policyUrl}.`,
    ],
  },
  {
    title: "2. Что такое файлы cookie",
    content: [
      `2.1. Файлы cookie представляют собой файлы, загружаемые на устройство (в том числе, мобильные телефоны, компьютеры, планшеты и иные устройства), с которого осуществляется вход на Сайт. Обычно сохраненные на Вашем устройстве файлы cookie отправляются на Сайт при его повторном посещении или на другой ресурс, который может их распознать.`,
      `2.2. Файлы cookie позволяют идентифицировать Вас (как пользователя Сайта, ранее уже открывавшего Сайт), получить информацию о тех действиях, которые вы осуществляете на Сайте, а также о Ваших предпочтениях, благодаря чему помогают сделать посещение Сайта более удобным.`,
      `2.3. Мы используем термин «файлы cookie первой стороны» в отношении файлов cookie, установленных и настроенных нами самими, и термин «файлы cookie третьей стороны» в том случае, если они настроены другими поставщиками технологических услуг. Файлы cookie третьих лиц позволяют предоставлять на Сайте или через него функции или возможности третьих лиц (например, аналитику).`,
      `Мы можем запросить у Вас персональные данные в любой момент, когда вы связываетесь с Компанией. Компания может использовать такие данные в соответствии с настоящей Политикой Конфиденциальности. Она также может совмещать такую информацию с иной информацией для целей предоставления и улучшения своих продуктов, услуг, информационного наполнения (контента) и коммуникаций.`,
    ],
  },
  {
    title: "3. Как управлять файлами cookie",
    content: [
      `3.1. Вы можете управлять файлами cookie различными способами. Обращаем Ваше внимание на то, что в случае удаления или блокировки файлов cookie, возможно, не все функции Сайта будут Вам доступны или не все страницы Сайта будут корректно отображаться.`,
      `3.2. Большинство браузеров разрешают использование файлов cookie по умолчанию, но вы можете самостоятельно определить, следует ли использовать файлы cookie, с помощью элементов управления браузера, которые обычно находятся в меню «Инструменты» или «Настройки» Вашего браузера.`,
      `3.3. Кроме того, вы можете настроить параметры Вашего браузера, используемого для просмотра Сайта, чтобы включить, отключить или удалить файлы cookie.`,
    ],
    browserLinks: [
      { name: "Яндекс Браузер", href: "https://browser.yandex.ru/help/personal-data-protection/cookies.html" },
      { name: "Chrome", href: "https://support.google.com/chrome/answer/95647" },
      { name: "Firefox", href: "https://support.mozilla.org/ru/kb/uluchshennaya-zashchita-ot-otslezhivaniya-v-firefox-" },
      { name: "Internet Explorer", href: "https://support.microsoft.com/ru-ru/topic/удаление-cookie-и-управление-ими-168dab11-0753-043d-7c16-ede5947fc64d" },
      { name: "Edge", href: "https://support.microsoft.com/ru-ru/microsoft-edge/удаление-cookie-в-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
      { name: "Safari for macOS", href: "https://support.apple.com/ru-ru/guide/safari/sfri11471/mac" },
      { name: "Safari for iOS", href: "https://support.apple.com/ru-ru/105082" },
    ],
  },
  {
    title: "4. Какие файлы cookie используются",
    cards: [
      {
        title: "4.1. Основание использования",
        text: `Мы используем файлы cookie на основании Вашего согласия. Осуществить действия по отказу от использования файлов cookie вы можете в настройках своего браузера, через который осуществляете вход на Сайт, а также в настройках своего устройства. Максимальный срок хранения файлов cookie составляет 1 год.`,
      },
      {
        title: "4.2. Строго необходимые файлы cookie",
        text: `Строго необходимые файлы cookie необходимы для функционирования Сайта. Как правило, они активируются только в ответ на Ваши действия, аналогичные запросу услуг, такие как: настройка уровня конфиденциальности, вход в систему или заполнение форм. Вы можете настроить браузер таким образом, чтобы он блокировал эти файлы cookie или уведомлял Вас об их использовании, но в таком случае возможно, что некоторые разделы Сайта не будут работать.`,
      },
      {
        title: "4.3. Функциональные файлы cookie",
        text: `Функциональные файлы cookie позволяют предоставлять улучшенную функциональность и персонализацию, например, для онлайн-чатов и видеороликов. Они могут настраиваться нами или сторонними поставщиками, услуги которых содержатся на наших страницах. Если вы не одобрите использование этих файлов cookie, то, возможно, некоторые или все эти функции будут работать ненадлежащим образом.`,
      },
      {
        title: "4.4. Аналитические файлы cookie",
        text: `Аналитические файлы cookie позволяют подсчитывать количество посещений и источников трафика, чтобы оценивать и улучшать работу нашего веб-сайта. Благодаря им мы знаем, какие страницы являются наиболее и наименее популярными, и видим, каким образом посетители перемещаются по веб-сайту. Также аналитические файлы cookie могут использоваться для сбора данных о ваших интересах и отображения для вас актуальной рекламы (в том числе на других сайтах). Они работают посредством уникальной идентификации вашего браузера и устройства. Если вы не одобрите использование этих файлов cookie, информация о посещении Вами нашего Сайта не будет передаваться в аналитические сервисы.`,
      },
    ],
    additionalContent: [
      `4.5. Мы также хотим сообщить, что некоторые третьи лица могут размещать свои собственные файлы cookie на вашем устройстве. Это могут быть сторонние аналитические службы или другие внешние поставщики услуг, которые помогают нам анализировать трафик и поведение пользователей на нашем Сайте. Обработка файлов cookie третьими лицами осуществляется в соответствии с их собственными политиками конфиденциальности.`,
      `4.6. При обработке файлов cookie информация о вашем посещении Сайта может передаваться:`,
    ],
    companies: [
      `ООО «ЯНДЕКС» (адрес: 119021, город Москва, ул. Льва Толстого, д. 16);`,
      `ООО «Яндекс.Облако» (адрес: 119021, г. Москва, ул. Льва Толстого, д. 16, помещ. 528);`,
      `ООО «ВК» (адрес: 125167, г. Москва, вн.тер.г. Муниципальный Округ Хорошевский, пр-кт Ленинградский, д. 39, стр. 79).`,
    ],
  },
  {
    title: "5. Изменение настоящей политики",
    content: [
      `5.1. В Политику могут вноситься изменения для того, чтобы отразить возможные изменения в процессах Оператора использования файлов cookie. Актуальная политика публикуется на странице размещения настоящей Политики.`,
      `5.2. Дата последнего изменения и текущая версия указаны в начале настоящей Политики.`,
      `${companyConfig.name}`,
    ],
  },
  {
    title: "6. Реквизиты оператора",
    requisites: [
      { label: "ООО", value: companyConfig.name },
      { label: "ИНН", value: companyConfig.inn },
      { label: "КПП", value: companyConfig.kpp },
      { label: "ОГРН", value: companyConfig.ogrn },
      { label: "Р/С", value: companyConfig.bankAccount },
      { label: "БИК", value: companyConfig.bik },
      { label: "Юридический адрес", value: companyConfig.address },
      { label: "Почтовый адрес", value: companyConfig.address },
      { label: "Банк", value: companyConfig.bank },
    ],
  },
];

// Компонент для рендеринга текста с ссылками
const renderText = (text: string) => {
  // Ссылки вида <a href="...">...</a>
  const linkRegex = /<a\s+href="([^"]+)"[^>]*>([^<]+)<\/a>/g;
  
  // Email и телефон
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
  const phoneRegex = /(\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2})/g;

  let processedText = text;
  
  // Обработка HTML-ссылок
  const linkMatches: { index: number; end: number; href: string; content: string }[] = [];
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    linkMatches.push({
      index: match.index,
      end: match.index + match[0].length,
      href: match[1],
      content: match[2],
    });
  }

  // Обработка email и телефонов, если нет HTML-ссылок
  if (linkMatches.length === 0) {
    const parts = [];
    let lastIndex = 0;
    const allMatches: { index: number; end: number; text: string; type: string }[] = [];
    
    while ((match = emailRegex.exec(text)) !== null) {
      allMatches.push({ index: match.index, end: match.index + match[0].length, text: match[0], type: "email" });
    }
    while ((match = phoneRegex.exec(text)) !== null) {
      allMatches.push({ index: match.index, end: match.index + match[0].length, text: match[0], type: "phone" });
    }
    
    allMatches.sort((a, b) => a.index - b.index);
    
    allMatches.forEach((item, i) => {
      if (item.index > lastIndex) {
        parts.push(text.substring(lastIndex, item.index));
      }
      if (item.type === "email") {
        parts.push(
          <a key={i} href={`mailto:${item.text}`} className={s.link}>
            {item.text}
          </a>
        );
      } else if (item.type === "phone") {
        parts.push(
          <a key={i} href={`tel:${item.text.replace(/\s/g, "")}`} className={s.link}>
            {item.text}
          </a>
        );
      }
      lastIndex = item.end;
    });
    
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    return parts.length > 0 ? parts : text;
  }
  
  // Если есть HTML-ссылки, разбиваем текст на части
  const parts = [];
  let lastIndex = 0;
  
  linkMatches.forEach((item, i) => {
    if (item.index > lastIndex) {
      parts.push(text.substring(lastIndex, item.index));
    }
    parts.push(
      <a key={i} href={item.href} target="_blank" rel="noreferrer" className={s.link}>
        {item.content}
      </a>
    );
    lastIndex = item.end;
  });
  
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts;
};

export default function PoliticCookies() {
  return (
    <main className={s.page}>
      <div className="container">
        <div className={s.hero}>
          <span className={s.badge}>Версия 1.0 от 27.03.2026</span>
          <h1 className={`h1 ${s.tit}`}>Политика в отношении файлов cookie</h1>
          <p className={s.lead}>
            Документ определяет порядок использования файлов cookie на сайте
            {companyConfig.siteUrl}, а также правила управления ими со стороны пользователя.
          </p>
        </div>

        <div className={s.layout}>
          <aside className={s.sidebar}>
            <div className={s.sidebarInner}>
              <p className={s.sidebarTitle}>Содержание</p>
              <ul className={s.navList}>
                {sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index + 1}`} className={s.navLink}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className={s.content}>
            {sections.map((section, index) => (
              <section key={index} id={`section-${index + 1}`} className={s.section}>
                <h2 className="h2">{section.title}</h2>

                {section.content &&
                  section.content.map((item, i) => (
                    <p key={i} className={s.paragraph}>
                      {renderText(item)}
                    </p>
                  ))}

                {section.additionalContent &&
                  section.additionalContent.map((item, i) => (
                    <p key={i} className={s.paragraph}>
                      {renderText(item)}
                    </p>
                  ))}

                {section.browserLinks && (
                  <div className={s.group}>
                    <p className={s.groupTitle}>Инструкции по настройке браузеров</p>
                    <div className={s.linkList}>
                      {section.browserLinks.map((browser, i) => (
                        <a
                          key={i}
                          href={browser.href}
                          target="_blank"
                          rel="noreferrer"
                          className={s.externalLink}
                        >
                          {browser.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {section.cards && (
                  <div className={s.cards}>
                    {section.cards.map((card, ci) => (
                      <article key={ci} className={s.card}>
                        <p className={s.cardLabel}>{card.title}</p>
                        <p className={s.cardText}>{card.text}</p>
                      </article>
                    ))}
                  </div>
                )}

                {section.companies && (
                  <div className={s.group}>
                    <ul className={s.list}>
                      {section.companies.map((item, i) => (
                        <li key={i} className={s.listItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.requisites && (
                  <div className={s.group}>
                    <ul className={s.list}>
                      {section.requisites.map((item, i) => (
                        <li key={i} className={s.listItem}>
                          <strong>{item.label}:</strong> {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}