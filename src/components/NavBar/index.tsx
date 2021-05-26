import Logo from 'assets/image/logo.png';
import InputIcon from '@material-ui/icons/Input';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import BusinessIcon from '@material-ui/icons/Business';
import GavelIcon from '@material-ui/icons/Gavel';
import Button from "react-bootstrap/Button";
import GroupIcon from '@material-ui/icons/Group';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm navBar">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <div className="container">
                <nav className="my-2 my-md-0 mr-md-3">
                    <div className="row">
                        <div className="nav-buttons">
                            <div className="col-md-2">
                                <img src={Logo} alt="Logo" width="170" />
                            </div>
                            <div className="col-md-2">
                                <p><BusinessIcon /> Quem Somos?</p>
                            </div>
                            <div className="col-md-2">
                                <p><GavelIcon /> Política da Empresa</p>
                            </div>
                            <div className="col-md-2">
                                <p><PermPhoneMsgIcon /> Fale com a Gente</p>
                            </div>
                            <div className="col-md-2">
                                <p><GroupIcon /> Clientes Parceiros</p>
                            </div>
                            <div className="col-md-3">
                                <Button className="btn-cadastrar" title="Login" block size="lg">
                                    <InputIcon color="action" style={{ fontSize: 25 }}/>  Login no Sistema
                                </Button>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;