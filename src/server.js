import { createApp } from './app.js';

const PORT = Number(process.env.PORT || 3000);

if (!Number.isInteger(PORT) || PORT <= 0 || PORT > 65535) {
  throw new Error('PORT debe ser un número entero válido entre 1 y 65535');
}

const app = createApp();

app.listen(PORT, () => {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    level: 'info',
    message: 'Servidor iniciado correctamente',
    port: PORT,
    docsUrl: `http://localhost:${PORT}/api/docs`
  }));
});
