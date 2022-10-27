import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "../Item/Item.css";



const Item = ({ categoria, id, nombre, imagen, precio, stock }) => {
  return (
    <div>
      
      <article className="card">
        <h5> {`# ${id}`} </h5>
        <h3> {nombre} </h3>
        <img src={imagen} alt={`Nombre del producto ${nombre}`} />
        <div>
          <p className="precio">{`Precio $${precio}`}</p>
          <Link  to={`/${categoria}/${id}`}>
          <Button variant="primary">
            Ver detalles
          </Button>
          </Link>
        
        </div>
        <> {`Stock ${stock}`} </>
        <> {categoria} </>
       
      </article>
       
    </div>
  );
};

export default Item;
