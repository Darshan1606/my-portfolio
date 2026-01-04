const Project = require("../models/Project");
const {
  HTTP_STATUS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  PAGINATION,
} = require("../constants");
const {
  successResponse,
  errorResponse,
  paginatedResponse,
} = require("../utils/responseHelper");
const asyncHandler = require("../utils/asyncHandler");

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
const getAllProjects = asyncHandler(async (req, res) => {
  const {
    page = PAGINATION.DEFAULT_PAGE,
    limit = PAGINATION.DEFAULT_LIMIT,
    status,
    featured,
    search,
  } = req.query;

  // Build query
  const query = { isActive: true };

  if (status) query.status = status;
  if (featured) query.featured = featured === "true";
  if (search) {
    query.$text = { $search: search };
  }

  // Execute query with pagination
  const projects = await Project.find(query)
    .sort({ featured: -1, order: -1, createdAt: -1 })
    .limit(Math.min(parseInt(limit), PAGINATION.MAX_LIMIT))
    .skip((parseInt(page) - 1) * parseInt(limit))
    .populate("createdBy", "name email");

  const total = await Project.countDocuments(query);

  paginatedResponse(
    res,
    projects,
    page,
    limit,
    total,
    SUCCESS_MESSAGES.FETCHED
  );
});

/**
 * @desc    Get single project
 * @route   GET /api/projects/:id
 * @access  Public
 */
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id).populate(
    "createdBy",
    "name email"
  );

  if (!project || !project.isActive) {
    return errorResponse(
      res,
      ERROR_MESSAGES.PROJECT_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  successResponse(res, project, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Create new project
 * @route   POST /api/projects
 * @access  Private/Admin
 */
const createProject = asyncHandler(async (req, res) => {
  const projectData = {
    ...req.body,
    createdBy: req.user.id,
  };

  const project = await Project.create(projectData);

  successResponse(res, project, SUCCESS_MESSAGES.CREATED, HTTP_STATUS.CREATED);
});

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 * @access  Private/Admin
 */
const updateProject = asyncHandler(async (req, res) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return errorResponse(
      res,
      ERROR_MESSAGES.PROJECT_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  successResponse(res, project, SUCCESS_MESSAGES.UPDATED);
});

/**
 * @desc    Delete project
 * @route   DELETE /api/projects/:id
 * @access  Private/Admin
 */
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return errorResponse(
      res,
      ERROR_MESSAGES.PROJECT_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Soft delete
  project.isActive = false;
  await project.save();

  // For hard delete, use: await project.deleteOne();

  successResponse(res, null, SUCCESS_MESSAGES.DELETED);
});

/**
 * @desc    Get featured projects
 * @route   GET /api/projects/featured
 * @access  Public
 */
const getFeaturedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({
    featured: true,
    isActive: true,
  })
    .sort({ order: -1, createdAt: -1 })
    .limit(6);

  successResponse(res, projects, SUCCESS_MESSAGES.FETCHED);
});

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects,
};
