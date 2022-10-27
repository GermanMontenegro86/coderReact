import ItemCount from "../../../components/Home/ItemCount/ItemCount";
import "../ItemDetail/itemDetail.css"


const ItemId = ({ categoria, id, nombre, imagen, precio, stock }) => {
  return (
    <div>
      
      <article className="card">
        <h5> {`# ${id}`} </h5>
        <h6> {nombre} </h6>
        <img src={imagen} alt={`Nombre del producto ${nombre}`} />
        <div>
          <p className="precio">{`Precio $${precio}`}</p>
        </div>
        <> {`Stock ${stock}`} </>
        <> {categoria} </>
        <ItemCount stock={stock} />
       
      </article>
      
       
    </div>
  );
};

export default ItemId;

