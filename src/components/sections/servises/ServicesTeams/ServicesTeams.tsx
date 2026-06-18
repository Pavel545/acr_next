import { Teams } from '@/types/services';
import s from './ServicesTeams.module.scss';


export default function ServicesTeams({ teams }: { teams: Teams }) {


    return (
        <section className={s.servicesTeams}>
                <div className="container">
                    <div className={s.header}>
                        <h2 className={`h2`}>Команда проекта</h2>
                        <p className={s.headerDescription}>Каждый из этапов создания проекта требует высокой экспертизы, поэтому для решения бизнес-задачи над созданием e-com платформы работает команда из 10-15 специалистов</p>
                    </div>

                    <div className={s.teams}>
                        {teams.items.map((item) => (
                            <div key={item.key} className={s.team}>
                                <span className={s.teamKey}>{item.key}</span>
                                <h3 className={s.teamRole}>{item.role}</h3>
                            </div>
                        ))}
                    </div>
                </div>
        </section>
    )
}