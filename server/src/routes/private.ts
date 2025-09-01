import { Router, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const router = Router();
const prisma = new PrismaClient();

export default router;