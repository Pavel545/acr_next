import s from './CooperationCard.module.scss';


export default function CooperationCard({
  title,
  count,
  text,
  icons,
}: {
  title: string;
  count: string;
  text: string[];
  icons: string;
}) {
  return (
    <div className={s.cooperationCard}>
      <div className={s.cooperationCardInner}>
        <div className={s.cooperationCardFront}>
          <div className={s.cooperationCard__count}>{count}</div>
          <img src={icons} alt="icon" className={s.cooperationCard__icon} />
          <h3 className={s.cooperationCard__title}>{title}</h3>
        </div>

        <div className={s.cooperationCardBack}>
          <h3 className={s.cooperationCardBack__title}>{title}</h3>
          {text.map((item, index) => (
            <p key={index} className={s.cooperationCardBack__text}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}