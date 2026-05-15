import { PostCard } from "@/types/blog";
import s from "./BlogCard.module.scss";
import Link from "next/link";


export default function BlogCard(props: PostCard) {
    return (
        <Link href={`/blog/${props.slug}`}>
        <article className={s.blogCard}>
            <div className={s.blogCardHeader}>
                <div className={s.info}>
                    <span className={s.type}>
                        {props.type}
                    </span>

                    <div className={s.time}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.584 5.74992V11.5833L8.66732 13.3333M22.084 11.5833C22.084 17.3823 17.383 22.0833 11.584 22.0833C5.785 22.0833 1.08398 17.3823 1.08398 11.5833C1.08398 5.78427 5.785 1.08325 11.584 1.08325C17.383 1.08325 22.084 5.78427 22.084 11.5833Z" stroke="#DCFF5C" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span>
                            {props.time}
                        </span>
                    </div>
                </div>
                <div className={s.blogCardImg}>
                    <img src={props.img} alt={props.title} />
                </div>
            </div>
            <div className={s.blogCardContent}>
                <div className={s.date}>
                    {props.date}
                </div>

                <h3 className={s.title}>
                    {props.title}
                </h3>

                <p className={s.textMini}>
                    {props.textMini}
                </p>
            </div>
        </article></Link>
    )
}