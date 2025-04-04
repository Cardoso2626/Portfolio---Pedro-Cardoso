import Image from "next/image"
import Pc from "../../img/pcProjetos.png"

export default function Projetos (){
    return(
        <main>
            <h2 className="h2Projeto">Esses são meus projetos</h2>
            <div>
                <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                <Image src={Pc} alt="Icone de pc" className="imagePc"/>
            </div>
        </main>
    )
}