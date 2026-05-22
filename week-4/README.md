# Blog Application Backend

A RESTful backend API for a Blog Application built using Node.js, Express.js, and MongoDB. This backend handles authentication, authorization, article management, comments, and admin functionalities.

---

# Features

## Authentication
- User registration
- User login
- JWT authentication
- Role-based authorization

## User Features
- Read articles
- Comment on articles

## Author Features
- Create articles
- Edit articles
- Delete articles
- Manage authored content

## Admin Features
- View all users
- Block or deactivate users
- Manage articles
- Monitor platform activity

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- CORS
- dotenv

---

# Folder Structure

```bash
server/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│
├── utils/
│
├── .env
├── package.json
├── server.js
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/Blog-Application.git
```

---

# Navigate to Backend Folder

```bash
cd server
```

---

# Install Dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the server folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

# Run Backend Server

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

---

# API Endpoints

# Authentication Routes

## Register User

```http
POST /auth/register
```

## Login User

```http
POST /auth/login
```

## Check Authentication

```http
GET /auth/check-auth
```

---

# Article Routes

## Get All Articles

```http
GET /articles
```

## Create Article

```http
POST /articles
```

## Update Article

```http
PUT /articles/:id
```

## Delete Article

```http
DELETE /articles/:id
```

---

# Comment Routes

## Add Comment

```http
POST /comments
```

## Get Comments by Article

```http
GET /comments/:articleId
```

---

# Admin Routes

## Get All Users

```http
GET /admin/users
```

## Block User

```http
PUT /admin/block-user/:id
```

---

# Authentication & Authorization

The backend uses JWT-based authentication and role-based access control.

## Roles
- User
- Author
- Admin

Protected routes are secured using middleware.

---

# Database

MongoDB Atlas is used as the cloud database.

Collections include:
- Users
- Articles
- Comments

---

# Deployment

## Backend Hosting
Render

## Database
MongoDB Atlas

---

# Future Enhancements

- AI article summarization
- Real-time notifications
- Bookmark system
- Like and dislike feature
- Analytics dashboard
- Advanced search

---

# Author

Lasya Kandadi

---

# License

This project is developed for learning and portfolio purposes.
