import { ApiError } from './error';
import type { Post, Slug } from '@dezitter/blog-shared';

const baseUrl = 'http://localhost:8080';

export function fetchAll(): Promise<readonly Post[]> {
  const url = `${baseUrl}/api/posts`;
  return fetch(url).then<readonly Post[]>(toJson);
}

export function fetchOne(slug: Slug): Promise<Post> {
  const url = `${baseUrl}/api/posts/${slug}`;
  return fetch(url).then<Post>(toJson);
}

function toJson(response: Response) {
  if (response.ok === true) {
    return response.json();
  }

  return Promise.reject(new ApiError(response));
}
