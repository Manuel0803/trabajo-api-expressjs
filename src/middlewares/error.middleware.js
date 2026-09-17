export const notFoundHandler = (req, res) => {
  res.status(404).json({
    error: `Ruta no encontrada: ${req.method} ${req.originalUrl}`
  });
};

export const errorHandler = (err, req, res, next) => {

  if (res.headersSent) {
    return next(err);
  }
  const status = err.status || err.statusCode || 500;
  const safeStatus = status >= 400 && status < 600 ? status : 500;

  if (safeStatus >= 500) {
    console.error(err);
  }

  res.status(safeStatus).json({
    error: safeStatus >= 500 ? 'Error interno del servidor' : err.message
  });
};