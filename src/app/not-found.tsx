// app/not-found.tsx
import { Metadata } from 'next';
import Image from 'next/image';
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
        <main style={{ background: "var(--svetlyy)" }}>
            <section className='erPage'>
                <div className="container erPageContainer">
                    <Image src="/404.png" width={1341} height={410} alt="Страница не найдена" className='err404' />

                    <h1 className="h1">кажется не та <br /> галактика</h1>
                    <Link
                        href="/"
                        className="butt"
                    >
                        Вернуться на главную
                    </Link>

                </div>
            </section>
        </main>
    );
}