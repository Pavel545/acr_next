import { TextNode } from "@/types/blog";
import s from "./content.module.scss";
import { ReactNode } from "react";
import type { JSX } from "react";

function renderText(nodes: TextNode[]) {
    return nodes.map((node, i): ReactNode => {
        let el: ReactNode = node.text;

        if (node.marks?.some(m => m.type === "bold")) {
            el = <strong key={i}>{el}</strong>;
        }

        return <span key={i}>{el}</span>;
    });
}

function renderBlock(block: any) {
    switch (block.type) {
        case "heading": {
            const Tag = `h${block.attrs.level}` as keyof JSX.IntrinsicElements;

            return (
                <Tag className={` ${s.minTitle}`} key={block.id}>
                    {renderText(block.content)}
                </Tag>
            );
        }

        case "paragraph":
            return (
                <p className={s.text} key={block.id}>
                    {renderText(block.content)}
                </p>
            );

        case "bulletList":
            return (
                <ul className={s.list} key={block.id}>
                    {block.content.map((item: any) => (
                        <li key={item.id}>
                            {item.content.map((p: any) => (
                                <p key={p.id}>
                                    {renderText(p.content)}
                                </p>
                            ))}
                        </li>
                    ))}
                </ul>
            );

        case "callout":
            return (
                <div
                    key={block.id}
                    style={{
                        background: block.attrs.backgroundColor,
                        borderColor: block.attrs.borderColor,
                    }}
                >
                    {block.content.map((p: any, i: number) => (
                        <p key={i}>{renderText(p.content)}</p>
                    ))}
                </div>
            );

        case "divider":
            return <hr key={block.id} />;

        case "tags":
            return (
                <div key={block.id}>
                    {block.attrs.tags.map((tag: string) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            );

        default:
            return null;
    }
}

export default function BlogContent({ content }: any) {
    return (
        <section className={s.blogContent}>
            <div className={`container `}>
                <div className={s.content}>
                    {content.blocks.map((block: any) => renderBlock(block))}
                </div>
            </div>
        </section>
    );
}