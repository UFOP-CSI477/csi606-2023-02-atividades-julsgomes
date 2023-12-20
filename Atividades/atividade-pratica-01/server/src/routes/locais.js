import { Router } from "express";
import { GetAllLocaisController } from "../controller/locais_coleta/GetAllLocalController.js";
import { GetByIdLocaisController } from "../controller/locais_coleta/GetByIdLocalController.js";
import { CreateLocalController } from "../controller/locais_coleta/CreateLocalController.js";
import { UpdateLocalController } from "../controller/locais_coleta/UpdateLocalController.js";
import { DeleteLocalController } from "../controller/locais_coleta/DeleteLocalController.js";


const locaisRouter = Router();

// GET ALL
const getAllLocaisController = new GetAllLocaisController();
locaisRouter.get('/locais', getAllLocaisController.handle);

// GET BY ID
const getByIdLocaisController = new GetByIdLocaisController();
locaisRouter.get('/locais/:id', getByIdLocaisController.handle);

// CREATE
const createLocalController = new CreateLocalController();
locaisRouter.post('/locais', createLocalController.handle);

// UPDATE
const updateLocalController = new UpdateLocalController();
locaisRouter.put('/locais', updateLocalController.handle);

// DELETE
const deleteLocalController = new DeleteLocalController();
locaisRouter.delete('/locais', deleteLocalController.handle);

// EXPORT - ROUTER
export { locaisRouter }

export default Router;