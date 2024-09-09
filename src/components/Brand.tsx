import React from "react";
import codelco from "../assets/LogosEmpresas/codelco.svg";
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
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pt-8">
              <li>
                <img
                  data-aos="flip-left"
                  src={codelco}
                  alt="Codelco"
                  className="max-w-[100px] max-h-[100px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={enami}
                  alt="enami"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={kinross}
                  alt="kinross"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sierragorda}
                  alt="sierragorda"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pt-8"
              aria-hidden="true"
            >
              <li>
                <img
                  data-aos="flip-left"
                  src={codelco}
                  alt="Codelco"
                  className="max-w-[100px] max-h-[100px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={enami}
                  alt="enami"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={kinross}
                  alt="kinross"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sierragorda}
                  alt="sierragorda"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll pt-8"
              aria-hidden="true"
            >
              <li>
                <img
                  data-aos="flip-left"
                  src={codelco}
                  alt="Codelco"
                  className="max-w-[100px] max-h-[100px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={enami}
                  alt="enami"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={kinross}
                  alt="kinross"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sierragorda}
                  alt="sierragorda"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
