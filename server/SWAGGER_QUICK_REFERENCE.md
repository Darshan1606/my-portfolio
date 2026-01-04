# Swagger Quick Reference Card

## 🚀 Quick Start (30 Seconds)

```bash
# 1. Install dependencies
npm install

# 2. Start server
npm run dev

# 3. Open browser
http://localhost:5000/api-docs
```

## 🔐 Quick Auth Setup

### Get Token

```
POST /api/auth/login
{
  "email": "admin@portfolio.com",
  "password": "Admin@123"
}
```

### Authorize in Swagger

1. Click **Authorize** 🔒 button (top right)
2. Enter: `Bearer YOUR_TOKEN_HERE`
3. Click **Authorize** then **Close**

## 📍 Key Endpoints

| Method             | Endpoint                  | Auth     | Description         |
| ------------------ | ------------------------- | -------- | ------------------- |
| **Authentication** |
| POST               | `/api/auth/register`      | ❌       | Register user       |
| POST               | `/api/auth/login`         | ❌       | Login               |
| POST               | `/api/auth/refresh-token` | ❌       | Refresh token       |
| GET                | `/api/auth/me`            | ✅       | Get profile         |
| **Projects**       |
| GET                | `/api/projects`           | ❌       | List projects       |
| GET                | `/api/projects/featured`  | ❌       | Featured projects   |
| GET                | `/api/projects/:id`       | ❌       | Get project         |
| POST               | `/api/projects`           | ✅ Admin | Create project      |
| PUT                | `/api/projects/:id`       | ✅ Admin | Update project      |
| DELETE             | `/api/projects/:id`       | ✅ Admin | Delete project      |
| **Blogs**          |
| GET                | `/api/blogs`              | ❌       | List blogs          |
| GET                | `/api/blogs/featured`     | ❌       | Featured blogs      |
| GET                | `/api/blogs/tags`         | ❌       | All tags            |
| GET                | `/api/blogs/slug/:slug`   | ❌       | Get by slug         |
| GET                | `/api/blogs/:id`          | ❌       | Get blog            |
| POST               | `/api/blogs`              | ✅ Admin | Create blog         |
| PUT                | `/api/blogs/:id`          | ✅ Admin | Update blog         |
| DELETE             | `/api/blogs/:id`          | ✅ Admin | Delete blog         |
| **Skills**         |
| GET                | `/api/skills`             | ❌       | List skills         |
| GET                | `/api/skills/grouped`     | ❌       | Grouped by category |
| GET                | `/api/skills/featured`    | ❌       | Featured skills     |
| GET                | `/api/skills/:id`         | ❌       | Get skill           |
| POST               | `/api/skills`             | ✅ Admin | Create skill        |
| PUT                | `/api/skills/:id`         | ✅ Admin | Update skill        |
| DELETE             | `/api/skills/:id`         | ✅ Admin | Delete skill        |

## 🎯 Query Parameters

### Pagination

```
?page=1&limit=10
```

### Filtering

```
?status=completed&featured=true
?category=frontend&featured=true
?tag=javascript
```

### Search

```
?search=react
```

### Combined

```
?page=1&limit=20&status=completed&featured=true&search=portfolio
```

## 📦 Common Request Bodies

### Create Project

```json
{
  "title": "Project Title",
  "description": "Project description",
  "technologies": ["React", "Node.js"],
  "liveUrl": "https://demo.com",
  "githubUrl": "https://github.com/user/repo",
  "status": "completed",
  "featured": true
}
```

### Create Blog

```json
{
  "title": "Blog Title",
  "content": "# Markdown content here",
  "tags": ["javascript", "tutorial"],
  "category": "Web Development",
  "status": "published",
  "featured": false
}
```

### Create Skill

```json
{
  "name": "React",
  "category": "frontend",
  "proficiency": "expert",
  "proficiencyPercentage": 95,
  "yearsOfExperience": 4,
  "featured": true
}
```

## 📊 Response Formats

### Success

```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... },
  "timestamp": "2024-01-04T10:30:00.000Z"
}
```

### Paginated

```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  }
}
```

### Error

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

## 🔢 Status Codes

| Code | Meaning                              |
| ---- | ------------------------------------ |
| 200  | Success                              |
| 201  | Created                              |
| 400  | Bad Request / Validation Error       |
| 401  | Unauthorized (No/Invalid Token)      |
| 403  | Forbidden (Insufficient Permissions) |
| 404  | Not Found                            |
| 409  | Conflict (Duplicate Entry)           |
| 500  | Internal Server Error                |

## 🎨 Enums

### Project Status

- `completed`
- `in-progress`
- `planned`

### Blog Status

- `draft`
- `published`
- `archived`

### Skill Category

- `frontend`
- `backend`
- `database`
- `devops`
- `tools`
- `other`

### Proficiency Level

- `beginner`
- `intermediate`
- `advanced`
- `expert`

### User Roles

- `user`
- `admin`

## 🔧 Swagger JSDoc Template

```javascript
/**
 * @swagger
 * /api/your-endpoint:
 *   get:
 *     summary: Short description
 *     tags: [YourTag]
 *     parameters:
 *       - in: query
 *         name: param
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Model'
 */
```

## 💡 Pro Tips

1. **Test Public Endpoints First**: No auth needed
2. **Save Your Token**: Copy it after login
3. **Use Try It Out**: Interactive testing
4. **Check Examples**: Pre-filled request bodies
5. **View Schemas**: Click on model names
6. **Export Spec**: Use `/api-docs.json`

## 🚨 Troubleshooting

| Issue                | Solution                               |
| -------------------- | -------------------------------------- |
| Can't see Swagger UI | Check `http://localhost:5000/api-docs` |
| 401 Unauthorized     | Click Authorize, enter `Bearer TOKEN`  |
| Changes not showing  | Restart server with `npm run dev`      |
| Schema not found     | Check exact name (case-sensitive)      |

## 📱 Share API Docs

### Public URL

```
https://your-domain.com/api-docs
```

### JSON Spec

```
https://your-domain.com/api-docs.json
```

### For Teams

1. Share the URL
2. They get interactive docs
3. No setup needed!

## 🎓 Need More Help?

- Full docs: `SWAGGER_DOCUMENTATION.md`
- API examples: `API_EXAMPLES.md`
- General docs: `README.md`

---

**Happy API Testing! 🚀**
