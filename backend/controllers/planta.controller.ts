import Planta from "../models/planta.model";
import { Request, Response } from "express";

const plantaModel = Planta.getPlantaModel();

async function listaTodasPlantas (req: Request, res: Response) {
    const plantas = await plantaModel.listaTodasPlantas();

    return res.json(plantas);
}

async function registraStatus (req: Request, res: Response) {
    const { planta } = req.body;

    await plantaModel.registraStatus(planta);

    return res.json(planta);
}

async function listaRegistros (req: Request, res: Response) {
    const { id } = req.params;
    const registros = plantaModel.listaRegistros(parseInt(id));
    
    return res.json(registros);
}

export default { listaTodasPlantas, registraStatus, listaRegistros }