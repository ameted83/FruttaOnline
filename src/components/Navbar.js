import React from "react";
import NavbarLogo from "../assets/logo-main.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import PopUpCart from "./PopUpCart";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { SignUp } from "./SignUp";
import Welcome from "./Welcome";

const Navbar = () => {
  const [signUp, setSignUp] = useState(false);
  const { amount } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);

  const arrayUsers = useSelector((state) => state.user.users);

  const handleOpenCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <div className="bg-green-500 h-[80px] flex items-center justify-between p-2 text-white fixed w-screen top-0">
        <div>
          <Link to="/">
            <img
              src={NavbarLogo}
              alt="logoNavbar"
              className="w-[50px] rounded-[100%]"
            />
          </Link>
        </div>
        <div className="flex justify-around items-center">
          <div>
            <div className="flex justify-center items-center">
              <button>
                <Badge badgeContent={amount} color="success">
                  <ShoppingCartIcon
                    className="h-[30px] hover:text-[40px] hover:text-orange-500"
                    onClick={() => handleOpenCart()}
                  />
                </Badge>
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={() => setSignUp(true)}
              className="rounded-md bg-orange-500 p-2 ml-4 hover:bg-green-800"
            >
              Registrati
            </button>
            <button className="rounded-md bg-orange-500 p-2 ml-2 mr-4 hover:bg-green-800">
              Login
            </button>
            <div>{arrayUsers.length > 0 ? <Welcome /> : false}</div>
          </div>
        </div>
      </div>
      {showCart && <PopUpCart cart={setShowCart} />}
      {signUp && <SignUp login={setSignUp} />}
    </div>
  );
};

export default Navbar;
