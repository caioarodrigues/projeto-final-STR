import plantaController from "../controllers/planta.controller";
import { Router } from "express";

const plantaRouter = Router();

plantaRouter.get("/api/plantas/lista", plantaController.listaTodasPlantas);
plantaRouter.get("/api/planta/lista-registros/:id", plantaController.listaRegistros);
plantaRouter.post("/api/planta/registra-status", plantaController.registraStatus);
plantaRouter.post("/api/planta/adiciona", plantaController.adiciona);
plantaRouter.delete("/api/planta/remove/:id", plantaController.remove)

export default plantaRouter;