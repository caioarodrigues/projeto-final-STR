import Conexao from "../classes/Conexao";
import { PlantaType } from "../types/Planta.type";

export default class Planta {
    private static readonly _instancia = new Planta();
    private _conexao = Conexao.criaConexao();
    private constructor () {}
    public static getPlantaModel () {
        return this._instancia;
    }
    public async listaTodasPlantas () {
        const conn = await this._conexao.get();
        const [plantas] = await conn.query("SELECT * FROM plantas");
    
        return plantas;
    }
    public async popular () {
        const q1 = "INSERT INTO plantas (tipo) VALUES ('BOA NOITE')";
        const q2 = "INSERT INTO plantas (tipo) VALUES ('COMIGO NINGUEM PODE')";
        const conn = await this._conexao.get();

        await conn.query(q1);
        await conn.query(q2);
    }
    public async isBancoVazio () {
        const q = "SELECT COUNT(*)AS qde_plantas FROM plantas";
        const conn = await this._conexao.get();
        const [quantidade] = await conn.query(q); 

        return quantidade;
    }
    public async adiciona () {

    }
    public async remove () {

    }
    public async registraStatus (planta: PlantaType) {
        const conn = await this._conexao.get();
        const { id, nivel_agua, luminosidade, umidade } = planta;
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const dataFormatada = date.toISOString()
            .slice(0, 19).replace('T', ' ');

        //console.log(`Status da planta: ${JSON.stringify(planta)}, em: ${dataFormatada}`);
    
        await conn.query(`INSERT INTO luminosidade (valor, plantas_id, instante) 
            VALUES (?, ?, ?)`, [luminosidade.valor, id, dataFormatada]);
        await conn.query(`INSERT INTO quantidade_de_agua (valor, plantas_id, instante)
            VALUES (?, ?, ?)`, [nivel_agua.valor, id, dataFormatada]);
        await conn.query(`INSERT INTO umidade (valor, plantas_id, instante)
            VALUES (?, ?, ?)`, [umidade.valor, id, dataFormatada]);
    } 
    public async listaRegistros (id: number) {
        const conn = await this._conexao.get();

        //aplicação quebrando aqui
        const [registros] = await conn.query(`SELECT * from from luminosidade;`);
    
        return registros;
    }
}