import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";

const router = Router();

router.post("/users", (req: Request, res:Response) => {
    const {usuario, senha} = req.body;

    //Aqui vai ficar a parte de receber do FrontEnd, encriptar a senha e guardar no banco de dados

})

export default router;