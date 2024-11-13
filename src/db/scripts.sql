-- postgresSQl
CREATE TABLE IF NOT EXISTS NotaFiscal(
    IdNota serial,
    Emissor varchar(150),
    Data date,
    PRIMARY KEY (IdNota)
);

CREATE INDEX IF NOT EXISTS idx_data ON NotaFiscal (Data); 

CREATE TABLE IF NOT EXISTS Item (
    IdNota serial,
    IdItem serial,
    Produto varchar, 
    Valor numeric(15, 3),
    PRIMARY KEY (IdNota, IdItem)
);

CREATE INDEX IF NOT EXISTS idx_produto ON Item (Produto); 
