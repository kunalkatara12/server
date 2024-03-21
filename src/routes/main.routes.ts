import { Router } from "express";
import { mainControllers } from "../controllers/api.controllers";

const mainRoutes = Router();
mainRoutes.get("/", mainControllers);

export default mainRoutes;