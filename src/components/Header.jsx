import React from "react";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex item-center gap-2">
          <img src={Logo} alt="logo-img" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>

        <div className="flex item-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-textColor cursor-pointer hover:text-headingColor transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div className="flex items-center justify-center relative">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt="avatar0img"
              className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-md shadow-gray-600 rounded-full p-1 cursor-pointer"
              onClick={login}
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
