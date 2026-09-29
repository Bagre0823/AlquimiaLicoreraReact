import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/datos/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudieron cargar los productos");
        }

        return res.json();
      })
      .then((datos) => setProductos(datos))
      .catch((error) => setError(error.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado-carga">Cargando productos...</p>;
  if (error) return <p className="estado-error">{error}</p>;

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
