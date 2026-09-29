import { Link } from "react-router-dom";
import Item from "./Item";
import "./ItemList.css";

const ItemList = ({ productos }) => {
  return (
    <section className="productos">

      <h2>Nuestros Licores</h2>

      <div className="productos-acciones">
        <Link to="/productos/nuevo" className="btn-principal">
          + Nuevo producto
        </Link>
      </div>

      <div className="productos-grid" id="productos-grid">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            {...producto}
          />
        ))}
      </div>

    </section>
  );
};

export default ItemList;
