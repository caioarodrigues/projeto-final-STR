import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../Tabela/Index.module";
import HomeButton from "../HomeButton/Index.module";

// eslint-disable-next-line react-hooks/rules-of-hooks

// eslint-disable-next-line react/prop-types
export default function ListaRegistros() {
    const { id } = useParams();
    const url = `http://localhost:3000/api/planta/lista-registros/${id}`;
    const [registros, setRegistros] = useState([]);
    const [carregando, setCarregando] = useState('carregando informações');

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

    useEffect(() => {
        setTimeout(() => {
            setCarregando("Não foi possível carregar os registros no banco de dados!");
        }, 2000);
    })
    return (
        <>
            {
                registros.length > 0 ? <Table registros={registros} />
                : <> 
                    <div style={{ display: 'flex', justifyContent: 'center',
                    backgroundColor: 'beige', position: 'relative', height: '100vh',
                    alignItems: 'center' }}>
                        <p style={{ backgroundColor: 'white', width: 'fit-content', padding: '2em',
                            fontWeight: 'bold', borderRadius: '.25em', border: 'solid 1px black',
                            height: 'fit-content' }}>
                            {carregando}
                        </p>
                    </div>
                
                    <HomeButton />
                </> 
            }
        </>
    )

}