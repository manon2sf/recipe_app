/**
 * controllers/post - Posts controller
 */

/* Model import */
const Post = require("../models/Post");

/* Post controller */
const posts = {
  /* Get all posts */
  getPosts: (req, res) => {
    Post.find({}, (error, data) => {
      if (error) {
        res.status(500).json({
          success: false,
          msg: "An error has occured getting posts.",
        });
        return;
      }

      res.json({
        posts: data,
      });
    });
  },

  /* Create posts */
  createPost: (req, res) => {
    console.log(req.body);
    const [author, content] = [req.body.author, req.body.content];

    if (!author || !content) {
      res.status(400).json({
        success: false,
        msg: "author and content are both required",
      });
    }

    const newPost = new Post({
      author: author,
      content: content,
    });

    newPost.save((error) => {
      if (error) {
        res.status(500).json({
          success: false,
          msg: "An error has occured during post creation.",
        });
        return;
      }

      res.status(200).json({
        success: true,
      });
    });
  },
};

module.exports = posts;
