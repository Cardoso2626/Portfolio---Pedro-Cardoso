import Image from "next/image"
import Pc from "../../img/pcProjetos.png"
import Earth from "../../img/earthInBalance.png"
import Link from "next/link"

export default function Projetos (){
    return(
        <main>
            <section>
                <h2 className="h2Projeto">Esses são meus projetos</h2>
                <div>
                    <div>
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                        <Link href={"https://earth-in-balance.vercel.app/"} target="_blank" rel="noopener noreferrer">
                            <Image src={Earth} alt="Página earth in balance" className="imgEarthIn"/> 
                        </Link>
                        <p>Earth In Balance</p>
                    </div>
                    <div>
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                    </div>
                    <div>
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                    </div>
                   
                    
                    
                </div>
            </section>
        </main>
    )
}