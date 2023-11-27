import "./style.css";
import Card from "../Card/Index.module";
import { useEffect, useState } from "react";

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
            {plantas.map(({ id, tipo }, key) => <Card id={id} tipo={tipo} key={key}/> )}
        </>
    )
}