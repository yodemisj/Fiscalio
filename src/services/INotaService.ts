import { CreateNotaFiscalDTO, NotaFiscalDTO, UpdateNotaFiscalDTO } from "../dtos/NotaFiscalDTO";

export interface INotaService {
    create(nota: CreateNotaFiscalDTO): Promise<void>;
    read(): Promise<NotaFiscalDTO[]>;
    update(id: number, nota: UpdateNotaFiscalDTO): Promise<void>;
    delete(id: number): Promise<void>;
    find(id: number): Promise<NotaFiscalDTO>;
}