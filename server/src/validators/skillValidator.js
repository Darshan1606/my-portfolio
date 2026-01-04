const Joi = require("joi");
const { SKILL_CATEGORIES, PROFICIENCY_LEVELS } = require("../constants");

const createSkillValidator = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Skill name is required",
    "string.min": "Name must be at least 2 characters",
    "string.max": "Name cannot exceed 50 characters",
  }),
  category: Joi.string()
    .valid(...Object.values(SKILL_CATEGORIES))
    .required()
    .messages({
      "string.empty": "Category is required",
      "any.only": "Invalid category",
    }),
  proficiency: Joi.string()
    .valid(...Object.values(PROFICIENCY_LEVELS))
    .optional(),
  proficiencyPercentage: Joi.number()
    .integer()
    .min(0)
    .max(100)
    .optional()
    .messages({
      "number.min": "Proficiency percentage must be at least 0",
      "number.max": "Proficiency percentage cannot exceed 100",
    }),
  icon: Joi.string().optional().allow(null, ""),
  description: Joi.string().max(500).optional().allow(""),
  yearsOfExperience: Joi.number().min(0).optional().messages({
    "number.min": "Years of experience cannot be negative",
  }),
  order: Joi.number().integer().min(0).optional(),
  featured: Joi.boolean().optional(),
  isActive: Joi.boolean().optional(),
});

const updateSkillValidator = Joi.object({
  name: Joi.string().min(2).max(50).optional(),
  category: Joi.string()
    .valid(...Object.values(SKILL_CATEGORIES))
    .optional(),
  proficiency: Joi.string()
    .valid(...Object.values(PROFICIENCY_LEVELS))
    .optional(),
  proficiencyPercentage: Joi.number().integer().min(0).max(100).optional(),
  icon: Joi.string().optional().allow(null, ""),
  description: Joi.string().max(500).optional().allow(""),
  yearsOfExperience: Joi.number().min(0).optional(),
  order: Joi.number().integer().min(0).optional(),
  featured: Joi.boolean().optional(),
  isActive: Joi.boolean().optional(),
});

module.exports = {
  createSkillValidator,
  updateSkillValidator,
};
