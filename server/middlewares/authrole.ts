import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../generated/prisma";
import auth from "./auth";

const prisma = new PrismaClient();

export const authRole = (role?: "admin") => {
  return async (req: Request, res: Response, next: NextFunction) => {
    auth(req, res, async () => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: (req as any).userId },
        });

        if (!user) {
          return res.status(401).json({ message: "Usuário não encontrado" });
        }

        if (role === "admin" && !user.isAdmin) {
          return res.status(403).json({ message: "Acesso negado" });
        }

        next();
      } catch {
        return res.status(500).json({ message: "Erro no servidor" });
      }
    });
  };
};