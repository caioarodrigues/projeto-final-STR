export default function AdicionaPlanta () {
    return (
        <section>
            <form action="" method="POST">
                <select name="planta" id="planta">
                    <option value="" selected disabled>Selecione um tipo</option>
                    <option value="boa-noite">Boa noite</option>
                    <option value="comigo-ninguem-pode">Comigo ninguém pode</option>
                </select>

                <button type="submit">Adicionar</button>
            </form>
        </section>
    );
}