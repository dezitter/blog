import { getAllPosts } from './getAllPosts';
import { matchesSlug } from './matchesSlug';
import { PostNotFoundError } from '../../errors';
import type { Post, Slug } from '@dezitter/blog-shared';

export const findPostBySlug = (slug: Slug): Promise<Post> => {
  return getAllPosts().then((posts) => {
    const maybePost = posts.find(matchesSlug(slug));

    if (!maybePost) {
      throw new PostNotFoundError(slug);
    }

    return maybePost;
  });
};
