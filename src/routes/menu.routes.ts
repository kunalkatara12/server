import { Router } from "express";
import { menuControllers } from "../controllers/api.controllers";

const menuRoutes = Router();
menuRoutes.get("/", menuControllers);

export default menuRoutes;