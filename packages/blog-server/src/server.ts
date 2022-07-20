import Fastify from 'fastify';
import { homeRouter } from './router';

const server = Fastify({});

server.register(homeRouter);

export { server };
