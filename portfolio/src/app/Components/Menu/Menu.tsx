import Link from "next/link";

export default function Menu(){
    return(
        <nav>
            <li><Link href={"/"}>Voltar ao início</Link></li>
            <li><Link href={"/informacao"}>Um pouco da minha história</Link></li>
        </nav>
    )
}