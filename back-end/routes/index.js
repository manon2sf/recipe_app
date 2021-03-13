/**
 * routes/index.js - Main router file
 */

/* Module Imports */
const express = require("express");
const router = express.Router();

/* Controllers */
const post = require("../controllers/post");

/**
 *   Routes
 */

/* GET posts */
router.get("/posts", post.getPosts);

/* POST post */
router.post("/post", post.createPost);

module.exports = router;
