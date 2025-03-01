const express = require("express");
const router = express.Router();

router.use(express.json());

const userRouter = require("./routes/userRoutes");
router.use('/user', userRouter);

module.exports = router;