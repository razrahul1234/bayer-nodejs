# bayer-nodejs

Bayer Node.js API

Project Overview

This project is a Node.js-based REST API developed using Express.js. It includes user authentication, wellness goal tracking, preventive care reminders, and health tips functionalities. The application follows a modular structure with middleware, models, routes, and utility functions.

Project Structure

├── middlewares/       # Middleware functions
├── models/            # Mongoose models
├── routes/            # API route handlers
├── utils/             # Utility functions
├── .env               # Environment variables
├── index.js           # Entry point of the application

Libraries Used

1. Express.js

Express.js is a fast and minimalist web framework for Node.js that simplifies routing and middleware handling.

2. JSON Web Tokens (jsonwebtoken)

JSON Web Tokens (JWT) are used for secure authentication by generating and verifying tokens for user sessions.

3. Winston

Winston is a logging library that provides flexible and customizable logging for debugging and monitoring.

4. Bcrypt.js

Bcrypt.js is used for hashing and comparing passwords securely before storing them in the database.

5. CORS

CORS (Cross-Origin Resource Sharing) allows the API to handle requests from different origins securely.

6. Dotenv

Dotenv loads environment variables from a .env file, allowing configuration management without hardcoding values.

7. Morgan

Morgan is a request logger middleware that logs HTTP requests in a predefined format for debugging and monitoring.

API Endpoints

User Registration

POST /api/user/register

Registers a new user.

User Login

POST /api/user/login

Authenticates a user and returns a JWT token.

Get Wellness Goals by Email

GET /api/user/wellnessGoals?email=abc@gmail.com

Fetches wellness goals for the specified email.

Create/Update Wellness Goals

POST /api/user/wellnessGoals

Creates or updates a user's wellness goals.

Get Preventive Care Reminders by Email

GET /api/user/preventiveCareReminder?email=abc@gmail.com

Retrieves preventive care reminders for the specified email.

Get Health Tips by Email

GET /api/user/healthtips?email=abc@gmail.com

Fetches health tips for the specified email.

Mongoose Models

User - Stores user information and authentication details.

WellnessGoalsProgress - Tracks user wellness goals and progress.

PreventiveCareReminder - Manages preventive care reminders.

HealthTips - Stores health-related tips.

Route Management

The application uses express.Router() to define routes in separate route files. All routes are registered in routes.js and imported into index.js to centralize API management.

Installation & Setup

Clone the repository:

git clone <repository-url>
cd bayer-nodejs-api

Install dependencies:

npm install

Configure environment variables:

Create a .env file in the root directory and set required variables.

Start the application:

npm start

The server runs on http://localhost:3000 by default.

License

This project is licensed under the MIT License.
