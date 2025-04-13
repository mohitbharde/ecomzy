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
    <div className="max-w-[1200px] mx-auto flex flex-row justify-center">
      {cart.length > 0 ? (
        <div className="  flex flex-col md:flex-row p-2 ">
          <div className=" w-[100%] md:w-[60%] flex flex-col p-0 md:p-3 gap-5 items-center">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="w-[100%] md:w-[40%] mt-5  ">
            <div className="flex flex-col p-5 gap-5 my-14 justify-between">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  your cart
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">
                  Summary
                </div>
              </div>

              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">
                  Total Items : {cart.length}
                </span>
              </p>
              <div className="flex flex-col">
                <p className="text-xl font-bold">
                  <span className="text-gray-700 font-semibold">
                    Total Amount : ${totalAmount}
                  </span>
                </p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                  checkout now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            no data found
          </h1>
          <Link to="/">
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
