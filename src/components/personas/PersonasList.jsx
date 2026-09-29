import Persona from "./Persona";

const PersonasList = ({ personas }) => {
    return (
        <div className="personas-grid">

            {personas.map((persona) => (
                <Persona
                    key={persona.id}
                    {...persona}
                />
            ))}

        </div>
    );
};

export default PersonasList;