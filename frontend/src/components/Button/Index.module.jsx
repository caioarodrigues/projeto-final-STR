import "./style.css"

// eslint-disable-next-line react/prop-types
export default function Button ({ nome, route }) {
    return (
        <button className="btn-generico" onClick={(e) => {
            e.preventDefault();

            window.location.pathname = route;
        }}>
            {nome}
        </button>
    )
}