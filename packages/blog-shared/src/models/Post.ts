import type { Brand } from './Brand';

export type Slug = Brand<string, '__slug__'>;
export type DateISO = Brand<string, '__date_iso__'>;
export type Markdown = Brand<string, '__markdown__'>;
export type Html = Brand<string, '__html__'>;

export type BasePost = Readonly<{
  slug: Slug;
  title: string;
  excerpt: string;
  publicationDate: DateISO;
  tags: readonly string[];
}>;

export type RawPost = BasePost & Readonly<{ markdown: Markdown }>;
export type Post = BasePost & Readonly<{ html: Html }>;
