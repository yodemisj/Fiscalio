import { Client } from "pg";
import { CreateNotaFiscalDTO, NotaFiscalDTO, UpdateNotaFiscalDTO } from "../dtos/NotaFiscalDTO";
import { INotaRepository } from "./INotaRepository";

export class NotaRepository implements INotaRepository {
    constructor(private readonly db: Client) {}

    async create(nota: CreateNotaFiscalDTO): Promise<void> {  
        const query = {
            text: 'INSERT INTO NotaFiscal(emissor, data) VALUES($1, $2)',
            values: [nota.emissor, nota.data],
        }
        
        await this.db.query(query); 
    }

    async read(): Promise<NotaFiscalDTO[]> {
        const query = {
            name: 'fetch-notas',
            text: 'SELECT * FROM notafiscal',
        };
        return await this.db.query(query); 
    }

    async update(id: number, nota: UpdateNotaFiscalDTO): Promise<void> {
        const query = {
            text: 'UPDATE NotaFiscal SET emissor = $1, data = $2 WHERE IdNota = $3',
            values: [nota.emissor, nota.data, id]
        }

        await this.db.query(query);
        return;
    }

    async delete(id: number): Promise<void> {
        const query = {
            text: 'DELETE FROM notafiscal WHERE id = $1',
            values: [id],
        }
        await this.db.query(query);
    }

    async find(id: number): Promise<NotaFiscalDTO> {
        const query = {
            name: 'fetch-nota',
            text: 'SELECT * FROM notafiscal WHERE id = $1',
            values: [id],
        }
           
        return await this.db.query(query);
    }

}