# API Examples & Testing

## 📋 Complete API Request Examples

### Authentication Endpoints

#### 1. Register New User

```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "user": {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user"
    },
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### 2. Login

```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@portfolio.com",
  "password": "Admin@123"
}
```

#### 3. Get Current User Profile

```bash
GET http://localhost:5000/api/auth/me
Authorization: Bearer YOUR_ACCESS_TOKEN
```

#### 4. Refresh Token

```bash
POST http://localhost:5000/api/auth/refresh-token
Content-Type: application/json

{
  "refreshToken": "YOUR_REFRESH_TOKEN"
}
```

---

### Project Endpoints

#### 1. Get All Projects (Public)

```bash
GET http://localhost:5000/api/projects?page=1&limit=10
```

**With Filters:**

```bash
GET http://localhost:5000/api/projects?status=completed&featured=true&search=portfolio
```

#### 2. Get Featured Projects

```bash
GET http://localhost:5000/api/projects/featured
```

#### 3. Get Single Project

```bash
GET http://localhost:5000/api/projects/507f1f77bcf86cd799439011
```

#### 4. Create Project (Admin Only)

```bash
POST http://localhost:5000/api/projects
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "title": "E-Commerce Platform",
  "description": "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
  "shortDescription": "Modern e-commerce solution",
  "image": "https://example.com/project-image.jpg",
  "technologies": [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Stripe",
    "Redux"
  ],
  "liveUrl": "https://ecommerce-demo.com",
  "githubUrl": "https://github.com/username/ecommerce",
  "status": "completed",
  "featured": true,
  "order": 1,
  "startDate": "2024-01-01",
  "endDate": "2024-06-30"
}
```

#### 5. Update Project (Admin Only)

```bash
PUT http://localhost:5000/api/projects/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "title": "Updated Project Title",
  "featured": false
}
```

#### 6. Delete Project (Admin Only)

```bash
DELETE http://localhost:5000/api/projects/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

### Blog Endpoints

#### 1. Get All Blogs (Public)

```bash
GET http://localhost:5000/api/blogs?page=1&limit=10
```

**With Filters:**

```bash
GET http://localhost:5000/api/blogs?category=technology&tag=javascript&featured=true
```

#### 2. Get Featured Blogs

```bash
GET http://localhost:5000/api/blogs/featured
```

#### 3. Get All Tags

```bash
GET http://localhost:5000/api/blogs/tags
```

#### 4. Get Blog by Slug

```bash
GET http://localhost:5000/api/blogs/slug/getting-started-with-react
```

#### 5. Get Single Blog by ID

```bash
GET http://localhost:5000/api/blogs/507f1f77bcf86cd799439011
```

#### 6. Create Blog (Admin Only)

```bash
POST http://localhost:5000/api/blogs
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "title": "Getting Started with Node.js",
  "slug": "getting-started-with-nodejs",
  "excerpt": "Learn the basics of Node.js and build your first server",
  "content": "# Introduction\n\nNode.js is a JavaScript runtime...\n\n## Installation\n\nTo install Node.js...",
  "coverImage": "https://example.com/blog-cover.jpg",
  "tags": ["nodejs", "javascript", "backend", "tutorial"],
  "category": "Web Development",
  "status": "published",
  "featured": true,
  "readTime": 5
}
```

#### 7. Update Blog (Admin Only)

```bash
PUT http://localhost:5000/api/blogs/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "title": "Updated Blog Title",
  "status": "published"
}
```

#### 8. Delete Blog (Admin Only)

```bash
DELETE http://localhost:5000/api/blogs/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

### Skill Endpoints

#### 1. Get All Skills (Public)

```bash
GET http://localhost:5000/api/skills?page=1&limit=20
```

**With Filters:**

```bash
GET http://localhost:5000/api/skills?category=frontend&featured=true
```

#### 2. Get Skills Grouped by Category

```bash
GET http://localhost:5000/api/skills/grouped
```

**Response:**

```json
{
  "success": true,
  "data": {
    "frontend": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "name": "React",
        "category": "frontend",
        "proficiency": "expert",
        "proficiencyPercentage": 95
      }
    ],
    "backend": [
      {
        "_id": "507f1f77bcf86cd799439012",
        "name": "Node.js",
        "category": "backend",
        "proficiency": "advanced",
        "proficiencyPercentage": 90
      }
    ]
  }
}
```

#### 3. Get Featured Skills

```bash
GET http://localhost:5000/api/skills/featured
```

#### 4. Get Single Skill

```bash
GET http://localhost:5000/api/skills/507f1f77bcf86cd799439011
```

#### 5. Create Skill (Admin Only)

```bash
POST http://localhost:5000/api/skills
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "name": "React",
  "category": "frontend",
  "proficiency": "expert",
  "proficiencyPercentage": 95,
  "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "description": "Advanced knowledge in React including hooks, context API, and performance optimization",
  "yearsOfExperience": 4,
  "order": 1,
  "featured": true
}
```

#### 6. Update Skill (Admin Only)

```bash
PUT http://localhost:5000/api/skills/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "proficiencyPercentage": 98,
  "yearsOfExperience": 5
}
```

#### 7. Delete Skill (Admin Only)

```bash
DELETE http://localhost:5000/api/skills/507f1f77bcf86cd799439011
Authorization: Bearer YOUR_ACCESS_TOKEN
```

---

## 🧪 Postman Collection

### Import this JSON into Postman:

```json
{
  "info": {
    "name": "Portfolio API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:5000/api"
    },
    {
      "key": "token",
      "value": ""
    }
  ],
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{token}}"
      }
    ]
  }
}
```

---

## 📊 Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {},
  "timestamp": "2024-01-04T10:30:00.000Z"
}
```

### Paginated Response

```json
{
  "success": true,
  "message": "Fetched successfully",
  "data": [],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10,
    "hasNextPage": true,
    "hasPrevPage": false
  },
  "timestamp": "2024-01-04T10:30:00.000Z"
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "timestamp": "2024-01-04T10:30:00.000Z"
}
```

---

## 🎯 Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (Validation Error)
- `401` - Unauthorized (No/Invalid Token)
- `403` - Forbidden (Insufficient Permissions)
- `404` - Not Found
- `409` - Conflict (Duplicate Entry)
- `500` - Internal Server Error

---

## 💡 Tips

1. **Save Token**: After login, save the `accessToken` and use it for protected routes
2. **Refresh Token**: Use refresh token endpoint when access token expires
3. **Pagination**: Use `page` and `limit` query params for listing endpoints
4. **Search**: Use `search` query param for text search across multiple fields
5. **Filters**: Combine multiple filters in query params
6. **Sorting**: Use `sortBy` and `order` for custom sorting

---

## 🔧 Testing with cURL

### Quick Login Test

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.com","password":"Admin@123"}' \
  | json_pp
```

### Get Projects with Token

```bash
TOKEN="your_access_token_here"
curl -X GET "http://localhost:5000/api/projects" \
  -H "Authorization: Bearer $TOKEN" \
  | json_pp
```
