/* eslint-disable react/prop-types */
export default function Form ({ props }) {
    const { campos } = props;

    return (
        <form>
            {campos.map((campo, key) => {
                const { nome, tipoInput } = campo;
                
                return (
                    <>
                        <label htmlFor={tipoInput}>{nome}</label>
                        <input type={tipoInput} name={nome} key={key}/>
                    </>
                );
            })}

            <button type="submit">Enviar</button>
        </form>
    );
}