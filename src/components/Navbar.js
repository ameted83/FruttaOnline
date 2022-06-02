import React from "react";
import NavbarLogo from "../assets/logo-main.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import PopUpCart from "./PopUpCart";
import { useState } from "react";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);

  const handleOpenCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <div className="bg-green-500 h-[80px] flex items-center justify-between p-2 text-white ">
        <div>
          <img
            src={NavbarLogo}
            alt="logoNavbar"
            className="w-[50px] rounded-[100%]"
          />
        </div>
        <div className="flex justify-around items-center">
          <div>
            <div className="flex justify-center items-center">
              <div>
                <ShoppingCartIcon onClick={() => handleOpenCart()} />
              </div>

              <div className="bg-white rounded-[100%] w-[27px] h-[27px] text-center text-black text-lg">
                {amount}
              </div>
            </div>
          </div>
          <div>
            <button className="rounded-md bg-orange-500 p-2 ml-4 hover:bg-green-800">
              Registrati
            </button>
            <button className="rounded-md bg-orange-500 p-2 ml-2 mr-4 hover:bg-green-800">
              Login
            </button>
          </div>
        </div>
      </div>
      {showCart && <PopUpCart />}
    </div>
  );
};

export default Navbar;
