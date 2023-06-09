const express = require("express");
const router = express.Router();

const dummyData = {
    123: {
        name: "lian",
        age: "20",
        projects: [{ id: "12456", title: "Outreach" }],
    },
    567: {
        name: "john",
        age: "30",
        projects: [{ id: "4362sz", title: "Upgrade Web page" }],
    },
};

router.get("/:companyId", (req, res) => {
    console.log(req.path, req.method);
    const userId = req.params.companyId;

    const userData = dummyData[userId];

    if (!userData) {
        res.status(404);
        res.json({ error: "404", msg: "User not found" });
    }
    res.json(userData);
});

router.post("/", (req, res) => {
    console.log(req.path, req.method);
    res.json({ name: "lian", age: 20, msg: "Post is working" });
});

module.exports = router;
