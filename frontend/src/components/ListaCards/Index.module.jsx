import "./style.css";
import Card from "../Card/Index.module";
import { useEffect, useState } from "react";
import CarregaInformacao from "../CarregaInformacao/Index.module";

export default function ListaCards () {
    const [plantas, setPlantas] = useState([]);
    const url = "http://localhost:3000/api/plantas/lista";

    useEffect(() => {
        async function listaPlantas () {
            const todasPlantas = await fetch(url)
                .then(res => res.json());

            setPlantas(todasPlantas);
        }

        listaPlantas();
    }, [plantas]);
    
    return (
        <>
            {
                plantas.length > 0 ? 
                    plantas.map(({ id, tipo }, key) => {
                        return (
                            <>
                                <Card id={id} tipo={tipo} key={key}/>
                                <CarregaInformacao idRegistro={id}/>
                            </>
                        )
                    })
                    : <p>Carregando os dados das plantas...</p>
            }
        </>
    )
}