import BlogContent from "@/components/sections/PageBlogs/content/content";
import HeroBlog from "@/components/sections/PageBlogs/hero/heroBlog";
import posts from "@/data/blog.json";
import { mapPostToCard, Post } from "@/types/blog";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }: any) {
    const resolvedParams = await params;

    const slug = resolvedParams.slug;


    const post = posts.find((p) => p.meta.slug === slug);


    if (!post) {
        notFound();
    }
    const typedPosts = post as Post;
    const blogPosts = mapPostToCard(typedPosts)
    return (
        <main>

            <HeroBlog  {...blogPosts} />

            <BlogContent  {...post}/>
        </main>)
}