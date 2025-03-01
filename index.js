const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const logger = require("./utils/logger");
const connectDb = require("./utils/db");
connectDb();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS
app.use(morgan("dev")); // Log HTTP requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

//routes
const routes = require("./routes");

app.use('/api', routes);

// // Sample Route
// app.get("/", (req, res) => {
//   res.send({ message: "Welcome to Express Server!" });
// });

// // Sample Route with Error
// app.get("/error", (req, res, next) => {
//   const error = new Error("Something went wrong!");
//   error.status = 500;
//   next(error);
// });

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
