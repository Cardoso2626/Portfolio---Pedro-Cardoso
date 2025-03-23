import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <li><Link href={"/"}>Voltar ao início</Link></li>
            <li><Link href={"/sobreMim"}>Sobre mim</Link></li>
            <li><Link href={"/projetos"}>Projetos</Link></li>
        </nav>
    )
}