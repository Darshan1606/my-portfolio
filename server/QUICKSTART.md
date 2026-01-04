# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Setup Environment Variables

Copy the `.env` file content and update the values:

```bash
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_secret_key_change_this
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### Step 3: Start MongoDB

Make sure MongoDB is running on your machine:

```bash
# Using mongod
mongod

# Or using MongoDB service
sudo service mongod start
```

### Step 4: Create Admin User

Run the seed script to create an admin user:

```bash
node src/utils/seedAdmin.js
```

This will create an admin account with:

- **Email**: admin@portfolio.com (or from .env)
- **Password**: Admin@123 (or from .env)

### Step 5: Start the Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

Your API will be running at: `http://localhost:5000`

---

## 🧪 Test the API

### 1. Health Check

```bash
curl http://localhost:5000/health
```

### 2. Login as Admin

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@portfolio.com",
    "password": "Admin@123"
  }'
```

Save the `accessToken` from the response.

### 3. Create a Project

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "title": "My Portfolio",
    "description": "A beautiful portfolio website",
    "technologies": ["React", "Node.js"],
    "status": "completed",
    "featured": true
  }'
```

### 4. Get All Projects

```bash
curl http://localhost:5000/api/projects
```

---

## 📱 Using with Your Frontend

### Install Axios in your frontend

```bash
npm install axios
```

### Create an API service (src/services/api.js)

```javascript
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// API calls
export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  getProfile: () => api.get("/auth/me"),
};

export const projectAPI = {
  getAll: (params) => api.get("/projects", { params }),
  getById: (id) => api.get(`/projects/${id}`),
  getFeatured: () => api.get("/projects/featured"),
  create: (data) => api.post("/projects", data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

export const blogAPI = {
  getAll: (params) => api.get("/blogs", { params }),
  getById: (id) => api.get(`/blogs/${id}`),
  getBySlug: (slug) => api.get(`/blogs/slug/${slug}`),
  getFeatured: () => api.get("/blogs/featured"),
  getTags: () => api.get("/blogs/tags"),
  create: (data) => api.post("/blogs", data),
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
};

export const skillAPI = {
  getAll: (params) => api.get("/skills", { params }),
  getGrouped: () => api.get("/skills/grouped"),
  getFeatured: () => api.get("/skills/featured"),
  create: (data) => api.post("/skills", data),
  update: (id, data) => api.put(`/skills/${id}`, data),
  delete: (id) => api.delete(`/skills/${id}`),
};

export default api;
```

### Usage in React Component

```javascript
import { useEffect, useState } from "react";
import { projectAPI } from "./services/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectAPI.getAll();
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔐 Common API Patterns

### Pagination

```bash
GET /api/projects?page=1&limit=10
```

### Filtering

```bash
GET /api/projects?status=completed&featured=true
GET /api/blogs?category=technology&tag=javascript
```

### Searching

```bash
GET /api/projects?search=portfolio
GET /api/blogs?search=react
```

### Sorting

```bash
GET /api/projects?sortBy=createdAt&order=desc
```

---

## 🐛 Troubleshooting

### MongoDB Connection Error

- Make sure MongoDB is running
- Check your `MONGODB_URI` in `.env`
- For MongoDB Atlas, whitelist your IP address

### JWT Token Error

- Make sure you're sending the token in the Authorization header
- Check if the token has expired (default: 7 days)
- Verify `JWT_SECRET` is set in `.env`

### CORS Error

- Add your frontend URL to `CORS_ORIGIN` in `.env`
- Multiple origins: `CORS_ORIGIN=http://localhost:3000,https://yoursite.com`

### Port Already in Use

- Change the `PORT` in `.env`
- Or kill the process: `lsof -ti:5000 | xargs kill -9`

---

## 📚 Next Steps

1. **Customize Models**: Add more fields to models as needed
2. **File Upload**: Implement file upload for images
3. **Email Service**: Add email notifications
4. **Analytics**: Track blog views and project visits
5. **Social Auth**: Add Google/GitHub OAuth
6. **Comments**: Add comment system for blogs
7. **Search**: Implement full-text search with Elasticsearch
8. **Caching**: Add Redis for caching
9. **WebSockets**: Real-time notifications
10. **API Documentation**: Use Swagger/OpenAPI

Happy Coding! 🎉
