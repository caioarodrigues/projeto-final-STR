/* eslint-disable react/prop-types */
export default function Header ({ titulo, descricao }) {
    return (
        <header>
            <h2>{titulo}</h2>
            {descricao ? <h3> {descricao} </h3> : <></>}
        </header>
    );
}