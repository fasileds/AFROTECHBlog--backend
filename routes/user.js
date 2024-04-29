import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controler/user.js";

const routes = express.Router();

routes.get("/", getUsers);
routes.put("/update", updateUser);
routes.get("/:id", getUser);
routes.delete("/delete/:id", deleteUser);
export default routes;
