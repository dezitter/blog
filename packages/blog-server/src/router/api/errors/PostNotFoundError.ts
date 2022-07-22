import { ApiError } from './ApiError';
import type { Slug } from '@dezitter/blog-shared';

export class PostNotFoundError extends ApiError {
  private static code: string = 'post_not_found';

  constructor(public slug: Slug) {
    super(`Could not find post with slug "${slug}"`, PostNotFoundError.code);
  }
}
