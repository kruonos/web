import Fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { initTRPC } from '@trpc/server';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';

const t = initTRPC.create();

const appRouter = t.router({
  ping: t.procedure.query(() => 'pong'),
});

export type AppRouter = typeof appRouter;

export async function createServer() {
  const server = Fastify({ logger: true });
  await server.register(cors, { origin: true });
  await server.register(helmet);
  await server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: appRouter, createContext() { return {}; } },
  });
  server.get('/', async () => ({ ok: true }));
  return server;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  createServer().then(server => {
    server.listen({ port: 3001, host: '0.0.0.0' });
  });
}
