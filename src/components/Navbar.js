import React from "react";
import NavbarLogo from "../assets/logo-main.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
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
        <div>
          <ShoppingCartIcon />
          <button className="rounded-md bg-orange-500 p-2 ml-4 hover:bg-green-800">
            Registrati
          </button>
          <button className="rounded-md bg-orange-500 p-2 ml-2 mr-4 hover:bg-green-800">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
