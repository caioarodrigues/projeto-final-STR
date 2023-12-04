import { useEffect, useState } from "react";
import Header from "../../components/Header/Index.module";
import axios from "axios";
import "./style.css";
import HomeButton from "../../components/HomeButton/Index.module";

export default function RemovePlanta () {
    const urlListaPlantas = "http://localhost:3000/api/plantas/lista";
    const urlRemovePlanta = "http://localhost:3000/api/planta/remove"
    const [plantas, setPlantas] = useState([]);
    const [plantaSelecionada, setPlantaSelecionada] = useState('');

    useEffect(() => {
        async function getListaDePlantas () {
            const lista = await fetch(urlListaPlantas)
                .then(res => res.json());
        
            setPlantas(lista);
        }

        getListaDePlantas();
    }, [plantas]);
    
    return (
        <>
            <Header titulo={"Selecione o ID de uma planta para remover"}/>
            <div className="div-form-remover-planta">
                <form action="" className="form-remover-planta">
                    <select name="" id="plantas" onChange={(e) => {
                        const planta = e.target.value;

                        setPlantaSelecionada(planta);
                    }}>
                        <option selected disabled>Escolha uma planta</option>
                        {plantas.map(({ id, tipo }, key) => {
                            return (
                                <option value={id} key={key}>{id}: {tipo}</option>
                            );
                        })}
                    </select>

                    <button type="submit" onClick={async (e) => {
                        e.preventDefault();

                        await axios.delete(`${urlRemovePlanta}/${plantaSelecionada}`)
                            .then(({ data}) => {
                                console.log(`resposta do servidor: ${JSON.stringify(data)}`);
                            })
                            .catch(erro => {
                                console.log(`erro ao remover planta: ${erro}`);
                            });
                    }}>Remover</button>
                </form>
            </div>
            
            <HomeButton />
        </>
    );
}