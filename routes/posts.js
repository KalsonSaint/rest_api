const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");

// Controller Methods
const { getPosts, getOnePost, createPost, updatePost, deletePost } =
  PostController;

/**
 * Routes Endpoint
 */

// Fetch all posts
router.get("/", getPosts);

// Fetch One Post
router.get("/:postId", getOnePost);

// Create a post
router.post("/", createPost);

// Update Post
router.patch("/:postId", updatePost);

// Delete Post
router.delete("/:postId", deletePost);

module.exports = router;
