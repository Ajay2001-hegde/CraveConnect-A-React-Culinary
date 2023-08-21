
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";


import { useSelector } from "react-redux";


const Title = () => (
  
    <a href="/">
      <img className="pl-10 w-32 mt-3" src={LOGO_URL} alt="Food Fire Logo" />
    </a>
  );


 



const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
 

  const [isLoggedin, setisLoggedin] = useState(true);
  const onlineStatus = useOnlineStatus(); 
  return (
    <div class="header flex justify-between m-9 w-auto bg-orange-300 rounded-2xl shadow-xl text-blue-95 font-semibold">
      <Title />
      <div className="p-0 px-10">
        <ul className=" m-6 list-none flex  justify-between">
       
          
          <li className="px-4 cursor-pointer text-lg hover:bg-orange-200 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            <Link to="/" className="text-black no-underline">
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer text-lg hover:bg-orange-200 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            <Link to="/about" className="text-black no-underline">
              About
            </Link>
          </li>
          <li className="px-4 cursor-pointer text-lg hover:bg-orange-200 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            <Link to="/contact" className="text-black no-underline">
              Contact
            </Link>
            </li>
            <li className="px-4 cursor-pointer text-lg hover:bg-orange-200 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            <Link to='/grocery' className="text-black no-underline">
              Grocery
            </Link> </li>
            <li className="px-4 cursor-pointer text-lg hover:bg-orange-200 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            <Link to="/cart">Cart - ({cartItems.length}items)</Link> 
            </li>
          
            <li className="px-4 cursor-pointer text-lg hover:bg-blue-400 hover:text-black rounded-lg py-2  transition duration-300 ease-in-out">
            {isLoggedin ? (
              <button className="to-blue-700" onClick={() => setisLoggedin(false)}>
                Logout
              </button>
            ) : (
              <button className="to-blue-700" onClick={() => setisLoggedin(true)}>
                Login
              </button>
            )}
          </li>

          <li className="px-4 cursor-pointer text-lg py-2 ">
            {onlineStatus ? (
              <span className="text-green-700">🟢</span>
            ) : (
              <span className="text-red-500" >Offline </span>
            )}
          </li>
        </ul>
      </div>
    </div>
    );
  };

  export default Header;