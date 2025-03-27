import Image from "next/image"
import IconeJavaScript from "../../img/jSIcon.png"
import IconeJava from "../../img/javaIcon.png"
import IconePython from "../../img/pythonIcon.png"
import IconeSql from "../../img/sQLIcon.png"

export default function sbreMim (){
    return(
        <main>
            <section>
                <div>
                    <h3>Cotando um pouco sobre mim</h3>
                    <p>
                        Bom, meu nome é Pedro Cardoso, tenho 19 anos, e minha paixão com a programação surgiu muito por influência 
                        mas também por parte individual. Sempre fiquei imaginando como cada página funcionava, e quando era menor eu ficava no computador
                        vasculhando qualquer coisa que desse para clicar. Hoje, sigo com essa paixão, buscando conhecimentos, com muita força de vontade.
                        Atualmente trabalho na Motorola Solutions Brasil como jovem aprendiz e faço faculdade na FIAP (Faculdadede Informática e Administração Paulista)
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h4>Essas são as linguagens que obetenho conhecimento: </h4>
                    <Image src={IconeJava} alt="Icone Java"/>
                    <Image src={IconeJavaScript} alt="Icone JS"/>
                    <Image src={IconePython} alt="Icone Python"/>
                    <Image src={IconeSql} alt="Icone SQL"/>
                    
                </div>
            </section>
        </main>
        
    )
}