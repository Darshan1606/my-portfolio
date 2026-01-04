const { HTTP_STATUS, ERROR_MESSAGES } = require("../constants");

/**
 * Not Found Middleware
 */
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(HTTP_STATUS.NOT_FOUND);
  next(error);
};

/**
 * Error Handler Middleware
 */
const errorHandler = (err, req, res, next) => {
  let statusCode =
    res.statusCode === 200 ? HTTP_STATUS.INTERNAL_SERVER_ERROR : res.statusCode;
  let message = err.message || ERROR_MESSAGES.SERVER_ERROR;

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    message = "Invalid ID format";
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    statusCode = HTTP_STATUS.CONFLICT;
    const field = Object.keys(err.keyValue)[0];
    message = `${
      field.charAt(0).toUpperCase() + field.slice(1)
    } already exists`;
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    const errors = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));

    return res.status(statusCode).json({
      success: false,
      message: ERROR_MESSAGES.VALIDATION_ERROR,
      errors,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    message = ERROR_MESSAGES.TOKEN_INVALID;
  }

  if (err.name === "TokenExpiredError") {
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    message = "Token has expired";
  }

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
