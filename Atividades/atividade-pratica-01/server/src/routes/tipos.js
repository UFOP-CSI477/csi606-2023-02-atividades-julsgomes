import { Router } from 'express';
import { GetAllTipoController } from '../controller/tipos/GetAllTipoController.js';
import { GetByIdTipoController } from '../controller/tipos/GetByIdTipoController.js';
import { CreateTipoController } from '../controller/tipos/CreateTipoController.js';
import { UpdateTipoController } from '../controller/tipos/UpdateTipoController.js';
import { DeleteTipoController } from '../controller/tipos/DeleteTipoController.js';

const tiposRouter = Router();

// GET ALL
const getAllTipoController = new GetAllTipoController();
tiposRouter.get('/tipos', getAllTipoController.handle);

// GET BY ID
const getByIdTipoController = new GetByIdTipoController();
tiposRouter.get('/tipos/:id', getByIdTipoController.handle);

// CREATE
const createTipoController = new CreateTipoController();
tiposRouter.post('/tipos', createTipoController.handle);

// UPDATE
const updateTipoController = new UpdateTipoController();
tiposRouter.put('/tipos', updateTipoController.handle);

// DELETE
const deleteTipoController = new DeleteTipoController();
tiposRouter.delete('/tipos', deleteTipoController.handle);

// EXPORT - ROUTER
export { tiposRouter };

export default Router;