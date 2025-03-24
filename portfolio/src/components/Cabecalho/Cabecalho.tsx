import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header className="containerCabecalho">
            <h1 className="item item1 h1Cabecalho">PH.</h1>
            <div className="item item2">
                <Menu />
            </div>
        </header>
    )

}