const { HTTP_STATUS, ERROR_MESSAGES, USER_ROLES } = require("../constants");
const { errorResponse } = require("../utils/responseHelper");
const { verifyAccessToken } = require("../utils/jwtHelper");
const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");

/**
 * Protect routes - Verify JWT token
 */
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if token exists in header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return errorResponse(
      res,
      ERROR_MESSAGES.TOKEN_MISSING,
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  try {
    // Verify token
    const decoded = verifyAccessToken(token);

    // Get user from token
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return errorResponse(
        res,
        ERROR_MESSAGES.USER_NOT_FOUND,
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    if (!user.isActive) {
      return errorResponse(
        res,
        "Your account has been deactivated",
        HTTP_STATUS.FORBIDDEN
      );
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    return errorResponse(
      res,
      ERROR_MESSAGES.TOKEN_INVALID,
      HTTP_STATUS.UNAUTHORIZED
    );
  }
});

/**
 * Authorize roles
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return errorResponse(
        res,
        ERROR_MESSAGES.UNAUTHORIZED,
        HTTP_STATUS.FORBIDDEN
      );
    }
    next();
  };
};

/**
 * Admin only middleware
 */
const adminOnly = authorize(USER_ROLES.ADMIN);

module.exports = {
  protect,
  authorize,
  adminOnly,
};
