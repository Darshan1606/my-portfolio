const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Portfolio API Documentation",
      version: "1.0.0",
      description:
        "Complete API documentation for Portfolio Backend with JWT Authentication, Projects, Blogs, and Skills management",
      contact: {
        name: "Darshan",
        url: "https://darshant.netlify.app",
        email: "admin@darshant.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
      {
        url: "https://api.darshant.com",
        description: "Production server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter your JWT token in the format: Bearer <token>",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            _id: {
              type: "string",
              description: "User ID",
            },
            name: {
              type: "string",
              description: "User full name",
              example: "John Doe",
            },
            email: {
              type: "string",
              format: "email",
              description: "User email address",
              example: "john@example.com",
            },
            role: {
              type: "string",
              enum: ["user", "admin"],
              description: "User role",
              example: "user",
            },
            isActive: {
              type: "boolean",
              description: "Account active status",
              example: true,
            },
            lastLogin: {
              type: "string",
              format: "date-time",
              description: "Last login timestamp",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Project: {
          type: "object",
          required: ["title", "description"],
          properties: {
            _id: {
              type: "string",
              description: "Project ID",
            },
            title: {
              type: "string",
              description: "Project title",
              example: "E-Commerce Platform",
            },
            description: {
              type: "string",
              description: "Detailed project description",
              example: "A full-featured e-commerce platform",
            },
            shortDescription: {
              type: "string",
              description: "Brief project overview",
              example: "Modern e-commerce solution",
            },
            image: {
              type: "string",
              description: "Project image URL",
              example: "https://example.com/project.jpg",
            },
            technologies: {
              type: "array",
              items: {
                type: "string",
              },
              example: ["React", "Node.js", "MongoDB"],
            },
            liveUrl: {
              type: "string",
              description: "Live project URL",
              example: "https://project-demo.com",
            },
            githubUrl: {
              type: "string",
              description: "GitHub repository URL",
              example: "https://github.com/user/project",
            },
            status: {
              type: "string",
              enum: ["completed", "in-progress", "planned"],
              example: "completed",
            },
            featured: {
              type: "boolean",
              description: "Featured project flag",
              example: true,
            },
            order: {
              type: "number",
              description: "Display order",
              example: 1,
            },
            startDate: {
              type: "string",
              format: "date",
            },
            endDate: {
              type: "string",
              format: "date",
            },
            isActive: {
              type: "boolean",
              example: true,
            },
            createdBy: {
              type: "string",
              description: "User ID who created",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Blog: {
          type: "object",
          required: ["title", "content"],
          properties: {
            _id: {
              type: "string",
              description: "Blog ID",
            },
            title: {
              type: "string",
              description: "Blog title",
              example: "Getting Started with React",
            },
            slug: {
              type: "string",
              description: "URL-friendly slug",
              example: "getting-started-with-react",
            },
            excerpt: {
              type: "string",
              description: "Short summary",
              example: "Learn React basics in this tutorial",
            },
            content: {
              type: "string",
              description: "Full blog content in markdown",
            },
            coverImage: {
              type: "string",
              description: "Cover image URL",
              example: "https://example.com/blog-cover.jpg",
            },
            tags: {
              type: "array",
              items: {
                type: "string",
              },
              example: ["react", "javascript", "tutorial"],
            },
            category: {
              type: "string",
              example: "Web Development",
            },
            status: {
              type: "string",
              enum: ["draft", "published", "archived"],
              example: "published",
            },
            featured: {
              type: "boolean",
              example: false,
            },
            views: {
              type: "number",
              example: 150,
            },
            readTime: {
              type: "number",
              description: "Estimated read time in minutes",
              example: 5,
            },
            publishedAt: {
              type: "string",
              format: "date-time",
            },
            author: {
              type: "string",
              description: "Author user ID",
            },
            isActive: {
              type: "boolean",
              example: true,
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        Skill: {
          type: "object",
          required: ["name", "category"],
          properties: {
            _id: {
              type: "string",
              description: "Skill ID",
            },
            name: {
              type: "string",
              description: "Skill name",
              example: "React",
            },
            category: {
              type: "string",
              enum: [
                "frontend",
                "backend",
                "database",
                "devops",
                "tools",
                "other",
              ],
              example: "frontend",
            },
            proficiency: {
              type: "string",
              enum: ["beginner", "intermediate", "advanced", "expert"],
              example: "expert",
            },
            proficiencyPercentage: {
              type: "number",
              minimum: 0,
              maximum: 100,
              example: 95,
            },
            icon: {
              type: "string",
              description: "Icon URL or class",
              example:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            description: {
              type: "string",
              example: "Advanced React development with hooks",
            },
            yearsOfExperience: {
              type: "number",
              example: 4,
            },
            order: {
              type: "number",
              example: 1,
            },
            featured: {
              type: "boolean",
              example: true,
            },
            isActive: {
              type: "boolean",
              example: true,
            },
            createdBy: {
              type: "string",
            },
            createdAt: {
              type: "string",
              format: "date-time",
            },
            updatedAt: {
              type: "string",
              format: "date-time",
            },
          },
        },
        SuccessResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Operation successful",
            },
            data: {
              type: "object",
            },
            timestamp: {
              type: "string",
              format: "date-time",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Error message",
            },
            errors: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  field: {
                    type: "string",
                  },
                  message: {
                    type: "string",
                  },
                },
              },
            },
            timestamp: {
              type: "string",
              format: "date-time",
            },
          },
        },
        PaginatedResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
            },
            data: {
              type: "array",
              items: {
                type: "object",
              },
            },
            pagination: {
              type: "object",
              properties: {
                currentPage: {
                  type: "number",
                  example: 1,
                },
                totalPages: {
                  type: "number",
                  example: 5,
                },
                totalItems: {
                  type: "number",
                  example: 50,
                },
                itemsPerPage: {
                  type: "number",
                  example: 10,
                },
                hasNextPage: {
                  type: "boolean",
                  example: true,
                },
                hasPrevPage: {
                  type: "boolean",
                  example: false,
                },
              },
            },
            timestamp: {
              type: "string",
              format: "date-time",
            },
          },
        },
      },
      responses: {
        UnauthorizedError: {
          description: "Access token is missing or invalid",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        ForbiddenError: {
          description: "Insufficient permissions",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        NotFoundError: {
          description: "Resource not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
        ValidationError: {
          description: "Validation error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ErrorResponse",
              },
            },
          },
        },
      },
    },
    tags: [
      {
        name: "Authentication",
        description: "Authentication and user management endpoints",
      },
      {
        name: "Projects",
        description: "Portfolio projects management",
      },
      {
        name: "Blogs",
        description: "Blog posts management",
      },
      {
        name: "Skills",
        description: "Skills and technologies management",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
