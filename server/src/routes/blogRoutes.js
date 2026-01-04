const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  createBlog,
  updateBlog,
  deleteBlog,
  getFeaturedBlogs,
  getAllTags,
} = require("../controllers/blogController");
const {
  createBlogValidator,
  updateBlogValidator,
} = require("../validators/blogValidator");
const validate = require("../middlewares/validateMiddleware");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/blogs:
 *   get:
 *     summary: Get all blogs with pagination
 *     tags: [Blogs]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [draft, published, archived]
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: tag
 *         schema:
 *           type: string
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blogs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/PaginatedResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Blog'
 */
router.get("/", getAllBlogs);

/**
 * @swagger
 * /api/blogs/featured:
 *   get:
 *     summary: Get featured blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Featured blogs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Blog'
 */
router.get("/featured", getFeaturedBlogs);

/**
 * @swagger
 * /api/blogs/tags:
 *   get:
 *     summary: Get all unique tags
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Tags retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: [javascript, react, nodejs, tutorial]
 */
router.get("/tags", getAllTags);

/**
 * @swagger
 * /api/blogs/slug/{slug}:
 *   get:
 *     summary: Get blog by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog slug
 *         example: getting-started-with-react
 *     responses:
 *       200:
 *         description: Blog retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.get("/slug/:slug", getBlogBySlug);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get blog by ID
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Blog retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.get("/:id", getBlogById);

/**
 * @swagger
 * /api/blogs:
 *   post:
 *     summary: Create a new blog (Admin only)
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Getting Started with React
 *               slug:
 *                 type: string
 *                 example: getting-started-with-react
 *               excerpt:
 *                 type: string
 *                 example: Learn React basics in this tutorial
 *               content:
 *                 type: string
 *                 example: "# Introduction\n\nReact is a JavaScript library..."
 *               coverImage:
 *                 type: string
 *                 example: https://example.com/blog-cover.jpg
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [react, javascript, tutorial]
 *               category:
 *                 type: string
 *                 example: Web Development
 *               status:
 *                 type: string
 *                 enum: [draft, published, archived]
 *                 example: published
 *               featured:
 *                 type: boolean
 *                 example: false
 *               readTime:
 *                 type: number
 *                 example: 5
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Blog'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 */
router.post("/", protect, adminOnly, validate(createBlogValidator), createBlog);

/**
 * @swagger
 * /api/blogs/{id}:
 *   put:
 *     summary: Update blog (Admin only)
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               slug:
 *                 type: string
 *               excerpt:
 *                 type: string
 *               content:
 *                 type: string
 *               coverImage:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               category:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [draft, published, archived]
 *               featured:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Blog updated successfully
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.put(
  "/:id",
  protect,
  adminOnly,
  validate(updateBlogValidator),
  updateBlog
);

/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     summary: Delete blog (Admin only)
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete("/:id", protect, adminOnly, deleteBlog);

module.exports = router;
