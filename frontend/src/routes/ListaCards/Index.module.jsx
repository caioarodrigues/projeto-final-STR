import "./style.css";
import Card from "../../components/Card/Index.module";
import { useEffect, useState } from "react";
import CarregaInformacao from "../../components/CarregaInformacao/Index.module";
import Header from "../../components/Header/Index.module";

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
            <Header titulo={"Listagem de todas as plantas"} />
            {
                plantas.length > 0 ? 
                    plantas.map(({ id, tipo }, key) => {
                        return (
                            <section className="infos-planta" key={key}>
                                <div>
                                    <Card id={id} tipo={tipo} />
                                    <CarregaInformacao idRegistro={id}/>
                                </div>
                            </section>
                        )
                    })
                    : <p>Carregando os dados das plantas...</p>
            }
        </>
    )
}