import Image from "next/image";
import MinhaFoto from "../img/minhaFoto.png"

export default function Home(){
  return (
    <div>
      <h1>OLÁ, ESTE É MEU PORTÓLIO</h1>
      <Image src={MinhaFoto} alt="Foto do criador"/>
    </div>
  )
}