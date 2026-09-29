import { useState, useEffect } from "react";
import PersonasList from "./PersonasList";

const PersonasContainer = () => {

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch("/datos/Personas.json")
      .then(res => res.json())
      .then(datos => setPersonas(datos))
      .catch(error => console.log(error));
  }, []);

  return <PersonasList personas={personas} />;
};

export default PersonasContainer;