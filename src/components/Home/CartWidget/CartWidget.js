import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import '../CartWidget/CartWidget.css';


const CartWidget=()=>{
    return(
        <div className="carrito">
            <a  href="#"> <FontAwesomeIcon icon={faCartArrowDown}/></a>
           
        </div>
    )
}

export default CartWidget;