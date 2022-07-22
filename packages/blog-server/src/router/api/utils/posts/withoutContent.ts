import type { BasePost, Post } from '@dezitter/blog-shared';

export const withoutContent = (post: Post): BasePost => {
  const { html, ...rest } = post;
  return rest;
};
