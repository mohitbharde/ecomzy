import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index}/>
            })}
          </div>
          <div>
            <div>your cart</div>
            <div>Summary</div>
            <p>
              <span>Total Items : {cart.length}</span>
            </p>
            <div>
              <p>
                <span>Total Amount : ${totalAmount}</span>
              </p>
              <button>checkout now</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>no data found</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
