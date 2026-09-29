import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

const FormularioProductoContainer = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: "",
        descripcion: "",
        decsLarga: "",
        precio: "",
        stock: ""
    });

    const [imagen, setImagen] = useState(null);
    const [cargando, setCargando] = useState(false);


    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarCambioImagen = (evento) => {
        const archivo = evento.target.files[0];
        setImagen(archivo);
    };


    const manejarEnvio = (evento) => {

        evento.preventDefault();

        if (!imagen) {
            alert("Seleccionar una imagen para el producto a cargar.");
            return;
        }

        setCargando(true);

        const productoCompleto = {
            ...datosForm,
            imagen: imagen.name
        };

        console.log("Producto ingresado:", productoCompleto);

        /*
            Próxima etapa:

            1. Subir la imagen a ImgBB.
            2. Obtener la URL de la imagen.
            3. Agregar la URL al producto.
            4. Guardar el producto en una API/base de datos.
        */

        setCargando(false);
    };


    return (
        <FormularioProducto
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
            datosForm={datosForm}
            cargando={cargando}
        />
    );
};

export default FormularioProductoContainer;