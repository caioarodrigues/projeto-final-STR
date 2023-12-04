import "./style.css";
/* eslint-disable react/prop-types */
export default function Table ({ registros }) {
    const nomesTabelas = new Set ([...registros.map(({ nome_tabela }) => nome_tabela)]);

    return (
        <>
            {[...nomesTabelas].map((nome, key) => {
                return (
                    <div key={key} className="div-tabela">
                        <h1>{nome.replace(/_/g, " ")}</h1>
                        <table className="tabela">
                            <thead className="thead">
                                <tr>
                                    <td>valor</td>
                                </tr>
                                <tr>
                                    <td>instante</td>
                                </tr>
                            </thead>
                            <tbody className="tbody">
                                {registros.map(({ nome_tabela, valor, instante }) => {
                                    if (nome_tabela === nome)
                                        return (
                                            <div>
                                                <tr>
                                                    <td>{valor}</td>
                                                </tr>
                                                <tr>
                                                    <td>{instante}</td>
                                                </tr>
                                            </div>
                                        )
                                })}
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </>
    )
}