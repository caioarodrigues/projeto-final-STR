import Form from "../../components/Form/Index.module";
import Header from "../../components/Header/Index.module";
import HomeButton from "../../components/HomeButton/Index.module";

export default function CriaRegistro () {
    return (
        <>
            <Header titulo={"Crie um novo registro para uma planta"} />
            <Form campos={[
                {
                    nome: "id",
                    tipoInput: "number"
                },
                {
                    nome: "luminosidade",
                    tipoInput: "number",
                }, 
                {
                    nome: "umidade",
                    tipoInput: "number",
                }, 
                {
                    nome: "quantidade de água",
                    tipoInput: "number",
                }]}
                url={"http://localhost:3000/api/planta/registra-status"}
                />
            <HomeButton />
        </>
    );
}