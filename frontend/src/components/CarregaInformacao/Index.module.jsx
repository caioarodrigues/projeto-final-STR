/* eslint-disable react/prop-types */
export default function CarregaInformacao ({ idRegistro }) {
    return (
        <>
            <a href={`/lista-registros/${idRegistro}`} id={idRegistro}>mais informações</a>
        </>);
}