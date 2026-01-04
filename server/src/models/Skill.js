const mongoose = require("mongoose");
const { SKILL_CATEGORIES, PROFICIENCY_LEVELS } = require("../constants");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name is required"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: Object.values(SKILL_CATEGORIES),
      default: SKILL_CATEGORIES.OTHER,
    },
    proficiency: {
      type: String,
      enum: Object.values(PROFICIENCY_LEVELS),
      default: PROFICIENCY_LEVELS.INTERMEDIATE,
    },
    proficiencyPercentage: {
      type: Number,
      min: 0,
      max: 100,
      default: 50,
    },
    icon: {
      type: String, // URL or icon class name
      default: null,
    },
    description: {
      type: String,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    yearsOfExperience: {
      type: Number,
      min: 0,
      default: 0,
    },
    order: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
skillSchema.index({ category: 1, order: 1 });
skillSchema.index({ featured: 1 });
skillSchema.index({ name: "text" });

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;
