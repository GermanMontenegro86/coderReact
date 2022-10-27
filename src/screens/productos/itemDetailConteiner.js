
import Productos from "../../components/Home/Productos/Productos";
import ItemId from "./ItemDetail/itemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ItemDetailConteiner = () => {
  const {productoId}=useParams();
  const [productos, setArticulo] = useState([]);

  const mostrarProducto = () => {
    setTimeout(() => {
   
      setArticulo(Productos);
    },);
  };

  useEffect(() => {
    mostrarProducto();
  }, []);
 
  return (
    <div className="carta">
      {productoId ?productos.filter((producto) => producto.id.toString() === productoId).map((prod) => (
        <div key={prod.id}>
          <ItemId 
         {...prod}
          />
         
        </div>
      )):""}
    
    </div>
  );
};

export default ItemDetailConteiner;
