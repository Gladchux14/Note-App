### Note-Taking API with TypeScript and Authentication
This Poject implements a secure note-taking API with user authentication using TypeScript, Express, and MongoDB.

### Key Features
- TypeScript implementation with proper interfaces and type safety
- JWT-based authentication with protected routes
- Password hashing using bcrypt
- Request validation using Joi schemas
- MongoDB integration with Mongoose
- User-specific note management


### API Endpoints

| Method  | Endpoint                        | Description             | Authentication Required| Request Body                                           |
|---------|---------------------------------|-------------------------|------------------------|-------------------------------------------------------|
| POST    | /api/auth/register              | Register new user       | No                     | { name: string, email: string, password: string, phone: number } |
| POST    | /api/auth/login                 | Login user              | No                     | { email: string, password: string }                  |
| GET     | /api/v1/notes                   | Get all user notes      | Yes                    | -                                                     |
| POST    | /api/v1/notes                   | Create new note         | Yes                    | { title: string, content: string, category: ObjectId, type: string } |
| GET     | /api/v1/notes/:id               | Get note by ID          | Yes                    | -                                                     |
| PUT     | /api/v1/notes/:id               | Update note (full)      | Yes                    | { title: string, content: string, category: ObjectId, type: string } |
| PATCH   | /api/v1/notes/:id               | Update note (partial)   | Yes                    | { title?: string, content?: string, category?: ObjectId, type?: string } |
| DELETE  | /api/v1/notes/:id               | Delete note             | Yes                    | -                                                     |
| GET     | /api/v1/notes/category/:categoryId| Get notes by category| Yes                    | -                                                     |


### Authentication
- Bearer token required in Authorization header for protected routes
- Format: Authorization: Bearer <jwt_token>
- Token expiration: 24 hours

### Validation
- Registration: validates name, email format, password length, phone
- Login: validates email and password presence
- Notes: validates title, content, category (valid ObjectId), and type
- Categories: validates name and description

### Error Handling
- 400: Bad Request (validation errors)
- 401: Unauthorized (invalid/missing token)
- 404: Not Found (resource not found)
- 500: Server Error (internal errors)

Required to launch development
Node.js 14+
MongoDB (local or Atlas)
pnpm package manager
