const express = require("express");
const auth = require("../middlewares/auth");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/register", userController.registerUser);

router.post("/login", userController.loginUser);

//router.get("/me", auth, userController.getUserInfo);

module.exports = router;
