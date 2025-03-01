# 🌟 Bayer Node.js API

## 📌 Project Overview
This project provides a set of RESTful APIs for managing user authentication, wellness goals, preventive care reminders, and health tips.

## 📁 Project Structure

## 📂 Bayer-NodeJS-API  
│── 📂 middlewares        # Middleware functions  
│── 📂 models             # Mongoose models (Schema definitions)  
│── 📂 routes             # API route handlers  
│── 📂 utils              # Utility functions  
│── 📄 .env               # Environment variables  
│── 📄 index.js           # Entry point of the application  
│── 📄 package.json       # Dependencies and scripts  
└── 📄 README.md          # Project documentation  

# 📦 Dependencies Used
🔹Express.js\
A fast and minimalist web framework for Node.js used for building APIs efficiently.


🔹 JSON Web Tokens (JWT)\
Used for securely authenticating users and managing authorization through token-based authentication.


🔹 Winston\
A powerful logging library for Node.js that helps in logging error messages and application activities.

🔹 Bcrypt.js\
A password hashing library used to securely store user passwords in a hashed format.


🔹 CORS\
A middleware for enabling Cross-Origin Resource Sharing (CORS) to allow frontend applications to access the APIs.


🔹 Dotenv\
Used for loading environment variables from a .env file into process.env, making configuration management easier.


🔹 Morgan\
A logging middleware for HTTP requests, helping in monitoring API calls with detailed logs.


# 🚀 API Endpoints

# 🔐 User Authentication
1️⃣ Register User\
POST - /api/user/register\
Registers a new user in the system.

2️⃣ User Login\
POST - /api/user/login\
Authenticates the user and returns a JWT token.


📊 Wellness Goals\
3️⃣ Get Wellness Goals\
GET /api/user/wellnessGoals?email=abc@gmail.com\
Fetches wellness goals for the given user.\
4️⃣ Update Wellness Goals
POST - /api/user/wellnessGoals
Updates wellness goals for a user.

🩺 Preventive Care\
5️⃣ Get Preventive Care Reminders\
GET - /api/user/preventiveCareReminder?email=abc@gmail.com\
Fetches preventive care reminders for the user.\

💡 Health Tips\
6️⃣ Get Health Tips\
GET /api/user/healthtips?email=abc@gmail.com\
Fetches personalized health tips for the user.\

# 📌 Database Models (Mongoose)
The project includes the following MongoDB models using Mongoose:

1️⃣ User – Stores user credentials, profile information, and authentication details.\
2️⃣ HealthTips – Contains curated health tips for users.\
3️⃣ PreventiveCareReminder – Stores reminders related to preventive care appointments and checkups.\
4️⃣ WellnessGoalsProgress – Tracks users' progress toward achieving their wellness goals.\

# 🛠️ Project Setup & Installation
🔹 Prerequisites\
Node.js (v14+ recommended)\
MongoDB (running via cloud service like MongoDB Atlas)\

🔹 Installation Steps\
1️⃣ Clone the repository:\
git clone https://github.com/your-repo/bayer-nodejs-api.git\
cd bayer-nodejs-api\

2️⃣ Install dependencies:\
npm install\

3️⃣ Create a .env file and configure environment variables:\
PORT=5000  \
MONGO_URI=your_mongodb_connection_string  \
JWT_SECRET=your_jwt_secret_key\  

4️⃣ Start the server:\
npm start\

5️⃣ API will be available at:\
http://localhost:5000\

  # 📌 Routing Structure
Express Router is used to structure the API endpoints.\
routes.js acts as a central hub where all routes are registered and imported into index.js.

const express = require('express');
const userRoutes = require('./routes/userRoutes');

const router = express.Router();

router.use('/api/user', userRoutes);

module.exports = router;

# 📜 License
This project is licensed under the MIT License.\

# 🤝 Contributing
Feel free to contribute! Open issues or submit pull requests to improve the project.\

# 🎯 Happy Coding! 🚀\
This README.md follows best practices, is visually structured, and provides clarity for developers setting up or using your Node.js API. \Let me know if you need further customizations! 😃
