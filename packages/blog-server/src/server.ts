import Fastify from 'fastify';

const server = Fastify({});

server.get('/', (_request, reply) => {
  reply.type('text/html').send(/* HTML */ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WIP</title>
      </head>
      <body>
        <div id="app">
          <p>WORK IN PROGESS</p>
        </div>
      </body>
    </html>
  `);
});

export { server };
