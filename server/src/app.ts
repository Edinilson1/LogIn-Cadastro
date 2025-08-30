import express, { Express, Request, Response } from "express";
import cors from "cors";
import PuUsers from "./routes/public";
import PrUsers from "./routes/private";
import auth from "../middlewares/auth"

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api", PuUsers);
app.use("/api", auth, PrUsers);

export default app;