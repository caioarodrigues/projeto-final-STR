import "./style.css";

export default function Home () {
    return (
        <>
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
                    <a href="/registra-status">Registrar status de uma planta</a>
                </li>
            </ul>
        </>
    )
}