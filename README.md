# 💬 Real-Time Chat Application

A full-stack real-time chat application built using the **MERN Stack** with **Socket.io** for instant messaging. Users can authenticate securely, update their profiles, send text/image messages, and see online users in real time.

---

## 🚀 Features

### Authentication
- User Signup
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing (bcrypt)

### Real-Time Chat
- One-to-One Messaging
- Instant Message Delivery using Socket.io
- Online/Offline User Status
- Persistent Chat History

### Media Sharing
- Send Images
- Cloudinary Image Storage

### Profile
- Update Profile Picture
- View User Details

### UI
- Responsive Design
- Sidebar with User List
- Chat Window
- Right Sidebar (Profile Information)

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Axios
- React Router DOM
- Context API
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT Authentication
- bcrypt
- Cloudinary

---

# 📁 Project Structure

```
REAL-TIME-CHAT-APP
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Sidebar.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   └── RightSidebar.jsx
│   │   │
│   │   ├── context
│   │   ├── lib
│   │   ├── pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   └── package.json
│
├── server
│   ├── controllers
│   ├── lib
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

---

# 🏗️ Architecture

```
React Frontend
      │
Axios API Calls
      │
Express Server
      │
Routes
      │
Controllers
      │
Models
      │
MongoDB
```

### Real-Time Communication

```
User A
   │
Socket.io
   │
Node Server
   │
Socket.io
   │
User B
```

---

# ⚙️ Backend Architecture

The backend follows the **MVC (Model-View-Controller)** architecture.

## Routes

Responsible for mapping API endpoints.

Example:

```
POST /api/auth/login
GET /api/messages/:id
POST /api/messages/send/:id
```

---

## Controllers

Contain the business logic.

Examples:

- Login User
- Signup User
- Update Profile
- Send Message
- Get Messages

---

## Models

MongoDB schemas using Mongoose.

### User Model

- Name
- Email
- Password
- Profile Picture

### Message Model

- Sender
- Receiver
- Text
- Image
- Timestamp

---

## Middleware

Authentication middleware verifies JWT before allowing access to protected routes.

```
Request
   │
JWT Verification
   │
Controller
```

---

## lib

Reusable utilities.

- MongoDB Connection
- Cloudinary Configuration
- JWT Helper Functions

---

# 💻 Frontend Architecture

```
main.jsx
    │
App.jsx
    │
Pages
    │
Components
```

### Pages

- Login
- Home
- Profile

### Components

- Sidebar
- Chat Container
- Right Sidebar

### Context API

Used for global state management such as:

- Logged-in User
- Authentication State
- Chat State

---

# 🔄 Request Flow

```
User Login
     │
Axios Request
     │
Express Route
     │
Controller
     │
MongoDB
     │
JWT Generated
     │
Response
     │
React Stores User
```

---

# 💬 Message Flow

```
User Sends Message
        │
React
        │
POST Request
        │
Controller
        │
MongoDB
        │
Socket.io Emit
        │
Receiver Receives Event
        │
UI Updates Instantly
```

---

# 🔒 Authentication Flow

```
Signup/Login
      │
Password Hashing
      │
JWT Generation
      │
Client Stores Token
      │
Authenticated Requests
```

---

# 🌐 REST API Endpoints

## User

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /api/auth/signup | Register User |
| POST | /api/auth/login | Login User |
| GET | /api/auth/check | Check Authentication |
| PUT | /api/auth/update-profile | Update Profile |

---

## Messages

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /api/messages/:id | Get Chat Messages |
| POST | /api/messages/send/:id | Send Message |

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/real-time-chat-app.git
```

```
cd real-time-chat-app
```

---

## Backend Setup

```
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start Backend

```
npm run server
```

or

```
npm start
```

---

## Frontend Setup

```
cd client
npm install
```

Create `.env`

```env
VITE_BACKEND_URL=http://localhost:5000
```

Run Frontend

```
npm run dev
```

---

# 🚀 Future Improvements

- Group Chat
- Message Seen Status
- Typing Indicators
- Voice Messages
- Video Calling
- File Sharing
- Emoji Support
- Notifications
- Message Search
- Dark Mode

---

# 📚 Concepts Used

- REST APIs
- MVC Architecture
- JWT Authentication
- bcrypt Password Hashing
- Socket.io
- MongoDB
- Mongoose
- Context API
- Express Middleware
- Cloudinary Image Upload
- Protected Routes
- CRUD Operations

---

# 🎯 Learning Outcomes

This project demonstrates:

- Full-Stack MERN Development
- REST API Design
- Authentication & Authorization
- Real-Time Communication
- MongoDB Data Modeling
- Socket.io Integration
- Cloud Image Storage
- Client-Server Architecture
- MVC Design Pattern
- State Management using Context API

---

# 👨‍💻 Author

**Sanchit Gupta**

- GitHub: https://github.com/sanchit-web
- LinkedIn: www.linkedin.com/in/sanchit-gupta-b02755257

---

## ⭐ If you found this project useful, consider giving it a Star!
