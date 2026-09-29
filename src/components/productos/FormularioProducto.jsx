import "./FormularioProducto.css";

const FormularioProducto = ({
    manejarCambio,
    manejarEnvio,
    manejarCambioImagen,
    datosForm,
    cargando
}) => {

    return (
        
        <form className="formulario-producto" onSubmit={manejarEnvio}>

            <h3>Agregar Nuevo Producto</h3>

            <div>
                <label>Nombre:</label>

                <input
                    name="nombre"
                    type="text"
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                    required
                />
            </div>

            <div>
                <label>Descripción corta:</label>

                <input
                    name="descripcion"
                    type="text"
                    value={datosForm.descripcion}
                    onChange={manejarCambio}
                    required
                />
            </div>

            <div>
                <label>Descripción completa:</label>

                <textarea
                    name="descLarga"
                    value={datosForm.decLarga}
                    onChange={manejarCambio}
                    rows="4"
                    required
                />
            </div>

            <div>
                <label>Precio:</label>

                <input
                    name="precio"
                    type="number"
                    value={datosForm.precio}
                    onChange={manejarCambio}
                    min="0"
                    step="0.01"
                    required
                />
            </div>

            <div>
                <label>Stock:</label>

                <input
                    name="stock"
                    type="number"
                    value={datosForm.stock}
                    onChange={manejarCambio}
                    min="0"
                    required
                />
            </div>

            <div>
                <label>Imagen:</label>

                <input
                    name="imagen"
                    type="file"
                    accept="image/*"
                    onChange={manejarCambioImagen}
                    required
                />
            </div>

            <button
                type="submit"
                disabled={cargando}
            >
                {cargando
                    ? "Guardando..."
                    : "Guardar Producto"
                }
            </button>

        </form>
    );
};

export default FormularioProducto;