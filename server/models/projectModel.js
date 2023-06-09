const mongoose = require("mongoose");

const projectDb = mongoose.connection.useDb("Projects");

const ProjectSchema = new mongoose.Schema({
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    title: String,
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "Users" }],
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date, default: Date.now },
});

ProjectSchema.pre("save", function (next) {
    this.updatedAt = new Date();
    next();
});

module.exports =
    mongoose.model.Projects || projectDb.model("Projects", ProjectSchema);
