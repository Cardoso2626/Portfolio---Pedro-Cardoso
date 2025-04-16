import Image from "next/image";
import Link from "next/link";
import IconeCasa from "../../img/homeIcon.png"
import IconeComputador from "../../img/computerIcon.png"
import IconeAvatar from "../../img/meIcon.png"


export default function Menu(){
    return(
        <nav>
            <ul className="containerNavCabecalho">
                <li className="itemLi">
                    <Link href={"/"}>
                        <Image src={IconeCasa} alt="Icone de casa" className="icones"/>
                    </Link>
                    <Link href={"/"} className="linkEscritoHeader">Página principal</Link>
                </li>
                <li className="itemLi">
                    <Link href={"/sobreMim"}>
                        <Image src={IconeAvatar} alt="Icone de vatar" className="icones"/>
                    </Link>
                    <Link href={"/sobreMim"} className="linkEscritoHeader">Sobre mim</Link>
                </li>
                <li className="itemLi">
                    <Link href={"/projetos"}>
                        <Image src={IconeComputador} alt="Icone de computador" className="icones"/>
                    </Link>
                    <Link href={"/projetos"} className="linkEscritoHeader">Projetos</Link>
                </li>
            </ul>               
        </nav>
    )
}