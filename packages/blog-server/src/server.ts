import Fastify from 'fastify';
import { adminRouter } from './router';
import { homeRouter } from './router';

const server = Fastify({});

server.register(adminRouter);
server.register(homeRouter);

export { server };
