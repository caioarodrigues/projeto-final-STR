import { useState } from "react";
import Header from "../../components/Header/Index.module";
import "./style.css";

export default function AdicionaPlanta () {
    const [tipo, setTipo] = useState('');
    const url = "http://localhost:3000/api/planta/adiciona";

    return (
        <>
            <Header titulo={"Selecione um tipo de planta para adicionar ao banco de dados"}/>
            <section className="section-form-add-planta">
                <form action="" method="POST">
                    <select name="planta" id="planta" onChange={(e) => {
                        e.preventDefault();
                        const tipoPlanta = e.target.value;
                        
                        setTipo(tipoPlanta);
                    }}>
                        <option value="selecione um tipo" disabled selected>Selecione um tipo</option>
                        <option value="boa noite">Boa noite</option>
                        <option value="comigo ninguem pode">Comigo ninguém pode</option>
                    </select>

                    <button type="submit" onClick={async (e) => {
                        e.preventDefault();
                        await fetch(url, { method: "POST", 
                            headers: {
                                'Content-Type': 'application/json'
                            }, 
                            body: { tipo }});
                    }}>Adicionar</button>
                </form>
            </section>
        </>
    );
}