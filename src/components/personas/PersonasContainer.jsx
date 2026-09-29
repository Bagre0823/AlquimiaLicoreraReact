import { useEffect, useState } from "react";
import PersonasList from "./PersonasList";

const PersonasContainer = () => {

  const [personas, setPersonas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("/datos/Personas.json")
      .then((res) => {

        if (!res.ok) {
          throw new Error("No se pudieron cargar las personas");
        }

        return res.json();
      })

      .then((datos) => setPersonas(datos))

      .catch((error) => setError(error.message))

      .finally(() => setCargando(false));

  }, []);

  if (cargando) {
    return <p className="estado-carga">Cargando personas...</p>;
  }

  if (error) {
    return <p className="estado-error">{error}</p>;
  }

  return <PersonasList personas={personas} />;
};

export default PersonasContainer;