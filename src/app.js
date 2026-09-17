import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { openApiDocument } from './config/swagger.js';
import routes from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';

export const createApp = () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(express.json());
  app.get('/', (req, res) => res.redirect('/api/docs'));
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
  app.use('/api', routes);
  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
};
