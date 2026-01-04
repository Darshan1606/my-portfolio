const Joi = require("joi");
const { BLOG_STATUS } = require("../constants");

const createBlogValidator = Joi.object({
  title: Joi.string().min(5).max(200).required().messages({
    "string.empty": "Blog title is required",
    "string.min": "Title must be at least 5 characters",
    "string.max": "Title cannot exceed 200 characters",
  }),
  slug: Joi.string().lowercase().optional().allow(null, ""),
  excerpt: Joi.string().max(300).optional().allow(""),
  content: Joi.string().min(50).required().messages({
    "string.empty": "Content is required",
    "string.min": "Content must be at least 50 characters",
  }),
  coverImage: Joi.string().uri().optional().allow(null, ""),
  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),
  category: Joi.string().trim().optional().allow(""),
  status: Joi.string()
    .valid(...Object.values(BLOG_STATUS))
    .optional(),
  featured: Joi.boolean().optional(),
  readTime: Joi.number().integer().min(1).optional(),
  isActive: Joi.boolean().optional(),
});

const updateBlogValidator = Joi.object({
  title: Joi.string().min(5).max(200).optional(),
  slug: Joi.string().lowercase().optional().allow(null, ""),
  excerpt: Joi.string().max(300).optional().allow(""),
  content: Joi.string().min(50).optional(),
  coverImage: Joi.string().uri().optional().allow(null, ""),
  tags: Joi.array().items(Joi.string().trim().lowercase()).optional(),
  category: Joi.string().trim().optional().allow(""),
  status: Joi.string()
    .valid(...Object.values(BLOG_STATUS))
    .optional(),
  featured: Joi.boolean().optional(),
  readTime: Joi.number().integer().min(1).optional(),
  isActive: Joi.boolean().optional(),
});

module.exports = {
  createBlogValidator,
  updateBlogValidator,
};
