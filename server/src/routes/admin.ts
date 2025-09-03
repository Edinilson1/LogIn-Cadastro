import { Router, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { authRole } from "../../middlewares/authrole";

const router = Router();
const prisma = new PrismaClient();

router.get("/listadeusuarios", authRole("admin"), async (req: Request, res:Response) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                criado_em: true
            }
        });

        res.status(200).json({ message: "Usuários listados", users })
    } catch(err) {
        res.status(500).json({ message: "Falha no servidor" })
    }
});

export default router;