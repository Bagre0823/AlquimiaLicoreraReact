const Persona = ({ texto, icono, tarea, mail }) => {
    return (
        <div className="persona-card">

            <i className={icono}></i>

            <h3>{texto}</h3>

            <p>{tarea}</p>

            <span>{mail}</span>

        </div>
    );
};

export default Persona;