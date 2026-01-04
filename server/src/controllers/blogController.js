const Blog = require("../models/Blog");
const {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  PAGINATION,
  BLOG_STATUS,
} = require("../constants");
const {
  successResponse,
  errorResponse,
  paginatedResponse,
} = require("../utils/responseHelper");
const asyncHandler = require("../utils/asyncHandler");

/**
 * @desc    Get all blogs
 * @route   GET /api/blogs
 * @access  Public
 */
const getAllBlogs = asyncHandler(async (req, res) => {
  const {
    page = PAGINATION.DEFAULT_PAGE,
    limit = PAGINATION.DEFAULT_LIMIT,
    status = BLOG_STATUS.PUBLISHED,
    category,
    tag,
    featured,
    search,
  } = req.query;

  // Build query
  const query = { isActive: true };

  // Public users only see published blogs
  if (!req.user || req.user.role !== "admin") {
    query.status = BLOG_STATUS.PUBLISHED;
  } else if (status) {
    query.status = status;
  }

  if (category) query.category = category;
  if (tag) query.tags = tag;
  if (featured) query.featured = featured === "true";
  if (search) {
    query.$text = { $search: search };
  }

  // Execute query with pagination
  const blogs = await Blog.find(query)
    .sort({ publishedAt: -1, createdAt: -1 })
    .limit(Math.min(parseInt(limit), PAGINATION.MAX_LIMIT))
    .skip((parseInt(page) - 1) * parseInt(limit))
    .populate("author", "name email");

  const total = await Blog.countDocuments(query);

  paginatedResponse(res, blogs, page, limit, total, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Get single blog by ID
 * @route   GET /api/blogs/:id
 * @access  Public
 */
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate(
    "author",
    "name email"
  );

  if (!blog || !blog.isActive) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Only show published blogs to public
  if (
    blog.status !== BLOG_STATUS.PUBLISHED &&
    (!req.user || req.user.role !== "admin")
  ) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Increment views
  blog.views += 1;
  await blog.save();

  successResponse(res, blog, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Get blog by slug
 * @route   GET /api/blogs/slug/:slug
 * @access  Public
 */
const getBlogBySlug = asyncHandler(async (req, res) => {
  const blog = await Blog.findOne({
    slug: req.params.slug,
    isActive: true,
  }).populate("author", "name email");

  if (!blog) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Only show published blogs to public
  if (
    blog.status !== BLOG_STATUS.PUBLISHED &&
    (!req.user || req.user.role !== "admin")
  ) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Increment views
  blog.views += 1;
  await blog.save();

  successResponse(res, blog, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Create new blog
 * @route   POST /api/blogs
 * @access  Private/Admin
 */
const createBlog = asyncHandler(async (req, res) => {
  const blogData = {
    ...req.body,
    author: req.user.id,
  };

  const blog = await Blog.create(blogData);

  successResponse(res, blog, SUCCESS_MESSAGES.CREATED, HTTP_STATUS.CREATED);
});

/**
 * @desc    Update blog
 * @route   PUT /api/blogs/:id
 * @access  Private/Admin
 */
const updateBlog = asyncHandler(async (req, res) => {
  let blog = await Blog.findById(req.params.id);

  if (!blog) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  successResponse(res, blog, SUCCESS_MESSAGES.UPDATED);
});

/**
 * @desc    Delete blog
 * @route   DELETE /api/blogs/:id
 * @access  Private/Admin
 */
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    return errorResponse(
      res,
      ERROR_MESSAGES.BLOG_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Soft delete
  blog.isActive = false;
  await blog.save();

  successResponse(res, null, SUCCESS_MESSAGES.DELETED);
});

/**
 * @desc    Get featured blogs
 * @route   GET /api/blogs/featured
 * @access  Public
 */
const getFeaturedBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({
    featured: true,
    isActive: true,
    status: BLOG_STATUS.PUBLISHED,
  })
    .sort({ publishedAt: -1 })
    .limit(6)
    .populate("author", "name");

  successResponse(res, blogs, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Get all tags
 * @route   GET /api/blogs/tags
 * @access  Public
 */
const getAllTags = asyncHandler(async (req, res) => {
  const tags = await Blog.distinct("tags", {
    isActive: true,
    status: BLOG_STATUS.PUBLISHED,
  });

  successResponse(res, tags, SUCCESS_MESSAGES.FETCHED);
});

module.exports = {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getFeaturedBlogs,
  getAllTags,
};
