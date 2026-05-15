// --- META ---
export interface PostMeta {
  id: string;
  slug: string;
  type: string;
  title: string;
  textMini: string;
  preview_image: string;
  alternative_types: string[];
  primary_type: string;
  published_at: string; // ISO date
  updated_at: string;   // ISO date
  time: string;
  views_count: number;
  is_pinned: boolean;
}

// --- SEO ---
export interface PostSEO {
  title: string;
  description: string;
  keywords: string[];
  og_image: string;
}

// --- CONTENT (Editor-like blocks) ---
export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | BulletListBlock
  | CalloutBlock
  | DividerBlock
  | TagsBlock;

// --- TEXT NODE ---
export interface TextNode {
  text: string;
  marks?: Mark[];
}

export type Mark = {
  type: "bold" | "italic" | "underline" | string;
};

// --- BLOCKS ---
export interface HeadingBlock {
  id: string;
  type: "heading";
  attrs: {
    level: number;
  };
  content: TextNode[];
}

export interface ParagraphBlock {
  id: string;
  type: "paragraph";
  content: TextNode[];
}

export interface BulletListBlock {
  id: string;
  type: "bulletList";
  content: ListItem[];
}

export interface ListItem {
  id: string;
  type: "listItem";
  content: ParagraphBlock[];
}

export interface CalloutBlock {
  id: string;
  type: "callout";
  attrs: {
    icon?: string;
    icon_emoji?: string;
    backgroundColor?: string;
    borderColor?: string;
  };
  content: ParagraphBlock[];
}

export interface DividerBlock {
  id: string;
  type: "divider";
  attrs: {
    style: string;
    color: string;
  };
  content: [];
}

export interface TagsBlock {
  id: string;
  type: "tags";
  attrs: {
    tags: string[];
  };
  content: [];
}

// --- CONTENT ROOT ---
export interface PostContent {
  version: string;
  blocks: ContentBlock[];
}

// --- FOOTER ---
export interface PostFooter {
  show_share_buttons: boolean;
  show_author: boolean;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  next_article_slug: string;
  previous_article_slug: string;
}

// --- STATS ---
export interface PostStatistics {
  likes: number;
  shares: number;
  bookmarks: number;
  comments_count: number;
}

// --- ROOT POST ---
export interface Post {
  meta: PostMeta;
  seo: PostSEO;
  content: PostContent;
  footer: PostFooter;
  statistics: PostStatistics;
}

export type PostCardType = "Статья" | "Новость" | "Блог" | string;

export interface PostCard {
  id: number | string;
  type: PostCardType;
  date: string;
  slug:string;
  time: string;
  title: string;
  textMini: string;
  img: string;
}


export const mapPostToCard = (post: Post): PostCard => {
  return {
    id: post.meta.id,
    type: post.meta.type,
    date: new Date(post.meta.published_at).toLocaleDateString("ru-RU"),
    time: post.meta.time,
    slug: post.meta.slug,
    title: post.meta.title,
    textMini: post.meta.textMini,
    img: post.meta.preview_image,
  };
};


