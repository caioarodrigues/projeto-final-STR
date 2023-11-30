/* eslint-disable react/prop-types */
import "./style.css";

export default function Form ({ props }) {
    const { campos } = props;

    return (
        <section className="section-form">
            <form className="form">
                {campos.map((campo, key) => {
                    const { nome, tipoInput } = campo;
                    
                    return (
                        <>
                            <div className="div-dados-inseridos">
                                <label htmlFor={tipoInput} className="label">{nome}</label>
                                <input type={tipoInput} className="input" name={nome} key={key}/>
                            </div>
                        </>
                    );
                })}

                <button type="submit" className="btn-enviar">Enviar</button>
            </form>
        </section>
    );
}