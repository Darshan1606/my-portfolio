/**
 * Common Service
 * Contains reusable service methods
 */

/**
 * Build pagination query
 */
const buildPaginationQuery = (page = 1, limit = 10, maxLimit = 100) => {
  const validPage = Math.max(1, parseInt(page));
  const validLimit = Math.min(Math.max(1, parseInt(limit)), maxLimit);
  const skip = (validPage - 1) * validLimit;

  return {
    page: validPage,
    limit: validLimit,
    skip,
  };
};

/**
 * Build search query
 */
const buildSearchQuery = (searchTerm, fields = []) => {
  if (!searchTerm) return {};

  const searchRegex = new RegExp(searchTerm, "i");
  const orConditions = fields.map((field) => ({
    [field]: searchRegex,
  }));

  return orConditions.length > 0 ? { $or: orConditions } : {};
};

/**
 * Build filter query
 */
const buildFilterQuery = (filters = {}) => {
  const query = {};

  Object.keys(filters).forEach((key) => {
    const value = filters[key];

    if (value !== undefined && value !== null && value !== "") {
      // Handle boolean strings
      if (value === "true") {
        query[key] = true;
      } else if (value === "false") {
        query[key] = false;
      } else {
        query[key] = value;
      }
    }
  });

  return query;
};

/**
 * Build sort query
 */
const buildSortQuery = (sortBy = "createdAt", order = "desc") => {
  const sortOrder = order === "asc" ? 1 : -1;
  return { [sortBy]: sortOrder };
};

/**
 * Generate unique slug
 */
const generateUniqueSlug = async (Model, baseSlug, excludeId = null) => {
  let slug = baseSlug
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  let counter = 0;
  let isUnique = false;

  while (!isUnique) {
    const testSlug = counter === 0 ? slug : `${slug}-${counter}`;
    const query = { slug: testSlug };

    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const existing = await Model.findOne(query);

    if (!existing) {
      slug = testSlug;
      isUnique = true;
    } else {
      counter++;
    }
  }

  return slug;
};

/**
 * Calculate pagination metadata
 */
const calculatePaginationMeta = (total, page, limit) => {
  const totalPages = Math.ceil(total / limit);

  return {
    currentPage: page,
    totalPages,
    totalItems: total,
    itemsPerPage: limit,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
};

module.exports = {
  buildPaginationQuery,
  buildSearchQuery,
  buildFilterQuery,
  buildSortQuery,
  generateUniqueSlug,
  calculatePaginationMeta,
};
