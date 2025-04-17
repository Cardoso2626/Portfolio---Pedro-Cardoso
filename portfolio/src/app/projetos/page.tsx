import Image from "next/image"
import Pc from "../../img/pcProjetos.png"
import Earth from "../../img/earthInBalance.png"
import Link from "next/link"
import Blue from "../../img/blueWaveCompany.png"

export default function Projetos (){
    return(
        <main>
            <section>
                <h2 className="h2Projeto">Esses são meus projetos!</h2>
                <p className="pSobreProjeto">Aqui estão meus projetos que fiz com contribuidores. Logo estão vindo mais projetos, tanto pessoais, quanto em grupo. Entrem no repositório para saber mais sobre o projeto em si.</p>
                <div className="containerProjeto">
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                        <Link href={"https://earth-in-balance.vercel.app/"} target="_blank" rel="noopener noreferrer" className="link">
                            <Image src={Earth} alt="Página earth in balance" className="imgEarthIn"/> 
                        </Link>
                        <p className="pEarth">Earth In Balance</p>
                        <Link href={"https://github.com/Cardoso2626/gs_front"} className="linkRepositorio">Repostitório</Link>
                    </div>
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                        <Link href={"https://blue-wave-company-copy.vercel.app/pags-sec/doresDoOceano.html"} target="_blank" rel="noopener noreferrer" className="link">
                            <Image src={Blue} alt="Página blue wave company" className="imgEarthIn"/>
                        </Link>
                        <p className="pBlue">Blue Wave Company</p>
                        <Link href={"https://github.com/MarcosVini222/projeto-blue-wave-company"} className="linkRepositorio">Repostitório</Link>
                    </div>
                    <div className="itemProjeto containerItemProjeto">
                        <Image src={Pc} alt="Icone de pc" className="imagePc"/>
                        <h3 className="logoMais">Loading (:</h3>
                    </div>
                </div>
            </section>
        </main>
    )
}