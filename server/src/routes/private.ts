import { Router, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const router = Router();
const prisma = new PrismaClient();

router.get("/listadeusuarios", async (req: Request, res:Response) => {
    try {
        const users = await prisma.user.findMany({ omit: { password: true } });

        res.status(200).json({ message: "Usuários listados", users })
    } catch(err) {
        res.status(500).json({ message: "Falha no servidor" })
    }
});

export default router;