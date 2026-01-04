const Joi = require("joi");
const { PROJECT_STATUS } = require("../constants");

const createProjectValidator = Joi.object({
  title: Joi.string().min(3).max(100).required().messages({
    "string.empty": "Project title is required",
    "string.min": "Title must be at least 3 characters",
    "string.max": "Title cannot exceed 100 characters",
  }),
  description: Joi.string().min(10).max(1000).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 10 characters",
    "string.max": "Description cannot exceed 1000 characters",
  }),
  shortDescription: Joi.string().max(200).optional().allow("").messages({
    "string.max": "Short description cannot exceed 200 characters",
  }),
  image: Joi.string().uri().optional().allow(null, ""),
  technologies: Joi.array().items(Joi.string().trim()).optional(),
  liveUrl: Joi.string().uri().optional().allow(null, ""),
  githubUrl: Joi.string().uri().optional().allow(null, ""),
  status: Joi.string()
    .valid(...Object.values(PROJECT_STATUS))
    .optional(),
  featured: Joi.boolean().optional(),
  order: Joi.number().integer().min(0).optional(),
  startDate: Joi.date().optional().allow(null),
  endDate: Joi.date()
    .optional()
    .allow(null)
    .when("startDate", {
      is: Joi.exist(),
      then: Joi.date().min(Joi.ref("startDate")).messages({
        "date.min": "End date must be after start date",
      }),
    }),
  isActive: Joi.boolean().optional(),
});

const updateProjectValidator = Joi.object({
  title: Joi.string().min(3).max(100).optional(),
  description: Joi.string().min(10).max(1000).optional(),
  shortDescription: Joi.string().max(200).optional().allow(""),
  image: Joi.string().uri().optional().allow(null, ""),
  technologies: Joi.array().items(Joi.string().trim()).optional(),
  liveUrl: Joi.string().uri().optional().allow(null, ""),
  githubUrl: Joi.string().uri().optional().allow(null, ""),
  status: Joi.string()
    .valid(...Object.values(PROJECT_STATUS))
    .optional(),
  featured: Joi.boolean().optional(),
  order: Joi.number().integer().min(0).optional(),
  startDate: Joi.date().optional().allow(null),
  endDate: Joi.date().optional().allow(null),
  isActive: Joi.boolean().optional(),
});

module.exports = {
  createProjectValidator,
  updateProjectValidator,
};
