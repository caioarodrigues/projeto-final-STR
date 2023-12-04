/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import axios from "axios";
import "./style.css";

export default function Form ({ campos, url }) {
    return (
        <section className="section-form">
            <form className="form">
                {campos.map((campo, key) => {
                    const { nome, tipoInput } = campo;

                    return (
                        <>
                            <div className="div-dados-inseridos">
                                <label htmlFor={tipoInput} className="label">{nome}</label>
                                <input type={tipoInput} className="input" name={nome.replace(/ /g, '_')
                                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")} key={key}/>
                            </div>
                        </>
                    );
                })}

                <button type="submit" className="btn-enviar" onClick={async e => {
                    e.preventDefault();
                    const valores = new Map();

                    Array.from(document.querySelectorAll(".input"))
                        .forEach(el => {
                            const nome = el.getAttribute('name');
                            const valor = el.value;

                            if (nome === "id") {
                                valores.set(nome, valor);
                                return;
                            }

                            valores.set(nome, { valor }); 
                        });
                    
                    await axios.post(url, { planta: Object.fromEntries(valores) })
                        .then(({ data }) => {
                            console.log(`resposta do servidor: ${JSON.stringify(data)}`);

                            alert("registro feito com sucesso!");
                            document.querySelectorAll(".input").forEach(inp => {
                                inp.value = '';
                            });
                        })
                        .catch(err => {
                            console.error(`erro ao enviar formulário: ${err}`);
                        });
                }}>Enviar</button>
            </form>
        </section>
    );
}