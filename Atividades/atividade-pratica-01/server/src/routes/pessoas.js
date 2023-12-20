import { Router } from 'express';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { DeletePessoaController } from '../controller/pessoas/DeletePessoaController.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';

const pessoasRouter = Router();

// GET ALL
const getAllPessoaController = new GetAllPessoaController();
pessoasRouter.get('/pessoas', getAllPessoaController.handle);

// GET BY ID
const getByIdPessoaController = new GetByIdPessoaController();
pessoasRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// CREATE
const createPessoaController = new CreatePessoaController();
pessoasRouter.post('/pessoas', createPessoaController.handle);

// UPDATE
const updatePessoaController = new UpdatePessoaController();
pessoasRouter.put('/pessoas', updatePessoaController.handle);

// DELETE
const deletePessoaController = new DeletePessoaController();
pessoasRouter.delete('/pessoas', deletePessoaController.handle);

// EXPORT - ROUTER
export { pessoasRouter };

export default Router;