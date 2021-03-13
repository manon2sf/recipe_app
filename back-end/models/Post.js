/**
 * models.posts.js - Posts model
 */

/* Imports */
const mongoose = require("mongoose");

/* Post Model */
const PostSchema = new mongoose.Schema({
  author: String,
  content: String,
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
