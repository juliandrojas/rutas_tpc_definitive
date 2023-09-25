create table empresas(
	idempresa INT PRIMARY KEY,
	nombreempresa VARCHAR(255),
	imagenempresa VARCHAR(255)
)
CREATE TABLE rutas(
    idruta INT PRIMARY KEY,
    nombreruta VARCHAR(255),
    idempresa INT,
    FOREIGN KEY (idempresa) REFERENCES empresas(idempresa)
);
select * from empresas;
select * from rutas;