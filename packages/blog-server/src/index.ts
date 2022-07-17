import { server } from './server';

const HOST = 'localhost';
const PORT = 8080;

server
  .listen({
    host: HOST,
    port: PORT,
  })
  .then((address) => {
    console.log(`Server listening on ${address}`);
  })
  .catch((reason) => {
    console.error('Could not start server', reason);
    process.exit(1);
  });
