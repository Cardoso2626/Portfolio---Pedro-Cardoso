import Image from "next/image";
import MinhaFoto from "../img/minhaFoto.png"

export default function Home(){
  return (
    <div>
      <div>
        <h1>Bem vindos ao meu PORTFOLIO</h1>
        <Image src={MinhaFoto} alt="Foto do criador"/>
      </div>
      <div>
        <p>
          Nesse portfólio mostro um pouco sobre mim e do que eu mais gosto de fazer, PROGRAMAÇÃO.
          Acompanhe aqui: os conhecimentos das linguagens que possuo e alguns projetos que tenho, projetos em grupo, 
          e pessoais. Esse portfolio será atualizado continuamente, de acordo com o avanço da minha carreira. 
          FQUEM SEMPRE ATENTOS!
        </p>
      </div>
    </div>
  )
}