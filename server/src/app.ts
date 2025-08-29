import express, { Express, Request, Response } from "express";
import cors from "cors";
//import sequelize from "../database/config/db";
import Users from "./routes/users";

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api", Users);

export default app;