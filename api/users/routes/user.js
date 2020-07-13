const express = require("express");
const router = express.Router();

const userController = require("../controller/userController");

router.post("/register", userController.registerNewUser);
router.post("/login", userController.loginUser);
router.get("/", userController.getUserDetails);
router.get("/logout", userController.userLogout);

module.exports = router;
