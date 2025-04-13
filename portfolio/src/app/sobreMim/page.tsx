import Image from "next/image"
import IconeJavaScript from "../../img/jSIcon.png"
import IconeJava from "../../img/javaIcon.png"
import IconePython from "../../img/pythonIcon.png"
import IconeSql from "../../img/sQLIcon.png"
import Python1 from "../../img/py1.jpg"
import Python2 from "../../img/py2.jpg"
import Java from "../../img/java1.jpg"
import JavaScript from "../../img/js1.jpg"
import Senac1 from "../../img/senac1.jpg"
import Senac2 from "../../img/senac2.jpg"
import OneBit from "../../img/oneBit.jpg"


export default function sbreMim (){
    return(
        <main>
            <section>
                <div>
                    <h3 className="h3SobreMim">Contando um pouco sobre mim</h3>
                    <p className="pSobreMim">
                        Bom, meu nome é Pedro Cardoso, tenho 19 anos, e minha paixão com a programação surgiu muito por influência 
                        mas também por parte individual. Sempre fiquei imaginando como cada página funcionava, e quando era menor eu ficava no computador
                        vasculhando qualquer coisa que desse para clicar. Hoje, sigo com essa paixão, buscando conhecimentos, com muita força de vontade.
                        Atualmente trabalho na Motorola Solutions Brasil como jovem aprendiz e faço faculdade na FIAP (Faculdadede Informática e Administração Paulista)
                    </p>
                </div>
            </section>
            <section>
                <h4 className="h4SobreMim">Essas são as linguagens que obetenho conhecimento: </h4>
                <div className="containerIconeSObreMim">
                    <Image src={IconeJava} alt="Icone Java" className="iconesSobreMim"/>
                    <Image src={IconeJavaScript} alt="Icone JS" className="iconesSobreMim"/>
                    <Image src={IconePython} alt="Icone Python" className="iconesSobreMim"/>
                    <Image src={IconeSql} alt="Icone SQL" className="iconesSobreMim"/>
                </div>
            </section>
            <section>
                <h4 className="h4SobreMim">Meus certificados...</h4>
                <div className="containerCertificados">
                    <div  className="itemCertificado">
                        <Image src={Java} alt="certificado Java" className="imgCertificado"/>

                    </div>
                    <div className="itemCertificado">
                        <Image src={Python1} alt="certificado Python" className="imgCertificado"/>
                        
                    </div>
                    <div className="itemCertificado">
                        
                        <Image src={Python2} alt="certificado Python" className="imgCertificado"/>
                    </div>
                    <div className="itemCertificado">
                        <Image src={JavaScript} alt="certificado JavaScript"className="imgCertificado"/>
                        
                    </div>
                    <div className="itemCertificado">
                        <Image src={Senac1} alt="certificado Senac" className="imgCertificado"/>                
                        
                    </div>
                    <div className="itemCertificado">
                        <Image src={Senac2} alt="certificado Senac" className="imgCertificado"/>
                        
                    </div>
                    <div className="itemCertificado">
                        <Image src={OneBit} alt="certificado OneBitCode" className="imgCertificado"/>
                    </div>


                </div>
            </section>
        </main>
        
    )
}