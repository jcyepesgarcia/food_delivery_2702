import React from "react";
import logo from "../assets/img/logo.png";

function Footer() {
  return (
    <footer className="max-w-[1640px] mx-auto px-4 py-12 bg-gray-100">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-10 items-stretch sm:flex-row justify-between sm:items-start mb-12">
        <nav className="basis-1/3 text-center sm:text-start">
          <h4 className="font-bold text-gray-800 mb-4 text-lg">
            Centro de ayuda
          </h4>
          <ul className="flex flex-col gap-3 text-gray-700 capitalize">
            <li>Preguntas Frecuentes</li>
            <li>Política de Cambio</li>
            <li>Tratamiento de Datos</li>
            <li>Términos y Condiciones</li>
          </ul>
        </nav>
        <nav className="basis-1/3 text-center sm:text-start">
          <h4 className="font-bold text-gray-800 mb-4 text-lg">
            Conócenos mejor
          </h4>
          <ul className="flex flex-col gap-3 text-gray-700 capitalize">
            <li>Contacto</li>
            <li>Trabaja con nosotros</li>
            <li>Haz crecer tu marca</li>
            <li>Cookies</li>
            <li>Políticas de Privacidad</li>
          </ul>
        </nav>
        <div className="flex flex-col items-center">
          <img className="max-w-[150px]" src={logo} alt="Logo" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            Food <span className="font-bold">City</span>
          </h1>
        </div>
      </div>
      <p className="font-bold text-[12px] text-gray-500 text-center">
        © 2023 Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
