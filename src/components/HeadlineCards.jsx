import React from "react";
import headlineBg1 from "../assets/img/promocion.png";
import headlineBg2 from "../assets/img/new_establishments.jpg";
import headlineBg3 from "../assets/img/desserts.jpg";

function HeadlineCards() {
  return (
    <section className="max-w-[1640px] mx-auto px-4 py-24 grid md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <article className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Compra uno y llévate otro gratis</p>
          <p className="px-2">Solo por este mes</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Ordenalo ahora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={headlineBg1} alt="Hamburguesas 2X1" />
      </article>
      {/* Card 2 */}
      <article className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Nuevos Establecimientos</p>
          <p className="px-2">Agregados todos los días</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Ordenalo ahora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={headlineBg2} alt="Nuevos Establecimientos" />
      </article>
      {/* Card 3 */}
      <article className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Entregamos postres y repostería</p>
          <p className="px-2">Marialuisa, Postre Tres Leches, ...</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Ordenalo ahora</button>
        </div>
        <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={headlineBg3} alt="Postres" />
      </article>
    </section>
  );
}

export default HeadlineCards;