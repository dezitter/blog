import Fastify from 'fastify';
import { adminRouter, apiRouter, homeRouter } from './router';

const server = Fastify({});

server.register(adminRouter);
server.register(apiRouter);
server.register(homeRouter);

export { server };
