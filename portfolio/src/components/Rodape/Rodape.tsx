import IconeLinkeIn from "../../img/linkedInIcon.png"
import IconeInstagram from "../../img/instaIcon.png"
import IconeGithub from "../../img/githubIcon.png"
import Link from "next/link"
import Image from "next/image"

export default function Rodape(){
    return(
        <footer className="containerFooter">
            <h3 className="itemFoot item1Foot">Desenvolvido por Pedro Henrique!</h3>
            <p className="itemFoot item2Foot">2025. Pedro Cardoso - Todos os direitos reservados</p>
            <div className="itemFoot item3">
                <p className="pFoot">Me acompanhe aqui:</p>
                <ul className="containerIcones">
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/pedro-saraiva1/"}>
                            <Image src={IconeLinkeIn} alt="Icone do LinkedIn" className="itemIcone icones"/>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/Cardoso2626"}>
                            <Image src={IconeGithub} alt="Icone do GitHub" className="itemIcone icones"/>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/ph.saraivax/"}>
                            <Image src={IconeInstagram} alt="Icone do Instagram" className="itemIcone icones"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}