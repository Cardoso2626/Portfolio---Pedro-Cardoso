import Image from "next/image"
import Pc from "../../img/pcProjetos.png"
import Earth from "../../img/earthInBalance.png"
import Link from "next/link"

export default function Projetos (){
    return(
        <main>
            <section>
                <h2 className="h2Projeto">Esses são meus projetos</h2>
                <div className="containerProjeto">
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                        <Link href={"https://earth-in-balance.vercel.app/"} target="_blank" rel="noopener noreferrer" className="link">
                            <Image src={Earth} alt="Página earth in balance" className="imgEarthIn"/> 
                        </Link>
                        <p className="pEarth">Earth In Balance</p>
                    </div>
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                    </div>
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                    </div>
                </div>
            </section>
        </main>
    )
}