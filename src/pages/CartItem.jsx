import {FcDeleteDatabase} from "react-icons/fc";
import { remove } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({item,itemIndex}) => {

  const dispatch=useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item))
  }
  return (
    <div>
      <div>
        <img src={item.image} />
      </div>
      <div>
        <h1>{item.title}</h1> 
        <h1>{item.description}</h1>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
