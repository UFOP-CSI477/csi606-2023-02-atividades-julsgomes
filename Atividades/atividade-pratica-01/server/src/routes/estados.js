import { Router } from "express";
import { GetAllEstadoController } from "../controller/estados/GetAllEstadoController.js";
import { GetByIdEstadoController } from "../controller/estados/GetByIdEstadoController.js";
import { CreateEstadoController } from "../controller/estados/CreateEstadoController.js";
import { UpdateEstadoController } from "../controller/estados/UpdateEstadoController.js";
import { DeleteEstadoController } from "../controller/estados/DeleteEstadoController.js";


const estadoRouter = Router();

// GET ALL
const getAllEstadoController = new GetAllEstadoController();
estadoRouter.get('/estados', getAllEstadoController.handle);

// GET BY ID
const getByIdEstadoController = new GetByIdEstadoController();
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// CREATE   
const createEstadoController = new CreateEstadoController();
estadoRouter.post('/estados', createEstadoController.handle);

// UPDATE
const updateEstadoController = new UpdateEstadoController();
estadoRouter.put('/estados', updateEstadoController.handle);

// DELETE
const deleteEstadoController = new DeleteEstadoController();
estadoRouter.delete('/estados', deleteEstadoController.handle);

// EXPORT - ROUTER
export { estadoRouter }

export default Router;