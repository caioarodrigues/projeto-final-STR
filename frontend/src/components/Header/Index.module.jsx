/* eslint-disable react/prop-types */
import "./style.css"

export default function Header ({ titulo, descricao }) {
    return (
        <header className="header">
            <h2>{titulo}</h2>
            {descricao ? <h3> {descricao} </h3> : <></>}
        </header>
    );
}