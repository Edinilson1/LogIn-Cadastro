import { Router, Request, Response } from "express";

const router = Router();

router.post("/users", (req: Request, res:Response) => {
    const {usuario, senha} = req.body;

    //Aqui vai ficar a parte de receber do FrontEnd e guardar no banco de dados

})

export default router;