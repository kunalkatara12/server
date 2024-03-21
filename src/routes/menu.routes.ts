import { Router } from "express";
import { menuControllers } from "../controllers/menu.controllers";

const menuRoutes = Router();
menuRoutes.get("/",menuControllers);
export default menuRoutes;