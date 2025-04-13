import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
  };

  return (
    <div className="group flex flex-col items-center justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 hover:shadow-[0px_0px_95px_53px_#00000024]  transition duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 ">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div>
        <img src={post.image} alt="post_image" className="h-[180px]" />
      </div>
      <div className="flex justify-between gap-12 items-center">
        <p className="text-green-600 font-semibold">${post.price}</p>
        <div>
          {cart.some((p) => p.id === post.id) ? (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ]:"
              onClick={removeFromCart}
            >
              Remove Item
            </button>
          ) : (
            <button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 "
              onClick={addToCart}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
