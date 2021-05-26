import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import Contato from 'assets/image/contato.png';
import Insta from 'assets/image/instagram.png';
import linkedin from 'assets/image/linkedin.png';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import "./Footer.css";

const Footer = () => {
    return(
        <footer className="footer mt-auto py-3">
            <div className="container">
                <hr></hr>
                <p className="text-light">Desenvolvido por <b>Negro Systems</b></p>
            </div>

            <div className="contacts">
                <img src={Contato} alt="Logo" width="150" />
                <p className="panelChanel">
                    <h4>Canais de Atendimentos:</h4>
                    <p> <PhoneIcon />  (16) 99774-8254</p>
                    <p> <PhoneIcon />  (16) 99774-8254</p>
                    <p> <EmailIcon /> leo.cristiano.oliveira@gmail.com</p>
                    <a href="https://www.linkedin.com/in/leonardo-cristiano-de-oliveira" target="_blank" rel="noreferrer"><img src={Insta} alt="Logo" width="40" /></a>
                    <a href="https://www.linkedin.com/in/leonardo-cristiano-de-oliveira" target="_blank" rel="noreferrer"><img src={linkedin} alt="Logo" width="45"/></a>
                </p>
                <p>
                <h4>Endereço:</h4>
                    <p> <HomeWorkIcon />  Rua Luigi Magri, nº107 CEP: 14811-371, Araraquara-SP</p>
                </p>
            </div>

        </footer>
    );
}

export default Footer;