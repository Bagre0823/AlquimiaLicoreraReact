const Testimonio = ({ texto, estrellas, nombre }) => {

    return (
        <div className="testimonio">

            <p>"{texto}"</p>

            <span>
                {"★".repeat(estrellas)}
            </span>

            <p>- {nombre}</p>

        </div>
    );
};

export default Testimonio;