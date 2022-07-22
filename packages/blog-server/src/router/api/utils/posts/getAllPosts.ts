import type { Post } from '@dezitter/blog-shared';

export const getAllPosts = (): Promise<readonly Post[]> => {
  return Promise.resolve([]);
};
