const Project = require("../models/projectModel");

const handleNewProject = (req, res) => {
    console.log(req);
    const newProject = new Project({
        createdBy: req.user.userId,
        title: req.body.newProjectTitle,
        description: req.body.newProjectDescription,
    });

    newProject
        .save()
        .then((result) => {
            res.status(201).send({
                message: "Project Created Successfully",
                result,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send({
                message: "Error Creating New Project",
                error,
            });
        });
};

module.exports = { handleNewProject };
