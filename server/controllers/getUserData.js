const Projects = require("../models/projectModel");

const handleGetUserData = async (req, res) => {
    try {
        const projects = await Projects.where("createdBy").equals(
            req.user.userId
        );
        console.log(projects);
        res.status(200).send({
            message: "Success",
            user: req.user,
            projects: projects,
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { handleGetUserData };
