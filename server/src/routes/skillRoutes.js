const express = require("express");
const router = express.Router();
const {
  getAllSkills,
  getSkillsGroupedByCategory,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
  getFeaturedSkills,
} = require("../controllers/skillController");
const {
  createSkillValidator,
  updateSkillValidator,
} = require("../validators/skillValidator");
const validate = require("../middlewares/validateMiddleware");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Get all skills with pagination
 *     tags: [Skills]
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
 *         name: category
 *         schema:
 *           type: string
 *           enum: [frontend, backend, database, devops, tools, other]
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
 *         description: Skills retrieved successfully
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
 *                         $ref: '#/components/schemas/Skill'
 */
router.get("/", getAllSkills);

/**
 * @swagger
 * /api/skills/grouped:
 *   get:
 *     summary: Get skills grouped by category
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: Grouped skills retrieved successfully
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
 *                   type: object
 *                   properties:
 *                     frontend:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 *                     backend:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 *                     database:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 *                     devops:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 *                     tools:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 *                     other:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 */
router.get("/grouped", getSkillsGroupedByCategory);

/**
 * @swagger
 * /api/skills/featured:
 *   get:
 *     summary: Get featured skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: Featured skills retrieved successfully
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
 *                     $ref: '#/components/schemas/Skill'
 */
router.get("/featured", getFeaturedSkills);

/**
 * @swagger
 * /api/skills/{id}:
 *   get:
 *     summary: Get skill by ID
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     responses:
 *       200:
 *         description: Skill retrieved successfully
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
 *                   $ref: '#/components/schemas/Skill'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.get("/:id", getSkillById);

/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Create a new skill (Admin only)
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 example: React
 *               category:
 *                 type: string
 *                 enum: [frontend, backend, database, devops, tools, other]
 *                 example: frontend
 *               proficiency:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced, expert]
 *                 example: expert
 *               proficiencyPercentage:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 100
 *                 example: 95
 *               icon:
 *                 type: string
 *                 example: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg
 *               description:
 *                 type: string
 *                 example: Advanced React with hooks and context
 *               yearsOfExperience:
 *                 type: number
 *                 example: 4
 *               order:
 *                 type: number
 *                 example: 1
 *               featured:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Skill created successfully
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
 *                   $ref: '#/components/schemas/Skill'
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
  validate(createSkillValidator),
  createSkill
);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Update skill (Admin only)
 *     tags: [Skills]
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
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum: [frontend, backend, database, devops, tools, other]
 *               proficiency:
 *                 type: string
 *                 enum: [beginner, intermediate, advanced, expert]
 *               proficiencyPercentage:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 100
 *               icon:
 *                 type: string
 *               description:
 *                 type: string
 *               yearsOfExperience:
 *                 type: number
 *               order:
 *                 type: number
 *               featured:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Skill updated successfully
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
  validate(updateSkillValidator),
  updateSkill
);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Delete skill (Admin only)
 *     tags: [Skills]
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
 *         description: Skill deleted successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       403:
 *         $ref: '#/components/responses/ForbiddenError'
 *       404:
 *         $ref: '#/components/responses/NotFoundError'
 */
router.delete("/:id", protect, adminOnly, deleteSkill);

module.exports = router;
