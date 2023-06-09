require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const auth = require("./auth");

const dbConnect = require("./db/dbConnect");
// connect to MongoDB atlas
dbConnect();

const PORT = process.env.PORT;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/auth", require("./routes/auth"));

// protected routes
app.use("/api", auth, require("./routes/api"));

// 404
app.all("*", (req, res) => {
    res.status(404);
    res.json({ error: "404", msg: "page not found" });
});

app.use(errorHandler);
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
