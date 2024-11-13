import { Router } from "express";
import { NotaFactory } from "../factories/NotaFactory";
const nota = Router();

const notaController = NotaFactory.getInstance();

nota.get('/nota/index', notaController.index);
nota.get('/nota/:id', notaController.find);
nota.get('/notas', notaController.read);
nota.post('/nota', notaController.create);
nota.put('/nota/:id', notaController.update);
nota.delete('/nota/:id', notaController.delete);

export default nota;
