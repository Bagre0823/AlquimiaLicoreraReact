import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./DetalleProducto.css";

const DetalleProducto = () => {

    const { id } = useParams();

    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        setCargando(true);
        setError(false);

        fetch("/datos/productos.json")

            .then((response) => {

                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }

                return response.json();
            })

            .then((productos) => {
                const productoEncontrado = productos.find(
                    (producto) => producto.id === Number(id)
                );

                setProducto(productoEncontrado);
            })

            .catch((error) => {

                console.error("Error al cargar el producto:", error);
                setError(true);

            })

            .finally(() => {

                setCargando(false);

            });

    }, [id]);


    // Mientras se está realizando el fetch
    if (cargando) {
        return <p>Cargando producto...</p>;
    }


    // Si ocurrió un error
    if (error) {
        return <p>Error al cargar el producto.</p>;
    }


    // Si no existe el producto solicitado
    if (!producto) {
        return <p>Producto no encontrado.</p>;
    }


    return (
        <div className="detalle-producto">

            <img
                src={`/${producto.imagen}`}
                alt={producto.nombre}
            />

            <div className="detalle-producto-info">

                <h2>{producto.nombre}</h2>

                <p>{producto.descLarga}</p>

                <h3>$ {producto.precio}</h3>

                <Link to="/productos" className="boton-link">
                    Volver a productos
                </Link>

            </div>

        </div>
    );
};

export default DetalleProducto;