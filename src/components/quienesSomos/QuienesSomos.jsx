import { Link } from "react-router-dom";
import PersonasContainer from "../personas/PersonasContainer";
import "./QuienesSomos.css";

const QuienesSomos = () => {

    return (
        <section className="quienes-somos">

            <div className="quienes-somos-contenido">

                <span>Quiénes somos</span>

                <h2>Probá nuestros licores hoy</h2>

                <h3>Pasión embotellada</h3>

                <div className="quienes-somos-texto">

                    <p>
                        Detrás de cada uno de nuestros licores hay una historia
                        que nace en lo simple: el disfrute de crear, mezclar y
                        dar vida a sabores únicos.
                    </p>
                    <p>
                        Trabajamos en pequeñas partidas, respetando los tiempos
                        y procesos que permiten que cada bebida alcance su mejor
                        expresión.
                    </p>
                    <p>
                        No buscamos producir en masa, sino ofrecer algo auténtico,
                        hecho con dedicación.
                    </p>
                    <p>
                        Nuestros licores están pensados para acompañar momentos
                        especiales, para compartir, regalar o simplemente disfrutar.
                    </p>
                    
                </div>

                <Link to="/productos" className="btn-principal">
                    Ver nuestros licores
                </Link>

            </div>


            {/* ================= NUESTRO EQUIPO ================= */}

            <div className="nuestro-equipo">

                <h2>Nuestro equipo</h2>

                <PersonasContainer />

            </div>

        </section>
    );
};

export default QuienesSomos;