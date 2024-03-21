import express, { Express } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.routes";
config();
const app: Express = express();
//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// remove this middleware in production
app.use(morgan("dev"));
app.use('/api/v1',router);
export default app;
