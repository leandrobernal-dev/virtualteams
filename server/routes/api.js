const express = require("express");
const { handleNewProject } = require("../controllers/newProjectController");
const { handleGetUserData } = require("../controllers/getUserData");
const router = express.Router();

router.get("/", handleGetUserData);
router.post("/newproject", handleNewProject);

module.exports = router;
