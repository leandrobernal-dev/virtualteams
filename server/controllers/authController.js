const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const handleLogin = (req, res) => {
    console.log(req.path);
    console.log(req.body.password);
    console.log(req.body.email);
    // Check if email Exists
    User.findOne({ email: req.body.email })
        .then((user) => {
            // if user exists compare password with bcrypt
            bcrypt
                .compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    // check if password matches
                    if (!passwordCheck) {
                        return res.status(400).send({
                            message: "Email or Password Incorrect!",
                        });
                    }
                    // create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "1hr" }
                    );

                    // return success response
                    res.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                .catch((e) => {
                    res.status(400).send({
                        message: "Email or Password Incorrect!",
                    });
                });
        })
        .catch((e) => {
            res.status(404).send({
                message: "Email or Password Incorrect!",
                e,
            });
        });
};
const handleNewUser = (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new User({
                email: req.body.email,
                password: hashedPassword,
            });
            // create JWT token
            const token = jwt.sign(
                {
                    userId: user._id,
                    userEmail: user.email,
                },
                "RANDOM-TOKEN",
                { expiresIn: "1hr" }
            );
            user.save()
                .then((result) => {
                    res.status(201).send({
                        message: "User Created Successfully",
                        result,
                        token,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating new User",
                        error,
                    });
                });
        })
        .catch((e) => {
            res.status(500).send({
                message: "Error creating new User",
                e,
            });
        });
};

module.exports = { handleNewUser, handleLogin };
