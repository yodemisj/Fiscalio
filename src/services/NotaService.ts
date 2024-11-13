import { CreateNotaFiscalDTO, NotaFiscalDTO, UpdateNotaFiscalDTO } from "../dtos/NotaFiscalDTO";
import { INotaRepository } from "../repositories/INotaRepository";
import { INotaService } from "./INotaService";

export class NotaService implements INotaService {
    constructor(private readonly repository: INotaRepository) {}

    async create(nota: CreateNotaFiscalDTO): Promise<void> {  
        await this.repository.create(nota);
    }

    async read(): Promise<NotaFiscalDTO[]> {
        return await this.repository.read();
    }

    async update(id: number, nota: UpdateNotaFiscalDTO): Promise<void> {
        return await this.repository.update(id, nota);
    }

    async delete(id: number): Promise<void> {
        return await this.repository.delete(id);
    }

    async find(id: number): Promise<NotaFiscalDTO> {
        return await this.find(id);
    }
}