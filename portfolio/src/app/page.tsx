import Image from "next/image";
import MinhaFoto from "../img/minhaFoto.png"

export default function Home(){
  return (
    <main>
      <section>
        <div className="containerPrincipal">
          <h2 className="h2Principal">Bem vindos ao meu PORTFOLIO</h2>
          <Image src={MinhaFoto} alt="Foto do criador" className="imgPrincipal"/>
        </div>
        <div>
          <p>
            Nesse portfólio mostro um pouco sobre mim e do que eu mais gosto de fazer, PROGRAMAÇÃO.
            Acompanhe aqui: os conhecimentos das linguagens que possuo e alguns projetos que tenho, projetos em grupo, 
            e pessoais. Esse portfolio será atualizado continuamente, de acordo com o avanço da minha carreira. 
            FIQUEM SEMPRE ATENTOS!
          </p>
        </div>
      </section>
    </main>

  )
}