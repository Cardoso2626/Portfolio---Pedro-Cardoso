import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <header>
            <div className="containerCabecalho">
                <h1 className="item1 h1Cabecalho">PH.</h1>
                <div className="item2">
                    <Menu />
                </div>
               
            </div>
        </header>
    )

}