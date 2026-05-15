// app/not-found.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 - Страница не найдена',
    description: 'Запрашиваемая страница не существует на нашем сайте',
    robots: {
        index: false,
        follow: true,
    },
};

export default function NotFound() {
    return (
       <main style={{background: "var(--svetlyy)"}}>
         <section className='erPage'>
                <div className="erPageContainer">
                    <h1 className="h1">Упс! Мы не смогли найти <br /> такую страницу</h1>
                    <Link
                        href="/"
                        className="butt"
                    >
                        Вернуться на главную
                    </Link>

                    <img src="/404.svg" alt="Страница не найдена" className='err404' />
                </div>
        </section>
       </main>
    );
}