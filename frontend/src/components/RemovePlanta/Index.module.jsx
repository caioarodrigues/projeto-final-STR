import { useEffect, useState } from "react";

export default function RemovePlanta () {
    const url = "http://localhost:3000/api/plantas/lista";
    const [plantas, setPlantas] = useState([]);
    
    useEffect(() => {
        async function getListaDePlantas () {
            const lista = await fetch(url)
                .then(res => res.json());
        
            setPlantas(lista);
        }

        getListaDePlantas();
    }, [plantas]);
    
    return (
        <>
            <form action="">
                <select name="" id="">
                    <option selected disabled>selecione uma planta a remover</option>
                    {plantas.map(({ id, tipo }, key) => {
                        return (
                            <option value={id} key={key}>{id}: {tipo}</option>
                        );
                    })}
                </select>

                <button type="submit">Remover</button>
            </form>
        </>
    );
}