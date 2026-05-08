// types/Post.ts
export interface Post {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: RenderedField;
  content: RenderedFieldWithProtection;
  excerpt: RenderedFieldWithProtection;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  class_list: string[];
  _embedded?: EmbeddedData;
}

export interface RenderedField {
  rendered: string;
}

export interface RenderedFieldWithProtection extends RenderedField {
  protected: boolean;
}

export interface EmbeddedData {
  author?: EmbeddedAuthor[];
  replies?: EmbeddedComment[][];
  "wp:featuredmedia"?: EmbeddedMedia[];
}

export interface EmbeddedAuthor {
  id: number;
  name: string;
  url: string;
  link: string;
  slug: string;
  avatar_urls: {
    [size: string]: string;
  };
}

export interface EmbeddedComment {
  id: number;
  author: number;
  author_name: string;
  author_url: string;
  date: string;
  content: RenderedField;
  link: string;
  author_avatar_urls: {
    [size: string]: string;
  };
}

export interface EmbeddedMedia {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
  title: RenderedField;
  caption: RenderedField;
  source_url?: string;
  alt_text: string;
  media_type: string;
  mime_type: string;
}
