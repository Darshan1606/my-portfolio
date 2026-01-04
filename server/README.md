# Portfolio Backend API

A comprehensive backend API built with Express.js, MongoDB, and JWT authentication for managing portfolio content including projects, blogs, and skills.

## 🚀 Features

- **Authentication & Authorization**: JWT-based secure authentication with role-based access control
- **RESTful API**: Clean and organized API endpoints following REST principles
- **MVC Architecture**: Proper separation of concerns with Models, Views, and Controllers
- **Input Validation**: Request validation using Joi
- **Security**: Helmet, CORS, rate limiting, and input sanitization
- **Error Handling**: Centralized error handling middleware
- **Database**: MongoDB with Mongoose ODM
- **File Upload Support**: Multer integration for handling file uploads
- **Pagination**: Built-in pagination support for listing endpoints
- **Search & Filter**: Advanced search and filtering capabilities
- **📚 Swagger Documentation**: Interactive API documentation with Swagger UI

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio-backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000,https://darshant.netlify.app
```

4. **Create admin user**

```bash
node src/utils/seedAdmin.js
```

5. **Start the server**

```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## 📚 API Documentation

### Interactive Swagger Documentation

Once the server is running, access the interactive API documentation at:

```
http://localhost:5000/api-docs
```

The Swagger UI provides:

- ✅ Interactive API testing
- ✅ Complete endpoint documentation
- ✅ Request/response schemas
- ✅ Authentication testing
- ✅ Live examples

### Quick Documentation Access

- **Swagger UI**: `http://localhost:5000/api-docs`
- **OpenAPI JSON**: `http://localhost:5000/api-docs.json`
- **Health Check**: `http://localhost:5000/health`
- **API Info**: `http://localhost:5000/`

### Documentation Files

- `SWAGGER_DOCUMENTATION.md` - Complete Swagger guide
- `SWAGGER_QUICK_REFERENCE.md` - Quick reference card
- `API_EXAMPLES.md` - cURL and Postman examples
- `QUICKSTART.md` - Quick start guide

## 📁 Project Structure

```
portfolio-backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Database configuration
│   │   └── swagger.js           # Swagger/OpenAPI configuration
│   ├── constants/
│   │   └── index.js             # Application constants
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── projectController.js # Project CRUD operations
│   │   ├── blogController.js    # Blog CRUD operations
│   │   └── skillController.js   # Skill CRUD operations
│   ├── middlewares/
│   │   ├── authMiddleware.js    # JWT verification
│   │   ├── errorMiddleware.js   # Error handling
│   │   └── validateMiddleware.js# Request validation
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Project.js           # Project schema
│   │   ├── Blog.js              # Blog schema
│   │   └── Skill.js             # Skill schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth endpoints + Swagger docs
│   │   ├── projectRoutes.js     # Project endpoints + Swagger docs
│   │   ├── blogRoutes.js        # Blog endpoints + Swagger docs
│   │   ├── skillRoutes.js       # Skill endpoints + Swagger docs
│   │   └── index.js             # Route aggregator
│   ├── services/
│   │   └── commonService.js     # Reusable services
│   ├── utils/
│   │   ├── asyncHandler.js      # Async error wrapper
│   │   ├── jwtHelper.js         # JWT utilities
│   │   ├── responseHelper.js    # Response formatters
│   │   └── seedAdmin.js         # Admin user seeder
│   ├── validators/
│   │   ├── authValidator.js     # Auth validation schemas
│   │   ├── projectValidator.js  # Project validation
│   │   ├── blogValidator.js     # Blog validation
│   │   └── skillValidator.js    # Skill validation
│   └── app.js                   # Express app setup
├── uploads/                     # File uploads directory
├── .env                         # Environment variables
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies
├── server.js                    # Server entry point
├── README.md                    # This file
├── QUICKSTART.md                # Quick start guide
├── SWAGGER_DOCUMENTATION.md     # Swagger guide
├── SWAGGER_QUICK_REFERENCE.md   # Swagger quick reference
└── API_EXAMPLES.md              # API examples
```

## 🔌 API Endpoints

### Authentication

```
POST   /api/auth/register        # Register new user
POST   /api/auth/login           # Login user
POST   /api/auth/refresh-token   # Refresh access token
GET    /api/auth/me              # Get current user (Protected)
POST   /api/auth/logout          # Logout user (Protected)
```

### Projects

```
GET    /api/projects             # Get all projects (Public)
GET    /api/projects/featured    # Get featured projects (Public)
GET    /api/projects/:id         # Get single project (Public)
POST   /api/projects             # Create project (Admin)
PUT    /api/projects/:id         # Update project (Admin)
DELETE /api/projects/:id         # Delete project (Admin)
```

### Blogs

```
GET    /api/blogs                # Get all blogs (Public)
GET    /api/blogs/featured       # Get featured blogs (Public)
GET    /api/blogs/tags           # Get all tags (Public)
GET    /api/blogs/slug/:slug     # Get blog by slug (Public)
GET    /api/blogs/:id            # Get single blog (Public)
POST   /api/blogs                # Create blog (Admin)
PUT    /api/blogs/:id            # Update blog (Admin)
DELETE /api/blogs/:id            # Delete blog (Admin)
```

### Skills

```
GET    /api/skills               # Get all skills (Public)
GET    /api/skills/grouped       # Get skills grouped by category (Public)
GET    /api/skills/featured      # Get featured skills (Public)
GET    /api/skills/:id           # Get single skill (Public)
POST   /api/skills               # Create skill (Admin)
PUT    /api/skills/:id           # Update skill (Admin)
DELETE /api/skills/:id           # Delete skill (Admin)
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your_token_here>
```

### Using Swagger for Authentication

1. Go to `http://localhost:5000/api-docs`
2. Use `POST /api/auth/login` to get a token
3. Click the **Authorize** button (🔒) at the top
4. Enter: `Bearer YOUR_TOKEN`
5. Now you can test all protected endpoints!

## 📝 Quick Test

### Using Swagger (Recommended)

1. Open `http://localhost:5000/api-docs`
2. Try `POST /api/auth/login` with default admin credentials
3. Authorize using the returned token
4. Test any endpoint with the "Try it out" button

### Using cURL

```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@portfolio.com","password":"Admin@123"}'

# Get Projects
curl http://localhost:5000/api/projects
```

## 🛡️ Security Features

- **Helmet**: Sets security headers
- **CORS**: Cross-origin resource sharing configuration
- **Rate Limiting**: Prevents brute force attacks (100 requests per 15 minutes)
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for password encryption
- **Input Sanitization**: Prevents NoSQL injection
- **Request Validation**: Joi schema validation

## 🧪 Testing

### Health Check

```bash
curl http://localhost:5000/health
```

### API Documentation

```bash
# View all available endpoints
open http://localhost:5000/api-docs
```

## 📦 Dependencies

### Production

- **express**: Web framework
- **mongoose**: MongoDB ODM
- **jsonwebtoken**: JWT authentication
- **bcryptjs**: Password hashing
- **joi**: Request validation
- **helmet**: Security headers
- **cors**: CORS middleware
- **morgan**: HTTP request logger
- **dotenv**: Environment variables
- **swagger-jsdoc**: Generate OpenAPI specs
- **swagger-ui-express**: Serve Swagger UI

### Development

- **nodemon**: Development auto-restart

## 🚀 Deployment

1. Set `NODE_ENV=production` in your environment
2. Update `MONGODB_URI` with your production database
3. Set a strong `JWT_SECRET`
4. Configure `CORS_ORIGIN` for your frontend URL
5. Deploy to your preferred hosting platform:
   - Heroku
   - AWS EC2/ECS
   - DigitalOcean
   - Render
   - Railway

### Production Environment Variables

```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
JWT_SECRET=your_very_secure_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=https://your-frontend-domain.com
```

## 📖 Documentation

- **Main Documentation**: `README.md` (this file)
- **Quick Start**: `QUICKSTART.md`
- **API Examples**: `API_EXAMPLES.md`
- **Swagger Guide**: `SWAGGER_DOCUMENTATION.md`
- **Quick Reference**: `SWAGGER_QUICK_REFERENCE.md`

## 🎯 Default Admin Credentials

After running the seed script:

- **Email**: `admin@portfolio.com` (or from .env)
- **Password**: `Admin@123` (or from .env)

**⚠️ Change these credentials after first login!**

## 🤝 Frontend Integration

Example API service for React/Next.js:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Use it
const { data } = await api.get("/projects");
```

See `QUICKSTART.md` for complete frontend integration examples.

## 📄 License

MIT

## 👤 Author

Darshan - [https://darshant.netlify.app](https://darshant.netlify.app)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MongoDB for the database
- Swagger/OpenAPI for documentation standards
- All open-source contributors

---

**Built with ❤️ for modern portfolio applications**
