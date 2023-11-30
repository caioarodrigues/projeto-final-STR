import Header from "../../components/Header/Index.module";
import "./style.css";

export default function Home () {
    return (
        <>
            <Header titulo={"Controle do sistema de irrigação e iluminação"}
                descricao={"Trabalho de STR"}/>
            <ul>
                <li>
                    <a href="/lista">Visualizar todas as plantas</a>
                </li>
                <li>
                    <a href="/adiciona-planta">Adicionar uma nova planta</a>
                </li>
                <li>
                    <a href="/remove-planta">Remover uma planta</a>
                </li>
                <li>
                    <a href="/cria-registro">Registrar status de uma planta</a>
                </li>
            </ul>
        </>
    )
}