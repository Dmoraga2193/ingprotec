import React, { useState } from "react";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Función que cierra el modal al hacer click fuera del contenido
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <footer className="rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="IngProtec Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                IngProtec Spa.
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <button
                  onClick={openModal}
                  className="hover:underline me-4 md:me-6"
                >
                  Política de Privacidad
                </button>
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
              Radal #1015, Quinta Normal | Santiago, Región Metropolitana
            </span>
            <p className="mt-4 md:mt-0">
              &copy; 2024 INGPROTEC. Todos los derechos reservados.
            </p>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </footer>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClickOutside} // Detectar clic fuera del contenido
        >
          <div className="bg-white p-6 rounded-lg max-w-lg mx-auto shadow-lg overflow-y-auto max-h-[80vh]">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              Política de Privacidad
            </h2>
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                En Ingprotec, respetamos y valoramos la privacidad de nuestros
                usuarios, clientes y socios comerciales. Esta política de
                privacidad describe cómo recopilamos, utilizamos y protegemos la
                información personal que compartes con nosotros cuando utilizas
                nuestro sitio web y servicios, en conformidad con las leyes
                aplicables en protección de datos.
              </p>
              <h3 className="font-bold">1. Información que recopilamos</h3>
              <p>
                Recopilamos diferentes tipos de información personal con los
                siguientes fines:
              </p>
              <ul className="list-disc ml-5">
                <li>
                  <strong>Información de contacto:</strong> Nombre, correo
                  electrónico, número de teléfono y dirección física.
                </li>
                <li>
                  <strong>Información de transacciones:</strong> Detalles de las
                  compras y ventas relacionadas con nuestras licitaciones,
                  productos y servicios.
                </li>
                <li>
                  <strong>Información técnica:</strong> Dirección IP, tipo de
                  navegador y comportamiento en el sitio web para mejorar la
                  experiencia del usuario.
                </li>
              </ul>
              <h3 className="font-bold">2. Uso de la información</h3>
              <p>Utilizamos la información personal que recopilamos para:</p>
              <ul className="list-disc ml-5">
                <li>
                  Gestionar tu cuenta y procesar licitaciones, pedidos y
                  solicitudes de productos.
                </li>
                <li>
                  Mejorar y personalizar tu experiencia en nuestro portal de
                  licitaciones.
                </li>
                <li>
                  Cumplir con nuestras obligaciones legales y contractuales.
                </li>
                <li>
                  Enviar comunicaciones sobre nuestras ofertas, actualizaciones
                  y cambios en nuestros servicios.
                </li>
              </ul>
              <h3 className="font-bold">3. Compartición de la información</h3>
              <p>
                No vendemos ni alquilamos tu información personal a terceros.
                Sin embargo, podemos compartirla con:
              </p>
              <ul className="list-disc ml-5">
                <li>
                  Proveedores de servicios externos que nos ayudan en el
                  funcionamiento de nuestro sitio web y la entrega de nuestros
                  servicios.
                </li>
                <li>
                  Autoridades legales o regulatorias cuando sea necesario para
                  cumplir con la ley o proteger nuestros derechos.
                </li>
              </ul>
              <h3 className="font-bold">4. Seguridad de la información</h3>
              <p>
                Nos comprometemos a proteger tu información personal mediante
                medidas de seguridad físicas, electrónicas y administrativas.
                Sin embargo, ten en cuenta que ninguna transmisión de datos por
                Internet es completamente segura.
              </p>
              <h3 className="font-bold">5. Tus derechos</h3>
              <p>Como usuario de nuestro sitio, tienes derecho a:</p>
              <ul className="list-disc ml-5">
                <li>Acceder a la información que hemos recopilado sobre ti.</li>
                <li>Corregir cualquier inexactitud en tus datos personales.</li>
                <li>
                  Solicitar la eliminación de tu información personal de
                  nuestros sistemas.
                </li>
                <li>
                  Oponerte al tratamiento de tu información personal en
                  determinados casos.
                </li>
              </ul>
              <h3 className="font-bold">6. Cambios en esta política</h3>
              <p>
                Podemos actualizar esta política de privacidad ocasionalmente.
                Publicaremos cualquier cambio en esta página, por lo que te
                recomendamos revisarla periódicamente.
              </p>
              <h3 className="font-bold">7. Contacto</h3>
              <p>
                Si tienes alguna pregunta o inquietud sobre nuestras políticas
                de privacidad, puedes contactarnos a través de
                ventas@ingprotec.cl o (2) 2457 4597.
              </p>
            </div>
            {/* Botón para cerrar el modal */}
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
