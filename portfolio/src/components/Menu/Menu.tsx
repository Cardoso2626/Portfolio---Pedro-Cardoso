import Image from "next/image";
import Link from "next/link";
import IconeCasa from "../../img/homeIcon.png"
import IconeComputador from "../../img/computerIcon.png"
import IconeAvatar from "../../img/meIcon.png"


export default function Menu(){
    return(
        <nav>
            <li>
                <Image src={IconeCasa} alt="Icone de casa"/>
                <Link href={"/"}>Página principal</Link>
            </li>
            <li>
                <Image src={IconeAvatar} alt="Icone de vatar"/>
                <Link href={"/sobreMim"}>Sobre mim</Link>
            </li>
            <li>
                <Image src={IconeComputador} alt="Icone de computador"/>
                <Link href={"/projetos"}>Projetos</Link>
            </li>
        </nav>
    )
}