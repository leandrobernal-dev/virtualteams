const express = require("express");
const router = express.Router();
const { handleNewUser, handleLogin } = require("../controllers/authController");

router.post("/register", handleNewUser);
router.post("/login", handleLogin);

module.exports = router;
