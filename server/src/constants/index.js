// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

// User Roles
const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
};

// Skill Categories
const SKILL_CATEGORIES = {
  FRONTEND: "frontend",
  BACKEND: "backend",
  DATABASE: "database",
  DEVOPS: "devops",
  TOOLS: "tools",
  OTHER: "other",
};

// Skill Proficiency Levels
const PROFICIENCY_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
  EXPERT: "expert",
};

// Project Status
const PROJECT_STATUS = {
  COMPLETED: "completed",
  IN_PROGRESS: "in-progress",
  PLANNED: "planned",
};

// Blog Status
const BLOG_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
};

// Allowed Image Types
const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
];

// Max File Sizes (in bytes)
const MAX_FILE_SIZES = {
  IMAGE: 5 * 1024 * 1024, // 5MB
  DOCUMENT: 10 * 1024 * 1024, // 10MB
};

// Pagination
const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// Error Messages
const ERROR_MESSAGES = {
  // Auth
  INVALID_CREDENTIALS: "Invalid email or password",
  TOKEN_MISSING: "No token provided",
  TOKEN_INVALID: "Invalid or expired token",
  UNAUTHORIZED: "You are not authorized to perform this action",

  // General
  NOT_FOUND: "Resource not found",
  ALREADY_EXISTS: "Resource already exists",
  VALIDATION_ERROR: "Validation error",
  SERVER_ERROR: "Internal server error",

  // Specific
  PROJECT_NOT_FOUND: "Project not found",
  BLOG_NOT_FOUND: "Blog post not found",
  SKILL_NOT_FOUND: "Skill not found",
  USER_NOT_FOUND: "User not found",

  // File Upload
  FILE_TOO_LARGE: "File size exceeds maximum limit",
  INVALID_FILE_TYPE: "Invalid file type",
};

// Success Messages
const SUCCESS_MESSAGES = {
  // Auth
  LOGIN_SUCCESS: "Login successful",
  LOGOUT_SUCCESS: "Logout successful",
  REGISTER_SUCCESS: "Registration successful",

  // CRUD
  CREATED: "Created successfully",
  UPDATED: "Updated successfully",
  DELETED: "Deleted successfully",
  FETCHED: "Fetched successfully",
};

module.exports = {
  HTTP_STATUS,
  USER_ROLES,
  SKILL_CATEGORIES,
  PROFICIENCY_LEVELS,
  PROJECT_STATUS,
  BLOG_STATUS,
  ALLOWED_IMAGE_TYPES,
  MAX_FILE_SIZES,
  PAGINATION,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
};
