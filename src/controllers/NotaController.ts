import { INotaService } from "../services/INotaService";
import { INotaController } from "./INotaController";
import { Request, Response } from "express";

export class NotaController implements INotaController{
    constructor(private readonly service: INotaService) {}

    index(req: Request, res: Response) {
        res.status(200).sendFile('../views/nota/index.html');
    }

    async create(req: Request, res: Response) {
        const { emissor, data } = req.body;
        await this.service.create( { emissor, data } );
        res.status(201);
    }

    async update(req: Request, res: Response){
        const id  = parseInt(req.params.id);
        const { emissor, data } = req.body;

        if(!id) res.status(400).send('id required!');

        await this.service.update(id, {emissor, data});

        res.status(200);
    }

    async delete(req: Request, res: Response){
        const id  = parseInt(req.params.id);

        if(!id) res.status(400).send('id required!');

        await this.service.delete(id);
    }

    async find(req: Request, res: Response){
        const id  = parseInt(req.params.id);

        if(!id) res.status(400).send('id required!');

        const nota = await this.service.find(id);

        return nota;
    }

    async read(req: Request, res: Response){
        const notas = await this.service.read();
        return notas;
    }
}