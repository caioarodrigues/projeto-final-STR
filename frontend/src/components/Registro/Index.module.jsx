// eslint-disable-next-line react/prop-types
export default function Registro ({ valor, planta_id, instante, nome_tabela }) {
    return (
        <>
            <p>{nome_tabela}, {valor}, {planta_id}, {instante}</p>
        </>
    )
}