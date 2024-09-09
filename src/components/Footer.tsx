import { Typography } from "@material-tailwind/react";
import React from "react";
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className=" rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              IngProtec Spa.
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="inicio" className="hover:underline me-4 md:me-6">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="contacto" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Lun-Jue 8:30-18:00 | Vie 8:30-16:45</span>
          </div>
          <span>
            Radal #1015, Quinta Normal | Santiago, Region Metropolitana
          </span>
          <p className="mt-4 md:mt-0">
            &copy; 2024 INGPROTEC. Todos los derechos reservados.
          </p>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </div>
    </footer>
  );
}
