export const openApiDocument = {
  openapi: '3.0.3',
  info: {
    title: 'Gestor de Portfolio Financiero API',
    version: '1.0.0',
    description: 'API principal para la gestión de usuarios, transacciones y análisis de portafolio cripto.'
  },
  servers: [
    {
      url: '/'
    }
  ],
  paths: {
    '/api/status/health': {
      get: {
        summary: 'Consultar el estado de salud de la API',
        tags: ['Estado'],
        responses: {
          200: {
            description: 'El servidor está operativo.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'OK' },
                    service: { type: 'string', example: 'Portfolio Service API' },
                    uptime: { type: 'string', example: '120s' },
                    timestamp: { type: 'string', example: '2026-09-16T20:30:00.000Z' }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
