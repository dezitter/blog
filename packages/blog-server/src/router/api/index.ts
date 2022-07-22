import { findPostBySlug, getAllPosts, withoutContent } from './utils/posts';
import type { FastifyPluginCallback } from 'fastify';
import type { Slug } from '@dezitter/blog-shared';
import type { ApiError } from './errors';

export const apiRouter: FastifyPluginCallback = (
  server,
  _options,
  done,
): void => {
  server.get('/api/posts', async (_request, reply) => {
    const fullPosts = await getAllPosts();
    const posts = fullPosts.map(withoutContent);

    return reply.status(200).type('application/json').send(posts);
  });

  type GetPostRoute = { Params: { slug: Slug } };

  server.get<GetPostRoute>('/api/posts/:slug', async (request, reply) => {
    const { slug } = request.params;
    const post = await findPostBySlug(slug);

    return reply.status(200).type('application/json').send(post);
  });

  server.setErrorHandler<ApiError>((error, _request, reply) => {
    reply.status(200).type('application/json').send({ error: error.message });
  });

  done();
};
