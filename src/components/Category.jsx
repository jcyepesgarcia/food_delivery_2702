import React from "react";
import { categorias } from "../data/data.js";

function Category() {

  return (
    <section className="max-w-[1640px] m-auto px-4 pb-24 ">
      <h2 className="text-orange-600 font-bold text-4xl text-center py-12 uppercase">Comer rico si es Fácil</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categorias.map((categoria)=>(
          <article className="bg-gray-100 rounded-lg p-4 flex justify-between items-center" key={categoria.id}>
            <h3 className="font-bold sm:text-xl">{categoria.name}</h3>
            <img className="w-12 sm:w-20" src={categoria.image} alt={categoria.name} />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Category;
