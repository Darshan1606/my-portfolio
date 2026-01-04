const express = require("express");
const router = express.Router();

// Import route modules
const authRoutes = require("./authRoutes");
const projectRoutes = require("./projectRoutes");
const blogRoutes = require("./blogRoutes");
const skillRoutes = require("./skillRoutes");

// API Information
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio API v1.0",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      projects: "/api/projects",
      blogs: "/api/blogs",
      skills: "/api/skills",
    },
    documentation: "https://github.com/yourusername/portfolio-backend",
    timestamp: new Date().toISOString(),
  });
});

// Mount routes
router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/blogs", blogRoutes);
router.use("/skills", skillRoutes);

module.exports = router;
