import Post from "../models/posts.js";

export const createPost = async (req, res) => {
  try {
    const posts = Post(req.body);
    const savedPost = await posts.save();
    res.json(savedPost);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.send("the post is sussfully delated");
  } catch (error) {
    res.status(500).json(error);
  }
};
