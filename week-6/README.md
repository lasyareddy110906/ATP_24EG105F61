# Employee Database Management System

A simple full-stack Employee Database Management System that allows users to create, view, and delete employee records efficiently.

---

# Features

- Add new employees
- View all employee records
- Delete employee details
- Responsive user interface
- REST API integration
- Real-time database updates

---

# Tech Stack

## Frontend
- React.js
- Axios
- CSS / Bootstrap

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

---

# Folder Structure

```bash
Employee-Database/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/Employee-Database.git
```

## Navigate to Project Folder

```bash
cd Employee-Database
```

---

# Backend Setup

## Navigate to Server Folder

```bash
cd server
```

## Install Dependencies

```bash
npm install
```

## Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

## Start Backend Server

```bash
npm run dev
```

---

# Frontend Setup

## Navigate to Client Folder

```bash
cd client
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

---

# API Endpoints

## Employee Routes

### Create Employee

```http
POST /employees
```

### Get All Employees

```http
GET /employees
```

### Delete Employee

```http
DELETE /employees/:id
```

---

# Employee Details

The application stores:

- Employee Name
- Employee ID
- Department
- Position
- Salary
- Email

---

# Deployment

## Frontend
Deployed using Vercel

## Backend
Deployed using Render

## Database
MongoDB Atlas

---

# Future Enhancements

- Update employee details
- Employee search functionality
- Authentication and authorization
- Pagination
- Sorting and filtering
- Admin dashboard

---

# Author

Lasya Kandadi

---

# License

This project is developed for learning and portfolio purposes.
