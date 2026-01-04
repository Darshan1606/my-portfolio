const { HTTP_STATUS, ERROR_MESSAGES } = require("../constants");
const { errorResponse } = require("../utils/responseHelper");

/**
 * Validation Middleware
 * Validates request body against a Joi schema
 */
const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false, // Return all errors, not just the first one
      stripUnknown: true, // Remove unknown fields
    });

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message,
      }));

      return errorResponse(
        res,
        ERROR_MESSAGES.VALIDATION_ERROR,
        HTTP_STATUS.BAD_REQUEST,
        errors
      );
    }

    // Replace req.body with validated value
    req.body = value;
    next();
  };
};

module.exports = validate;
