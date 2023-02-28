import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <header className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Lado izquierdo: logo y menú hamburguesa */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Food <span className="font-bold">City</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Domicilio</p>
          <p className="p-2">Recoger</p>
        </div>
      </div>
      {/* Centro: campo de busqueda */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Encuentra tu comida favorita"
          className="bg-transparent p-2 focus:outline-none w-[90%]"
        />
      </div>
      {/* Lado derecho: carrito de compras */}
      <button className="bg-black text-white hidden md:flex items-center py-2 gap-2 rounded-full">
        <BsFillCartFill size={20} /> Cart
      </button>
      {/* Menú lateral*/}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <aside
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Food <span className="font-bold">City</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <TbTruckDelivery size={30} />
              Pedidos
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <MdFavorite size={25} />
              Favoritos
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <FaWallet size={25} />
              Billetera
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <MdHelp size={25} />
              Ayuda
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <AiFillTag size={25} />
              Promociones
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <BsFillSaveFill size={25} />
              Destacados
            </li>
            <li className="text-xl py-4 flex gap-2 cursor-pointer">
              <FaUserFriends size={25} />
              Invita a tus amigos
            </li>
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Navbar;
