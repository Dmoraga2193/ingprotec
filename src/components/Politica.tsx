import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Políticas de Privacidad</h1>
      <p className="mb-4">Última actualización: [Fecha]</p>

      <h2 className="text-2xl font-semibold mb-2">
        1. Información que recopilamos
      </h2>
      <p className="mb-4">
        Recopilamos diferentes tipos de información personal con los siguientes
        fines:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>Información de contacto:</strong> Nombre, correo electrónico,
          número de teléfono y dirección física.
        </li>
        <li>
          <strong>Información de transacciones:</strong> Detalles de las compras
          y ventas relacionadas con nuestras licitaciones, productos y
          servicios.
        </li>
        <li>
          <strong>Información técnica:</strong> Dirección IP, tipo de navegador
          y comportamiento en el sitio web.
        </li>
      </ul>

      {/* Agrega el resto de los apartados aquí de manera similar */}

      <h2 className="text-2xl font-semibold mb-2">7. Contacto</h2>
      <p className="mb-4">
        Si tienes alguna pregunta o inquietud sobre nuestras políticas de
        privacidad, puedes contactarnos a través de [correo electrónico de
        contacto] o [número de teléfono de contacto].
      </p>
    </div>
  );
};

export default PrivacyPolicy;
