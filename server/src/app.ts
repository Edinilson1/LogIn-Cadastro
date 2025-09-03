import express, { Express, Request, Response } from "express";
import cors from "cors";
import PuUsers from "./routes/public";
import PrUsers from "./routes/private";
import admin from "./routes/admin";
import { authRole } from "../middlewares/authrole";
import auth from "../middlewares/auth"

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api", PuUsers);
app.use("/api", auth, PrUsers);
app.use("/api", authRole("admin"), admin);

export default app;