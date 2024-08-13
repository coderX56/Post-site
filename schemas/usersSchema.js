/** @format */

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/postsite");
const usersSchema = new mongoose.Schema({
	name: String,
	username: String,
	age: Number,
	email: String,
	password: String,
	profilepic: { type: String, default: "default.svg" },
	posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "posts" }],
});
const users = new mongoose.model("Users", usersSchema);
module.exports = users;
