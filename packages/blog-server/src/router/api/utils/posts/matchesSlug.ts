import type { Post, Slug } from '@dezitter/blog-shared';

export const matchesSlug = (slug: Slug) => (post: Post) => post.slug === slug;
