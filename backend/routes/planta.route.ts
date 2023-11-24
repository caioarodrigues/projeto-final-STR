import plantaController from "../controllers/planta.controller";
import { Router } from "express";

const plantaRouter = Router();

plantaRouter.get("/api/plantas/lista", plantaController.listaTodasPlantas);
plantaRouter.get("/api/planta/lista-registros/:id", plantaController.listaRegistros)
plantaRouter.post("/api/planta/registra-status", plantaController.registraStatus);

export default plantaRouter;