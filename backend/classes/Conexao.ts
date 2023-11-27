import mysql2 from "mysql2/promise";

export default class Conexao {
    private static readonly _instancia = new Conexao();
    private readonly _conexao = mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'registros_plantas'
    });
    
    private constructor () {};
    public static criaConexao () {
        return this._instancia;
    }
    public async get () {
        (await this._conexao).connect();
        
        return this._conexao;
    }
}