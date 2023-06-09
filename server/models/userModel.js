const mongoose = require("mongoose");

// const userDb = mongoose.createConnection("mongodb://127.0.0.1:27017/users");
const userDb = mongoose.connection.useDb("users");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email"],
        unique: [true, "Email already exist"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    firstName: String,
    lastName: String,
    title: String,
    isSubscribed: {
        type: Boolean,
        default: false,
    },
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre("save", function (next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model.Users || userDb.model("Users", UserSchema);
