import "./Beneficios.css";

const Beneficios = () => {
    return (
        <section className="beneficios">

            <div className="beneficios-contenedor">

                <div className="beneficio">
                    <i className="fa-solid fa-leaf"></i>
                    <h3>100% Natural</h3>
                    <p>Ingredientes seleccionados sin aditivos.</p>
                </div>

                <div className="beneficio">
                    <i className="fa-solid fa-hand-holding-heart"></i>
                    <h3>Hecho con pasión</h3>
                    <p>Producción familiar artesanal.</p>
                </div>

                <div className="beneficio">
                    <i className="fa-solid fa-wine-bottle"></i>
                    <h3>Sabores únicos</h3>
                    <p>Recetas exclusivas e intensas.</p>
                </div>

            </div>

        </section>
    );
};

export default Beneficios;