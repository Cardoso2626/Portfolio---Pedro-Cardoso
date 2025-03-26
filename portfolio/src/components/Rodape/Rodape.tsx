import IconeLinkeIn from "../../img/linkedInIcon.png"
import IconeInstagram from "../../img/instaIcon.png"
import IconeGithub from "../../img/githubIcon.png"
import Link from "next/link"
import Image from "next/image"

export default function Rodape(){
    return(
        <footer className="containerFooter">
            <h3 className="item item1">Desenvolvido por Pedro Henrique!</h3>
            <p className="item item2">2025 Pedro Cardoso - Todos os direitos reservados</p>
            <div className="item item3">
                <p>Me acompanhe aqui:</p>
                <div className="containerIcones">
                    <Link target={"_blank"} href={"https://www.linkedin.com/in/pedro-saraiva1/"}>
                        <Image src={IconeLinkeIn} alt="Icone do LinkedIn" className="icones"/>
                    </Link>
                    <Link target={"_blank"} href={"https://github.com/Cardoso2626"}>
                        <Image src={IconeGithub} alt="Icone do GitHub" className="icones"/>
                    </Link>
                    <Link target={"_blank"} href={"https://www.instagram.com/ph.saraivax/"}>
                        <Image src={IconeInstagram} alt="Icone do Instagram" className="icones"/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}