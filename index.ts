import fastify, {
  FastifyInstance,
  FastifyServerOptions,
} from 'fastify'
import { FastifyListenOptions } from 'fastify/types/instance'
import prismaPlugin from './plugins/prisma'

export function createServer(opts: FastifyServerOptions = {}): FastifyInstance {
  const server = fastify(opts)
  server.register(prismaPlugin)
  return server
}

export async function startServer() {
  const server = createServer({
    logger: {
      level: 'info',
    },
    disableRequestLogging: process.env.ENABLE_REQUEST_LOGGING !== 'true',
  })

  try {
    const port = process.env.PORT ?? 3000
    await server.listen(<FastifyListenOptions>{
      port
    });
    console.log(`App is starting on port ${port}`);
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

startServer();