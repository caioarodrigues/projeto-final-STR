import Planta from "../models/planta.model";
import { Request, Response } from "express";

const plantaModel = Planta.getPlantaModel();

async function listaTodasPlantas (req: Request, res: Response) {
    try {
        const plantas = await plantaModel.listaTodasPlantas();
    
        return res.json(plantas);
    }
    catch (err: unknown) {
        if(err instanceof Error) {
            return res.status(500)
                .json({ msg: `erro ao tentar listar todas as plantas: ${err.message}` });
        }

        return res.status(500);
    }
}

async function registraStatus (req: Request, res: Response) {
    const { planta } = req.body;

    try {
        await plantaModel.registraStatus(planta);
    }
    catch (err: unknown) {
        if(err instanceof Error) {
            return res.status(500)
                .json({ msg: `erro ao tentar registrar status: ${err.message}` });
        }

        return res.status(500);
    }

    return res.status(201).json(planta);
}

async function listaRegistros (req: Request, res: Response) {
    const { id } = req.params;
    try {
        const registros = await plantaModel.listaRegistros(parseInt(id));

        return res.json(registros);
    }
    catch (err: unknown) {
        if(err instanceof Error) {
            return res.status(500)
                .json({ msg: `erro ao tentar listar os registros: ${err.message}` });
        }

        return res.status(500);
    }
}

async function adiciona (req: Request, res: Response) {
    const { tipo } = req.body;

    try {
        const planta = await plantaModel.adiciona(tipo);
    
        return res.status(201).json(planta);
    }
    catch (err: unknown) {
        if(err instanceof Error) {
            return res.status(500)
                .json({ msg: `erro ao tentar adicionar a nova planta: ${err.message}` });
        }

        return res.status(500);
    }
}

async function remove (req: Request, res: Response) {
    const { id } = req.params;

    try {
        const planta = await plantaModel.remove(parseInt(id));
    
        return res.status(204).json(planta);
    }
    catch (err: unknown) {
        if(err instanceof Error) {
            return res.status(500)
                .json({ msg: `erro ao tentar remover a planta: ${err.message}` });
        }

        return res.status(500);
    }
}

export default { listaTodasPlantas, registraStatus, listaRegistros, adiciona, remove }