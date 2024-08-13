/** @format */

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/postsite");
const postSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	content: String,
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});
const posts = new mongoose.model("posts", postSchema);
module.exports = posts;
