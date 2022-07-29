import Fastify from 'fastify';
import FastifyCors from '@fastify/cors';
import { adminRouter, apiRouter, homeRouter } from './router';

const server = Fastify({});

server.register(FastifyCors);
server.register(adminRouter);
server.register(apiRouter);
server.register(homeRouter);

export { server };
