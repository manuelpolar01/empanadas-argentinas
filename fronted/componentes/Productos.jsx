import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import ItemList from "./ItemList";
import { getEmpanadas } from "../mock/AsyncMock";

const Productos = () => {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    getEmpanadas().then(data => {
      if (categoria) {
        setProductos(
          data.filter(p => p.category === categoria)
        );
      } else {
        setProductos(data);
      }
      setLoading(false);
    });
  }, [categoria]);

  if (loading)
    return (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h2 className="text-center my-4">
        {categoria ? categoria.toUpperCase() : "Todas nuestras empanadas"}
      </h2>
      <ItemList items={productos} />
    </>
  );
};

export default Productos;