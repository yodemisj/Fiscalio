import client from "../db/client";
import { NotaRepository } from "../repositories/NotaRepository";
import { NotaService } from "../services/NotaService";
import { NotaController } from "../controllers/NotaController";

export class NotaFactory {
    static getInstance() {
        const notaRepository = new NotaRepository(client);
        const notaService = new NotaService(notaRepository);
        const notaController = new NotaController(notaService);
        return notaController;       
    }
}