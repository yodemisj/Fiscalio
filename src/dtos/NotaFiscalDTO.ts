export class CreateNotaFiscalDTO {
    constructor(
        public emissor: string,
        public data: Date,
    ) {}
}

export class UpdateNotaFiscalDTO {
    constructor(
        public emissor: string,
        public data: Date,
    ) {}
}

export class NotaFiscalDTO {
    constructor(
        public idNota: number,
        public emissor: string,
        public data: Date,
    ) {}
}
