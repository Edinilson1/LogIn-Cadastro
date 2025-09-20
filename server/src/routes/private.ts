import { Router, Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import auth from "../../middlewares/auth";

const router = Router();
const prisma = new PrismaClient();

router.get("/meusdados", auth, async (req: Request, res: Response) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: (req as any).userId },
            select: {
                id: true,
                name: true,
                email: true
            }
        });

        res.status(200).json({ message: "Dados listados", user });
    } catch(err) {
        res.status(500).json({ message: "Falha no servidor" });
    }
});

router.get("/autenticacao", auth, async (req: Request, res: Response) => {

    try {


        res.status(200).json({ authenticated: true })
    } catch(err) {

        res.status(500).json({message: "Falha no Servidor"});
        
    }
});

export default router;