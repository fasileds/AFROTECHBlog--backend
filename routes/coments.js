import express from "express";
import {
  UpdateComent,
  createComent,
  deleateComent,
  getComent,
  getComents,
} from "../controler/coments.js";
const routes = express.Router();

routes.get("/", getComents);
routes.get("/:id", getComent);
routes.post("/createComent", createComent);
routes.put("/updateComent/:id", UpdateComent);
routes.delete("/deleteComent/:id", deleateComent);

export default routes;
