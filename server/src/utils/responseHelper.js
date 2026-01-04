const { HTTP_STATUS } = require("../constants");

/**
 * Success Response Helper
 */
const successResponse = (
  res,
  data = null,
  message = "Success",
  statusCode = HTTP_STATUS.OK
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Error Response Helper
 */
const errorResponse = (
  res,
  message = "Error",
  statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
  errors = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Paginated Response Helper
 */
const paginatedResponse = (
  res,
  data,
  page,
  limit,
  total,
  message = "Success"
) => {
  const totalPages = Math.ceil(total / limit);

  return res.status(HTTP_STATUS.OK).json({
    success: true,
    message,
    data,
    pagination: {
      currentPage: parseInt(page),
      totalPages,
      totalItems: total,
      itemsPerPage: parseInt(limit),
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  successResponse,
  errorResponse,
  paginatedResponse,
};
