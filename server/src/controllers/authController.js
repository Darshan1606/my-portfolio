const User = require("../models/User");
const {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
} = require("../constants");
const { successResponse, errorResponse } = require("../utils/responseHelper");
const { generateTokenPair, verifyRefreshToken } = require("../utils/jwtHelper");
const asyncHandler = require("../utils/asyncHandler");

/**
 * @desc    Register new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return errorResponse(
      res,
      "User already exists with this email",
      HTTP_STATUS.CONFLICT
    );
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
  });

  // Generate tokens
  const tokens = generateTokenPair(user._id);

  successResponse(
    res,
    {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      ...tokens,
    },
    SUCCESS_MESSAGES.REGISTER_SUCCESS,
    HTTP_STATUS.CREATED
  );
});

/**
 * @desc    Login user
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user and include password field
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return errorResponse(
      res,
      ERROR_MESSAGES.INVALID_CREDENTIALS,
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  // Check if user is active
  if (!user.isActive) {
    return errorResponse(
      res,
      "Your account has been deactivated",
      HTTP_STATUS.FORBIDDEN
    );
  }

  // Check password
  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return errorResponse(
      res,
      ERROR_MESSAGES.INVALID_CREDENTIALS,
      HTTP_STATUS.UNAUTHORIZED
    );
  }

  // Update last login
  user.lastLogin = new Date();
  await user.save();

  // Generate tokens
  const tokens = generateTokenPair(user._id);

  successResponse(
    res,
    {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      ...tokens,
    },
    SUCCESS_MESSAGES.LOGIN_SUCCESS
  );
});

/**
 * @desc    Refresh access token
 * @route   POST /api/auth/refresh-token
 * @access  Public
 */
const refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken: token } = req.body;

  try {
    // Verify refresh token
    const decoded = verifyRefreshToken(token);

    // Check if user exists
    const user = await User.findById(decoded.id);
    if (!user || !user.isActive) {
      return errorResponse(
        res,
        ERROR_MESSAGES.TOKEN_INVALID,
        HTTP_STATUS.UNAUTHORIZED
      );
    }

    // Generate new token pair
    const tokens = generateTokenPair(user._id);

    successResponse(res, tokens, "Token refreshed successfully");
  } catch (error) {
    return errorResponse(
      res,
      ERROR_MESSAGES.TOKEN_INVALID,
      HTTP_STATUS.UNAUTHORIZED
    );
  }
});

/**
 * @desc    Get current user profile
 * @route   GET /api/auth/me
 * @access  Private
 */
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  successResponse(res, user, "Profile fetched successfully");
});

/**
 * @desc    Logout user
 * @route   POST /api/auth/logout
 * @access  Private
 */
const logout = asyncHandler(async (req, res) => {
  // Note: In a JWT-based system, logout is typically handled client-side
  // by removing the token. Server-side, you might maintain a blacklist.

  successResponse(res, null, SUCCESS_MESSAGES.LOGOUT_SUCCESS);
});

module.exports = {
  register,
  login,
  refreshToken,
  getMe,
  logout,
};
