import { useState } from "react";
import { Link } from "react-router-dom";
import "./Item.css";
/* import BotonFavorito from "../BotonFavorito" */

const Item = ({ id, nombre, descripcion, precio, imagen }) => {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0)
      setContador(contador - 1);
  };

  return (
    <div className="producto">

      <img src={imagen} alt={nombre} />

      <h3>{nombre}</h3>

      <p>{descripcion}</p>

      <h4>$ {precio}</h4>

      <Link
        to={`/producto/${id}`}
        className="boton-link"
      >
        Ver detalle
      </Link>

      {/* <BotonFavorito /> */}

      <div className="contador">
        <button onClick={decrementar}>-</button>

        <span>{contador}</span>

        <button onClick={incrementar}>+</button>
      </div>

    </div>
  );
};

export default Item;