import { useState, useEffect } from "react";
import Registro from "../../Registro/Index.module";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react-hooks/rules-of-hooks

// eslint-disable-next-line react/prop-types
export default function ListaRegistros () {
    const { id } = useParams();
    const url = `http://localhost:3000/api/planta/lista-registros/${id}`;
    const [registros, setRegistros] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        async function carregaRegistros () {
            const registros = await fetch(url)
                .then(res => res.json());
    
            setRegistros(registros);
        }
    
        carregaRegistros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [registros]);
    
    return (
        <>
            {
                registros.length > 0 ? 
                    <ul>{registros.map(({ instante, nome_tabela, valor, planta_id}, key) => 
                        <Registro instante={instante} nome_tabela={nome_tabela} valor={valor}
                        planta_id={planta_id} key={key}/>)}
                    </ul> 
                    : <p> Carregando registros </p>}
        </>
    )
}