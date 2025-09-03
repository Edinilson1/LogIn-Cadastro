import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

interface JwtPayload {
    id: string;
    iat?: number;
    exp?: number;
}

const auth = (req: Request, res:Response, next:NextFunction) => {

    const authHeader = req.headers.authorization;


    if(!authHeader) {
        return res.status(401).json({ message: "Acesso negado" })
    }

    const token = authHeader.startsWith("Bearer ")
        ? authHeader.replace(/^Bearer\s+/i, "")
        : authHeader;


    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET) as JwtPayload;

        (req as any).userId = decoded.id;

        next();
    } catch(err) {
        return res.status(401).json({ message: "Token inválido" })
    }
    
}

export default auth;