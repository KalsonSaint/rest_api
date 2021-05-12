const Post = require("../models/Post");

/**
 * Fetches all posts
 */
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({
      posts,
      message: "Posts fetched successfully",
    });
  } catch (err) {
    res.json({ message: err });
  }
};

/**
 * Fetches one post
 */
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
};

/**
 * Create post
 */
exports.createPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json({
      savedPost,
      message: "Post created successfully",
    });
  } catch (err) {
    res.json({ message: err });
  }
};

/**
 * Update one post
 */
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json({ updatedPost, message: "Post updated successfully" });
  } catch (err) {
    res.json({ message: err });
  }
};

/**
 * Delete post
 */
exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.remove({ _id: req.params.postId });
    res.json({ deletePost, message: "Post deleted successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
};
