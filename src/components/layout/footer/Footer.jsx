import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contenedor">

                {/* ================= CANALES DE ATENCIÓN ================= */}

                <div className="footer-bloque footer-equipo">

                    <h3>CANALES DE ATENCIÓN</h3>

                    <div className="footer-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Buenos Aires, Argentina</span>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-phone"></i>
                        <span>+54 11 1234 5678</span>
                    </div>

                    <div className="footer-item">
                        <i className="fa-solid fa-envelope"></i>
                        <span>info@alquimialicores.com</span>
                    </div>

                </div>


                {/* ================= NEWSLETTER ================= */}

                <div className="footer-bloque">

                    <h3>NEWSLETTER</h3>

                    <p>Recibí novedades y promociones.</p>

                    <form
                        id="formNewsletter"
                        action="https://formspree.io/f/mbdebbba"
                        method="POST"
                        className="newsletter-form"
                    >
                        <input
                            type="email"
                            name="email"
                            placeholder="Tu email"
                            required
                        />

                        <button type="submit">
                            OK
                        </button>

                    </form>

                    <div
                        id="formMsgNewsletter"
                        className="mt-2"
                    ></div>

                    <div className="footer-redes">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-youtube"></i>

                    </div>
                    <p>© 2026 Alquimia Licorera</p>
                </div>


                {/* ================= QR ================= */}

                <div className="footer-bloque footer-qr">

                    <img
                        src="/img/tarjetaQR2.png"
                        alt="Código QR"
                        loading="lazy"
                    />

                </div>

            </div>

        </footer>
    );
}

export default Footer;