# Swagger API Documentation Guide

## 📚 Overview

Your Portfolio API now includes comprehensive Swagger/OpenAPI documentation that provides:

- Interactive API testing interface
- Complete endpoint documentation
- Request/response schemas
- Authentication testing
- Live API examples

## 🚀 Accessing the Documentation

### Local Development

```
http://localhost:5000/api-docs
```

### Production

```
https://your-domain.com/api-docs
```

### JSON Specification

```
http://localhost:5000/api-docs.json
```

## 📦 Installation

The Swagger packages are already added to your `package.json`. Install them:

```bash
npm install
```

New dependencies added:

- `swagger-jsdoc`: Generates OpenAPI specs from JSDoc comments
- `swagger-ui-express`: Serves the Swagger UI

## 🎯 Features

### 1. **Interactive API Testing**

- Test all endpoints directly from the browser
- No need for Postman or cURL
- See real responses immediately

### 2. **Authentication Support**

- Built-in JWT token management
- Authorize once, use for all protected endpoints
- Clear indication of which endpoints require auth

### 3. **Complete Schemas**

- All request/response models documented
- Field types, validations, and examples
- Enum values for status fields

### 4. **Organized by Tags**

- Authentication
- Projects
- Blogs
- Skills

## 🔐 How to Use Authentication in Swagger

### Step 1: Login to Get Token

1. Navigate to `http://localhost:5000/api-docs`
2. Find the **Authentication** section
3. Expand `POST /api/auth/login`
4. Click **Try it out**
5. Enter credentials:

```json
{
  "email": "admin@portfolio.com",
  "password": "Admin@123"
}
```

6. Click **Execute**
7. Copy the `accessToken` from the response

### Step 2: Authorize Swagger

1. Click the **Authorize** button (lock icon) at the top right
2. In the popup, enter: `Bearer YOUR_ACCESS_TOKEN`
3. Click **Authorize**
4. Click **Close**

### Step 3: Access Protected Endpoints

Now you can test any protected endpoint (marked with a lock icon) without manually adding the token each time.

## 📝 Example Usage

### Testing Project Creation

1. **Authorize** first (see above)
2. Navigate to **Projects** section
3. Expand `POST /api/projects`
4. Click **Try it out**
5. Modify the example JSON:

```json
{
  "title": "My Awesome Project",
  "description": "A detailed description of my project",
  "technologies": ["React", "Node.js", "MongoDB"],
  "liveUrl": "https://myproject.com",
  "githubUrl": "https://github.com/me/myproject",
  "status": "completed",
  "featured": true,
  "order": 1
}
```

6. Click **Execute**
7. View the response below

### Testing Blog Retrieval

1. Navigate to **Blogs** section
2. Expand `GET /api/blogs`
3. Click **Try it out**
4. Set query parameters:
   - page: 1
   - limit: 10
   - status: published
   - featured: true
5. Click **Execute**
6. See paginated results

## 🎨 Swagger UI Customization

The Swagger UI is customized in `src/app.js`:

```javascript
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Portfolio API Documentation",
    customfavIcon: "/assets/favicon.ico",
  })
);
```

### Available Customization Options:

- `customCss`: Custom CSS styles
- `customSiteTitle`: Browser tab title
- `customfavIcon`: Favicon URL
- `customJs`: Custom JavaScript
- `swaggerOptions`: Swagger UI configuration

## 📋 API Documentation Structure

### OpenAPI 3.0 Specification

Location: `src/config/swagger.js`

```javascript
{
  openapi: '3.0.0',
  info: { ... },
  servers: [ ... ],
  components: {
    securitySchemes: { ... },
    schemas: { ... },
    responses: { ... }
  },
  tags: [ ... ]
}
```

### Route Documentation

Each route file contains JSDoc comments:

```javascript
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody: ...
 *     responses: ...
 */
router.post("/login", validate(loginValidator), login);
```

## 🔧 Adding New Endpoints to Swagger

### Step 1: Add JSDoc Comment

```javascript
/**
 * @swagger
 * /api/your-endpoint:
 *   get:
 *     summary: Describe your endpoint
 *     tags: [YourTag]
 *     parameters:
 *       - in: query
 *         name: paramName
 *         schema:
 *           type: string
 *         description: Parameter description
 *     responses:
 *       200:
 *         description: Success response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: string
 */
router.get("/your-endpoint", controller);
```

### Step 2: Define Schema (if needed)

In `src/config/swagger.js`:

```javascript
YourModel: {
  type: 'object',
  required: ['field1', 'field2'],
  properties: {
    field1: {
      type: 'string',
      example: 'Example value'
    },
    field2: {
      type: 'number',
      example: 42
    }
  }
}
```

### Step 3: Restart Server

```bash
npm run dev
```

Changes will be reflected immediately at `/api-docs`

## 🎯 Best Practices

### 1. **Always Document New Endpoints**

Every new route should have Swagger documentation

### 2. **Use Schema References**

Instead of repeating definitions:

```javascript
schema: $ref: "#/components/schemas/Project";
```

### 3. **Provide Examples**

Include realistic examples in your schemas:

```javascript
email: {
  type: 'string',
  format: 'email',
  example: 'user@example.com'
}
```

### 4. **Document All Response Codes**

```javascript
responses:
  200: { description: 'Success' }
  400: { description: 'Bad Request' }
  401: { description: 'Unauthorized' }
  404: { description: 'Not Found' }
  500: { description: 'Server Error' }
```

### 5. **Group Related Endpoints**

Use tags to organize:

```javascript
tags: [Authentication];
tags: [Projects];
tags: [Blogs];
tags: [Skills];
```

## 🌐 Exporting Documentation

### Export as JSON

```bash
curl http://localhost:5000/api-docs.json > api-docs.json
```

### Export as YAML

Use online converters or tools:

- [Swagger Editor](https://editor.swagger.io/)
- [API Transformer](https://apimatic.io/transformer)

### Generate Client SDKs

Use [OpenAPI Generator](https://openapi-generator.tech/):

```bash
openapi-generator-cli generate \
  -i http://localhost:5000/api-docs.json \
  -g javascript \
  -o ./client-sdk
```

## 📱 Mobile App Integration

Share the OpenAPI spec with mobile developers:

```
http://your-api-domain.com/api-docs.json
```

They can use it to generate type-safe API clients for:

- iOS (Swift)
- Android (Kotlin/Java)
- React Native
- Flutter

## 🔍 Testing Tips

### 1. **Test Happy Paths**

Try successful requests first to ensure basic functionality

### 2. **Test Error Cases**

- Missing required fields
- Invalid data types
- Unauthorized access
- Not found resources

### 3. **Test Edge Cases**

- Empty arrays
- Very long strings
- Special characters
- Boundary values (0, 100, -1)

### 4. **Test Pagination**

- First page
- Last page
- Page beyond total
- Different limit values

## 🚨 Common Issues

### Issue: Swagger UI Not Loading

**Solution:** Check if swagger packages are installed:

```bash
npm install swagger-jsdoc swagger-ui-express
```

### Issue: Routes Not Appearing

**Solution:** Verify the `apis` path in `swagger.js`:

```javascript
apis: ["./src/routes/*.js"];
```

### Issue: Schema Not Found

**Solution:** Check schema name matches exactly:

```javascript
$ref: "#/components/schemas/Project"; // Correct
$ref: "#/components/schemas/project"; // Wrong (case-sensitive)
```

### Issue: Authorization Not Working

**Solution:**

1. Ensure token format is: `Bearer <token>`
2. Check token hasn't expired
3. Verify JWT_SECRET matches

## 📊 Advanced Features

### Custom Response Headers

```javascript
responses:
  200:
    description: Success
    headers:
      X-Rate-Limit:
        schema:
          type: integer
        description: Requests per hour
```

### File Upload Documentation

```javascript
requestBody:
  content:
    multipart/form-data:
      schema:
        type: object
        properties:
          file:
            type: string
            format: binary
```

### Multiple Examples

```javascript
examples:
  example1:
    value: { ... }
    summary: First example
  example2:
    value: { ... }
    summary: Second example
```

## 🎓 Learn More

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger UI Configuration](https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md)
- [swagger-jsdoc Documentation](https://github.com/Surnet/swagger-jsdoc)

## 📞 Support

For issues or questions:

1. Check this documentation
2. Review the OpenAPI spec
3. Test with Postman
4. Check server logs

---

**Your API is now fully documented and ready to share with frontend developers and other team members!** 🎉
