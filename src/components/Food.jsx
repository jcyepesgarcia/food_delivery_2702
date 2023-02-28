import React, { useState } from "react";
import { data } from "../data/data.js";

function Food() {
  const [productos, setProductos] = useState(data);

  // filtrado por categoria
  function filtrarXCategoria(categoria) {
    console.log("clicked categoria");
    setProductos(
      data.filter((item) => {
        return item.category === categoria;
      })
    );
  }
  // filtrado por precio
  function filtrarXPrecio(precio) {
    setProductos(
      data.filter((item) => {
        return item.price === precio;
      })
    );
  }

  return (
    <section className="max-w-[1640px] mx-auto px-4 pb-24 ">
      <h1 className="text-orange-600 font-bold text-4xl text-center py-12 uppercase">
        😋 Lo Más Apetecido 😋
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filtro por categoría */}
        <div className="my-2">
          <p className="font-bold text-gray-700">Filtre por Categoría</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setProductos(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Todos
            </button>
            <button
              onClick={() => filtrarXCategoria("hamburguesa")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Hamburguesas
            </button>
            <button
              onClick={() => filtrarXCategoria("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filtrarXCategoria("ensalada")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Ensalada
            </button>
            <button
              onClick={() => filtrarXCategoria("pollo")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pollo
            </button>
          </div>
        </div>
        {/* Filtro por precio */}
        <div className="my-2">
          <p className="font-bold text-gray-700">Filtre por Precio</p>
          <div className="flex justify-between max-w-[400px] w-full">
            <button
              onClick={() => filtrarXPrecio("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filtrarXPrecio("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filtrarXPrecio("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filtrarXPrecio("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Renderización de productos */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {productos.map((producto) => (
          <article
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={producto.id}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={producto.image}
              alt={producto.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{producto.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {producto.price}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Food;
