import { Router } from "express"
import menuRoutes from "./menu.routes";
import mainRoutes from "./main.routes";


const router = Router();
router.use("/menu", menuRoutes)
router.use("/main",mainRoutes);
export default router;