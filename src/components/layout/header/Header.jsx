import "./Header.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">

            <header className="header-contenedor">

                {/* Sección izquierda - Logo */}
                <div className="header-logo">
                    <Link to="/" className="logo-link">
                        <img src="/img/LogoGris_chico.png" alt="Logo Licores Artesanales"/>
                    </Link>
                </div>

                {/* Sección derecha - Navbar */}
                <div className="header-nav">
                    <Navbar />
                </div>

            </header>

            <hr />

        </div>
    );
};

export default Header;