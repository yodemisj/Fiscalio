import { Router, Request, Response } from "express";
import nota from "./nota";

const route = Router();

route.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
});

route.use(nota);

export default route;
