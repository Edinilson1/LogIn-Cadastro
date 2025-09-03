import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "../../generated/prisma";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET as string;

router.post("/cadastro", async (req: Request, res:Response) => {
    try {
        const user = req.body;

        const niveldeencriptacao = await bcrypt.genSalt(10)
        const senhaencriptada = await bcrypt.hash(user.password, niveldeencriptacao)

        const userDB = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                password: senhaencriptada
            }
        });

        res.status(201).json({userDB});

    } catch(err) {
        res.status(500).json({message: "Erro no servidor"})
    }

});

router.post("/login", async (req: Request, res: Response) => {
    try {
        const userinfo = req.body;

        const user = await prisma.user.findUnique({
            where: { email: userinfo.email }
        });

        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const validade = await bcrypt.compare(userinfo.password, user.password);

        if (!validade) {
            return res.status(400).json({ message: "Senha inválida" });
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "10m" })

        res.status(200).json(token);

    } catch (err) {
        res.status(500).json({ message: "Erro no servidor" })
    }


});

export default router;