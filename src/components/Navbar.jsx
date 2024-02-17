import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return <div className="bg-slate-950">
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">

      <NavLink to='/'>
        <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className="h-14" />
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 gap-4">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/cart">
          <FaShoppingCart className="text-2x"/>{cart.length?(<sup className="bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</sup>):(<></>)}
        </NavLink>
      </div>
    </div>
  </div>;
};

export default Navbar;
