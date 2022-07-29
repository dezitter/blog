import type { Slug } from '@dezitter/blog-shared';

type WithSlug = { slug: Slug };
type WithSlugProperty = { slug: unknown };

export const hasSlug = (value: unknown): value is WithSlug =>
  typeof value === 'object' &&
  value !== null &&
  'slug' in value &&
  typeof (value as WithSlugProperty).slug === 'string';
