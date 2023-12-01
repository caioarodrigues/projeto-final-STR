/* eslint-disable react/prop-types */
import "./style.css";

export default function CarregaInformacao ({ idRegistro }) {
    return (
        <>
            <a href={`/lista-registros/${idRegistro}`} id={idRegistro} className="registro">
                mais informações
            </a>
        </>);
}