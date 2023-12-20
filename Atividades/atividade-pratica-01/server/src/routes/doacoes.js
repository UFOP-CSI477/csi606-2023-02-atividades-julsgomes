import { Router } from 'express';
import { GetAllDoacaoController } from '../controller/doacoes/GetAlldoacaoController.js';
import { GetByIdDoacaoController } from './../controller/doacoes/GetByIdDoacaoController.js';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacaoController.js';
import { UpdateDoacaoController } from '../controller/doacoes/UpdateDoacaoController.js';
import { DeleteDoacaoController } from '../controller/doacoes/DeleteDoacaoController.js';


const doacoesRouter = Router();

// GET ALL
const getAllDoacaoController = new GetAllDoacaoController();
doacoesRouter.get('/doacoes', getAllDoacaoController.handle);

// GET BY ID
const getByIdDoacaoController = new GetByIdDoacaoController();
doacoesRouter.get('/doacoes/:id', getByIdDoacaoController.handle);

// CREATE
const createDoacaoController = new CreateDoacaoController();
doacoesRouter.post('/doacoes', createDoacaoController.handle);

// UPDATE
const updateDoacaoController = new UpdateDoacaoController();
doacoesRouter.put('/doacoes', updateDoacaoController.handle);

// DELETE
const deleteDoacaoController = new DeleteDoacaoController();
doacoesRouter.delete('/doacoes', deleteDoacaoController.handle);

// EXPORT - ROUTER
export { doacoesRouter };

export default Router;


