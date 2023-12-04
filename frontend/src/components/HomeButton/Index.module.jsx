import Button from "../Button/Index.module";
import "./style.css";

export default function HomeButton () {
    return (
        <div className="home-button">
            <Button nome={"voltar à tela inicial"} route={"/"}/>
        </div>
    )
}