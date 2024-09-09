import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
import containerland from "../assets/LogosEmpresas/containerland.svg";
import imperial from "../assets/LogosEmpresas/imperial.png";
import sika from "../assets/LogosEmpresas/sika.svg";
import sodimac from "../assets/LogosEmpresas/sodimac.png";
import enami from "../assets/LogosEmpresas/enami.png";
import procesa from "../assets/LogosEmpresas/procesa.png";
import kinross from "../assets/LogosEmpresas/kinross.png";
import sierragorda from "../assets/LogosEmpresas/sierragorda.png";
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const Brand = () => {
  return (
    <>
      <section className="py-5 backdrop-blur-[2px]">
        <div className="container mx-auto text-center">
          <h2
            data-aos="zoom-in-down"
            className=" text-sky-500  h-2 text-sm font-medium uppercase "
          >
            Nuestros clientes
          </h2>{" "}
          {/* Título agregado */}
          <div className="flex justify-between items-center gap-6 flex-wrap py-4 px-11 mx-11 mt-3">
            <img
              data-aos="flip-left"
              src={codelco}
              alt="Codelco"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-right"
              src={enami}
              alt="enami"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-left"
              src={procesa}
              alt="procesa"
              className="max-w-[100px] max-h-[100px]"
            />
            <img
              data-aos="flip-right"
              src={kinross}
              alt="kinross"
              className="max-w-[100px] max-h-[80px]"
            />
            <img
              data-aos="flip-left"
              src={sierragorda}
              alt="sierragorda"
              className="max-w-[100px] max-h-[100px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
