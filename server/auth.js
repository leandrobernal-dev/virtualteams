const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    try {
        console.log(req.path, req.method);
        const token = await req.headers.authorization.split([" "])[1];
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");
        const user = await decodedToken;
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};
