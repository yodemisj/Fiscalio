import { Request, Response } from "express";
import { NotaFiscalDTO } from "../dtos/NotaFiscalDTO";

export interface INotaController {
    index(req: Request, res: Response): void;
    create(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    find(req: Request, res: Response): Promise<NotaFiscalDTO>;
    read(req: Request, res: Response): Promise<NotaFiscalDTO[]>;
}