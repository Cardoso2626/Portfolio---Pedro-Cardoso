import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header className="containerCabecalho">
            <h1 className="item1Cabecalho h1Cabecalho">PH.</h1>
            <div className="item2Cabecalho">
                <Menu />
            </div>
        </header>
    )

}