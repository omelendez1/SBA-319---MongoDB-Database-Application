# 📚 Book Tracker API

A lightweight RESTful API built with **Node.js**, **Express**, and **MongoDB** (via **Mongoose**) to manage a book collection. It supports full CRUD operations, enforces data validation, and uses indexing for efficient querying.

---
## 🚀 Quick Start

### 🔧 Requirements
- Node.js
- MongoDB Atlas account
- Git

### 🛠 Setup

```bash
git clone <your-repo-url>
cd book-tracker
npm install
```

Create a `.env` file with the following content:

```env
MONGODB_URI=your-mongodb-uri
PORT=3000
```

Start the server:

```bash
npm start
```

> Server runs at `http://localhost:3000`

---

## 📘 API Overview

### 🔹 POST `/api/books`  
Create a new book  
**Required fields:** `title`, `author`, `genre`, `status`

### 🔹 GET `/api/books`  
List all books (optional filters: `title`, `author`)

### 🔹 GET `/api/books/:id`  
Get book details by ID

### 🔹 PUT `/api/books/:id`  
Update an existing book

### 🔹 DELETE `/api/books/:id`  
Remove a book by ID

---

## ✅ Schema Validation

- All fields are **required**
- `status` must be one of: `available`, `borrowed`, `reserved`
- Enforced via Mongoose schema

---

## ⚡ Performance

- Compound index on `{ title: 1, author: 1 }`  
  Enables efficient search and filtering.

---

## 📁 Project Structure

```
book-tracker/
├── models/       # Mongoose schema
├── routes/       # CRUD route logic
├── app.js        # Entry point  
├── package.json
└── README.md
```

---

## 🧠 Future Enhancements

- Pagination & sorting
- User authentication
- Front-end interface (React or EJS)

