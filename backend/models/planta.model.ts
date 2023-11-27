import Conexao from "../classes/Conexao";
import { PlantaType } from "../types/Planta.type";
import { TipoPlanta } from "../types/TipoPlanta.type";

export default class Planta {
    private static readonly _instancia = new Planta();
    private _conexao = Conexao.criaConexao();
    private constructor () {}
    public static getPlantaModel () {
        return this._instancia;
    }
    public async listaTodasPlantas () {
        const conn = await this._conexao.get();
        const [plantas] = await conn.query("SELECT * FROM planta");
    
        return plantas;
    }
    public async popular () {
        const q1 = "INSERT INTO planta (tipo) VALUES ('BOA NOITE')";
        const q2 = "INSERT INTO planta (tipo) VALUES ('COMIGO NINGUEM PODE')";
        const conn = await this._conexao.get();

        await conn.query(q1);
        await conn.query(q2);
    }
    public async isBancoVazio () {
        const q = "SELECT COUNT(*) AS qde_plantas FROM planta";
        const conn = await this._conexao.get();
        const [quantidade] = await conn.query(q); 

        return quantidade;
    }
    public async adiciona (tipoPlanta: TipoPlanta) {
        const conn = await this._conexao.get();
        const q = "INSERT INTO planta (tipo) VALUES (?)"
        const planta = await conn.query(q, tipoPlanta);

        return planta;
    }
    public async remove (id: number) {
        const conn = await this._conexao.get();
        const q1 = `DELETE FROM luminosidade WHERE planta_id = ${id}`;
        const q2 = `DELETE FROM quantidade_de_agua WHERE planta_id = ${id}`;
        const q3 = `DELETE FROM umidade WHERE planta_id = ${id}`;
        const q4 = `DELETE FROM planta WHERE id = ${id}`;
        
        await conn.query(q1);
        await conn.query(q2);
        await conn.query(q3);

        const planta = await conn.query(q4);

        return planta;
    }
    public async registraStatus (planta: PlantaType) {
        const conn = await this._conexao.get();
        const { id, nivel_agua, luminosidade, umidade } = planta;
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const dataFormatada = date.toISOString()
            .slice(0, 19).replace('T', ' ');

        await conn.query(`INSERT INTO luminosidade (valor, planta_id, instante) 
            VALUES (?, ?, ?)`, [luminosidade.valor, id, dataFormatada]);
        await conn.query(`INSERT INTO quantidade_de_agua (valor, planta_id, instante)
            VALUES (?, ?, ?)`, [nivel_agua.valor, id, dataFormatada]);
        await conn.query(`INSERT INTO umidade (valor, planta_id, instante)
            VALUES (?, ?, ?)`, [umidade.valor, id, dataFormatada]);
    } 
    public async listaRegistros (id: number) {
        const conn = await this._conexao.get();
        const [resultado] = await conn.query(`
            SELECT *, 'luminosidade' AS nome_tabela FROM luminosidade WHERE planta_id = ${id}
            UNION ALL
            SELECT *, 'umidade' AS nome_tabela FROM umidade WHERE planta_id = ${id}
            UNION ALL
            SELECT *, 'quantidade_de_agua' AS nome_tabela FROM quantidade_de_agua WHERE planta_id = ${id};
        `);

        return resultado;
    }
}