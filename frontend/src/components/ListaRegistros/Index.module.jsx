import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../Tabela/Index.module";

// eslint-disable-next-line react-hooks/rules-of-hooks

// eslint-disable-next-line react/prop-types
export default function ListaRegistros() {
    const { id } = useParams();
    const url = `http://localhost:3000/api/planta/lista-registros/${id}`;
    const [registros, setRegistros] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function carregaRegistros() {
            const registros = await fetch(url)
                .then(res => res.json());

            setRegistros(registros);
        }

        carregaRegistros();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {
                registros.length > 0 ? <Table registros={registros} />
                : <p>Carregando registros</p>
            }
        </>
    )

}