import "./Contacto.css";
import TestimoniosContainer from "./TestimoniosContainer";

const Contacto = () => {

    return (
        <section className="contacto">

            <div className="contacto-contenido">

                {/* COLUMNA IZQUIERDA */}
                <div className="contacto-form">

                    <h2>Contacto</h2>

                    <span className="subtitulo">
                        Estamos para ayudarte. Escribinos y te respondemos pronto.
                    </span>

                    <form
                        id="formContacto"
                        action="https://formspree.io/f/mbdebbba"
                        method="POST"
                    >

                        <div className="form-grupo">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                required
                            />
                        </div>

                        <div className="form-grupo">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div className="form-grupo">
                            <input
                                type="text"
                                name="asunto"
                                placeholder="Asunto"
                                required
                            />
                        </div>

                        <div className="form-grupo">
                            <textarea
                                name="message"
                                placeholder="Escribí tu mensaje..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn-enviar"
                        >
                            Enviar
                        </button>

                    </form>

                </div>


                {/* COLUMNA DERECHA */}
                <div className="contacto-testimonios">

                    <h3>
                        Lo que opinan quienes ya nos eligieron
                    </h3>

                    <TestimoniosContainer />

                </div>

            </div>

        </section>
    );
};

export default Contacto;