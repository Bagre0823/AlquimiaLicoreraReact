import { useEffect, useState } from "react";
import Testimonio from "./Testimonio";

const TestimoniosContainer = () => {

    const [testimonios, setTestimonios] = useState([]);

    useEffect(() => {

        fetch("/datos/testimonios.json")
            .then((response) => response.json())
            .then((data) => {
                setTestimonios(data);
            })
            .catch((error) => {
                console.error("Error al cargar testimonios:", error);
            });

    }, []);

    return (
        <div className="testimonios-lista">

            {testimonios.map((testimonio) => (
                <Testimonio
                    key={testimonio.id}
                    {...testimonio}
                />
            ))}

        </div>
    );
};

export default TestimoniosContainer;