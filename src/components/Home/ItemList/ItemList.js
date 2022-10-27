import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos/Productos";
import Item from "../Item/Item";
import "../ItemList/ItemList.css";


const ItemList = () => {
  const [articulo, setArticulo] = useState([]);
  const {category}=useParams();

  const mostrarProducto = () => {
    setTimeout(() => {
      const articulo = Productos;
      setArticulo(articulo);
    },);
  };

  useEffect(() => {
    mostrarProducto();
  }, []);

  return (
    <div className="carta">
      {category ? articulo.filter((producto)=>producto.categoria === category).map((producto) => (
        <div key={producto.id}>
          <Item
            id={producto.id}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
            stock={producto.stock}
            categoria={producto.categoria}
          />
        </div>
        
      )) : articulo.map ((producto)=>(<div key={producto.id}>
        <Item
          id={producto.id}
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          stock={producto.stock}
          categoria={producto.categoria}
          
        />
      </div>))}
    
    </div>
  );
};

export default ItemList;
