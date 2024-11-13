-- postgresSQl
CREATE TABLE IF NOT EXISTS NotaFiscal(
    IdNota serial,
    Emissor varchar(150) NOT NULL,
    Data date NOT NULL,
    PRIMARY KEY (IdNota)
);

CREATE INDEX IF NOT EXISTS idx_data ON NotaFiscal (Data); 

CREATE TABLE IF NOT EXISTS Item (
    IdNota serial,
    IdItem serial,
    Produto varchar NOT NULL, 
    Valor numeric(15, 3) NOT NULL,
    PRIMARY KEY (IdNota, IdItem)
);

CREATE INDEX IF NOT EXISTS idx_produto ON Item (Produto); 
