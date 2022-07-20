import type { FastifyPluginCallback } from 'fastify';

export const adminRouter: FastifyPluginCallback = (
  server,
  _options,
  done,
): void => {
  server.get('/admin/health', (_request, reply) => {
    reply.status(200).type('text/plain').send('OK');
  });

  done();
};
