const Skill = require("../models/Skill");
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
 * @desc    Get all skills
 * @route   GET /api/skills
 * @access  Public
 */
const getAllSkills = asyncHandler(async (req, res) => {
  const {
    page = PAGINATION.DEFAULT_PAGE,
    limit = PAGINATION.DEFAULT_LIMIT,
    category,
    featured,
    search,
  } = req.query;

  // Build query
  const query = { isActive: true };

  if (category) query.category = category;
  if (featured) query.featured = featured === "true";
  if (search) {
    query.$text = { $search: search };
  }

  // Execute query with pagination
  const skills = await Skill.find(query)
    .sort({ category: 1, order: -1, name: 1 })
    .limit(Math.min(parseInt(limit), PAGINATION.MAX_LIMIT))
    .skip((parseInt(page) - 1) * parseInt(limit))
    .populate("createdBy", "name email");

  const total = await Skill.countDocuments(query);

  paginatedResponse(res, skills, page, limit, total, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Get skills grouped by category
 * @route   GET /api/skills/grouped
 * @access  Public
 */
const getSkillsGroupedByCategory = asyncHandler(async (req, res) => {
  const skills = await Skill.find({ isActive: true }).sort({
    category: 1,
    order: -1,
    name: 1,
  });

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  successResponse(res, groupedSkills, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Get single skill
 * @route   GET /api/skills/:id
 * @access  Public
 */
const getSkillById = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id).populate(
    "createdBy",
    "name email"
  );

  if (!skill || !skill.isActive) {
    return errorResponse(
      res,
      ERROR_MESSAGES.SKILL_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  successResponse(res, skill, SUCCESS_MESSAGES.FETCHED);
});

/**
 * @desc    Create new skill
 * @route   POST /api/skills
 * @access  Private/Admin
 */
const createSkill = asyncHandler(async (req, res) => {
  const skillData = {
    ...req.body,
    createdBy: req.user.id,
  };

  const skill = await Skill.create(skillData);

  successResponse(res, skill, SUCCESS_MESSAGES.CREATED, HTTP_STATUS.CREATED);
});

/**
 * @desc    Update skill
 * @route   PUT /api/skills/:id
 * @access  Private/Admin
 */
const updateSkill = asyncHandler(async (req, res) => {
  let skill = await Skill.findById(req.params.id);

  if (!skill) {
    return errorResponse(
      res,
      ERROR_MESSAGES.SKILL_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  successResponse(res, skill, SUCCESS_MESSAGES.UPDATED);
});

/**
 * @desc    Delete skill
 * @route   DELETE /api/skills/:id
 * @access  Private/Admin
 */
const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findById(req.params.id);

  if (!skill) {
    return errorResponse(
      res,
      ERROR_MESSAGES.SKILL_NOT_FOUND,
      HTTP_STATUS.NOT_FOUND
    );
  }

  // Soft delete
  skill.isActive = false;
  await skill.save();

  successResponse(res, null, SUCCESS_MESSAGES.DELETED);
});

/**
 * @desc    Get featured skills
 * @route   GET /api/skills/featured
 * @access  Public
 */
const getFeaturedSkills = asyncHandler(async (req, res) => {
  const skills = await Skill.find({
    featured: true,
    isActive: true,
  })
    .sort({ order: -1, proficiencyPercentage: -1 })
    .limit(10);

  successResponse(res, skills, SUCCESS_MESSAGES.FETCHED);
});

module.exports = {
  getAllSkills,
  getSkillsGroupedByCategory,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getFeaturedSkills,
};
