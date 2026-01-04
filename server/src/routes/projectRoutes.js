const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
  getFeaturedProjects,
} = require("../controllers/projectController");
const {
  createProjectValidator,
  updateProjectValidator,
} = require("../validators/projectValidator");
const validate = require("../middlewares/validateMiddleware");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/projects:
 *   get:
 *     summary: Get all projects with pagination
 *     tags: [Projects]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [completed, in-progress, planned]
 *         description: Filter by project status
 *       - in: query
 *         name: featured
 *         schema:
 *           type: boolean
 *         description: Filter featured projects
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in title and description
 *     responses:
 *       200:
 *         description: Projects retrieved successfully
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
 *                         $ref: '#/components/schemas/Project'
 */
router.get("/", getAllProjects);

/**
 * @swagger
 * /api/projects/featured:
 *   get:
 *     summary: Get featured projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: Featured projects retrieved successfully
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
 *                     $ref: '#/components/schemas/Project'
 */
router.get("/featured", getFeaturedProjects);

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project by ID
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project retrieved successfully
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
 *                   $ref: '#/components/schemas/Project'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.get("/:id", getProjectById);

/**
 * @swagger
 * /api/projects:
 *   post:
 *     summary: Create a new project (Admin only)
 *     tags: [Projects]
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
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: E-Commerce Platform
 *               description:
 *                 type: string
 *                 example: A full-featured e-commerce platform
 *               shortDescription:
 *                 type: string
 *                 example: Modern e-commerce solution
 *               image:
 *                 type: string
 *                 example: https://example.com/project.jpg
 *               technologies:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [React, Node.js, MongoDB]
 *               liveUrl:
 *                 type: string
 *                 example: https://project-demo.com
 *               githubUrl:
 *                 type: string
 *                 example: https://github.com/user/project
 *               status:
 *                 type: string
 *                 enum: [completed, in-progress, planned]
 *                 example: completed
 *               featured:
 *                 type: boolean
 *                 example: true
 *               order:
 *                 type: number
 *                 example: 1
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Project created successfully
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
 *                   $ref: '#/components/schemas/Project'
 *       400:
 *         $ref: '#/components/responses/ValidationError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 */
router.post(
  "/",
  protect,
  adminOnly,
  validate(createProjectValidator),
  createProject
);

/**
 * @swagger
 * /api/projects/{id}:
 *   put:
 *     summary: Update project (Admin only)
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               shortDescription:
 *                 type: string
 *               image:
 *                 type: string
 *               technologies:
 *                 type: array
 *                 items:
 *                   type: string
 *               liveUrl:
 *                 type: string
 *               githubUrl:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [completed, in-progress, planned]
 *               featured:
 *                 type: boolean
 *               order:
 *                 type: number
 *     responses:
 *       200:
 *         description: Project updated successfully
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
 *                   $ref: '#/components/schemas/Project'
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
  validate(updateProjectValidator),
  updateProject
);

/**
 * @swagger
 * /api/projects/{id}:
 *   delete:
 *     summary: Delete project (Admin only)
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Project ID
 *     responses:
 *       200:
 *         description: Project deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessResponse'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete("/:id", protect, adminOnly, deleteProject);

module.exports = router;
