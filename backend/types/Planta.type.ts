import { AguaType } from "./Agua.type";
import { LuminosidadeType } from "./Luminosidade.type";
import { UmidadeType } from "./Umidade.type";

export type PlantaType = {
    id: number;
    quantidade_de_agua: AguaType;
    luminosidade: LuminosidadeType;
    umidade: UmidadeType;
}
