import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += Number(cart[i].price);
    }
    setTotalAmount(total.toFixed(2));
  }, [cart]);
  return (
    <div className="max-w-6xl mx-auto">
      {cart.length > 0 ? (
        <div className="flex">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
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
