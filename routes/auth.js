import express from "express";
import { login, register } from "../controler/auths.js";

const routes = express.Router();

routes.post("/signup", register);
routes.post("/login", login);
export default routes;
