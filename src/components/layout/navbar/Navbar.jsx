import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar-custom">
            <ul className="navbar-nav">

                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        Inicio
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/quienes-somos">
                        Quienes Somos
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/productos">
                        Productos
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/contacto">
                        Contacto
                    </Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;