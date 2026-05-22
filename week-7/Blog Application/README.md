# Blog Application

A full-stack MERN Blog Application with role-based authentication and authorization. The platform supports three different roles: User, Author, and Admin, each with specific permissions and functionalities.

## Features

### User
- Register and login securely
- View all published articles
- Read article details
- Comment on articles
- View profile information

### Author
- Create new blog articles
- Edit existing articles
- Delete articles
- View all authored posts
- Manage personal content

### Admin
- View all users and authors
- Block or deactivate users
- Manage articles
- Monitor platform activity

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap / CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- Role-Based Access Control

---

## Folder Structure

```bash
Blog-Application/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Blog-Application.git
```

### Navigate to Project

```bash
cd Blog-Application
```

---

# Backend Setup

### Navigate to Server Folder

```bash
cd server
```

### Install Dependencies

```bash
npm install
```

### Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Start Backend Server

```bash
npm run dev
```

---

# Frontend Setup

### Navigate to Client Folder

```bash
cd client
```

### Install Dependencies

```bash
npm install
```

### Start Frontend

```bash
npm run dev
```

---

## API Endpoints

### Authentication
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/check-auth`

### Articles
- `GET /articles`
- `POST /articles`
- `PUT /articles/:id`
- `DELETE /articles/:id`

### Comments
- `POST /comments`
- `GET /comments/:articleId`

### Admin
- `GET /admin/users`
- `PUT /admin/block-user/:id`

---

## Role Permissions

| Feature | User | Author | Admin |
|---|---|---|---|
| Read Articles | Yes | Yes | Yes |
| Comment | Yes | Yes | Yes |
| Create Articles | No | Yes | Yes |
| Edit Articles | No | Yes | Yes |
| Delete Articles | No | Yes | Yes |
| Manage Users | No | No | Yes |

---

## Screenshots

- Home Page
- Login/Register
- Author Dashboard
- Admin Dashboard
- Article Details

---

## Deployment

### Frontend
Deployed using Vercel

### Backend
Deployed using Render

### Database
MongoDB Atlas

---

## Future Enhancements

- Real-time notifications
- Bookmark articles
- Like and dislike system
- Personalized recommendations
- Advanced analytics dashboard

---

## Author

Lasya Kandadi

---

## License

This project is developed for learning and portfolio purposes.
