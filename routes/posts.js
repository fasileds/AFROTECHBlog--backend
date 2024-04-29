import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controler/posts.js";

const routes = express.Router();

routes.get("/", getPosts);
routes.get("/:id", getPost);
routes.post("/createPost", createPost);
routes.put("/updatePost/:id", updatePost);
routes.delete("/deletePost/:id", deletePost);
export default routes;
