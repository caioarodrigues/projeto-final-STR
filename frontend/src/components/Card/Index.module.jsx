/* eslint-disable react/prop-types */
import "./style.css";

export default function Card ({ id, tipo }) {
    return (
        <>
            <article className="card">
                <h3>{id}</h3>
                <h2>{tipo}</h2>
            </article>
        </>
    )
}