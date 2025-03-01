const logger = require("../utils/logger");

// 404 Not Found Middleware
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  
  logger.error(`[${req.method}] ${req.originalUrl} - ${err.message}`);

  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack, // Hide stack in production
  });
};

module.exports = { notFound, errorHandler };
