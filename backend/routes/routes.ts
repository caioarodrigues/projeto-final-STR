import plantaRouter from "./planta.route";
import { Router } from "express";

const routes = Router();

routes.use(plantaRouter);

export default routes;