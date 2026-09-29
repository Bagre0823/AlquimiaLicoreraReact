import Beneficios from "../beneficios/Beneficios";
import ItemListContainer from "./ItemListContainer";
import { Link } from "react-router-dom";

const Productos = () => {
  return (
    <>
      <Beneficios />
      <ItemListContainer />
    </>
  );
};

export default Productos;