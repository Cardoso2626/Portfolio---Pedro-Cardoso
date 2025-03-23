import IconeLinkeIn from "../../img/linkedInIcon.png"
import IconeInstagram from "../../img/instaIcon.png"
import IconeGithub from "../../img/githubIcon.png"
import Link from "next/link"
import Image from "next/image"

export default function Rodape(){
    return(
        <footer>
            <div>
                <h3>Desenvolvido por Pedro Henrique!</h3>
                <p>2025 Pedro Cardoso - Todos os direitos reservados</p>
                <div>
                    <p>Me acompanhe aqui:</p>
                    <Link target={"_blank"} href={"https://www.linkedin.com/in/pedro-saraiva1/"}>
                        <Image src={IconeLinkeIn} alt="Icone do LinkedIn"/>
                    </Link>
                    <Link target={"_blank"} href={"https://github.com/Cardoso2626"}>
                        <Image src={IconeGithub} alt="Icone do GitHub"/>
                    </Link>
                    <Link target={"_blank"} href={"https://www.instagram.com/ph.saraivax/"}>
                        <Image src={IconeInstagram} alt="Icone do Instagram"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}