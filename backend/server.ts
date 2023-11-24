import app from "./app";
import Planta from "./models/planta.model";

const porta = process.env.PORTA || 3000;
const plantaModel = Planta.getPlantaModel();

app.listen(porta, async () => {
    //console.log("populando o banco de dados");
    //await plantaModel.popular();
    //
    //console.log(await plantaModel.isBancoVazio());
    console.log(`backend executando na porta ${porta}, acesse em: http://localhost:3000/`);
});