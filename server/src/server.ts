import express, { Express, Request, Response } from "express";
import cors from "cors";
import sequelize from "../database/config/db";

const app: Express = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

let PORT: number = 3000;

app.listen(PORT, () => {
    console.log(`Rodando na porta http://localhost:${PORT}`)
});