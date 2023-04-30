import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=>state); 
  return (
    <div className="">
      <nav className="flex text-white justify-between items-center h-20 max-w-6xl mx-auto  ">

        <NavLink to="/">
          <div >
          <img src="../logo.png"  width="150px" height="60px" />
          {/* <p className="text-2xl italic ">E-Commerse</p> */}
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p className="text-xl">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl" />
                  {
                    cart.length > 0 && <span className="bg-green-400 px-1 text-xs rounded-full absolute -top-1 -right-1 animate-bounce ">{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
