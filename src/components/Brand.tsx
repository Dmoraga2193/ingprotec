import React from "react";
import bhp from "../assets/LogosEmpresas/bhp.png";
import codelco from "../assets/LogosEmpresas/codelco_1.png";
import procesa from "../assets/LogosEmpresas/procesa.png";
import imperial from "../assets/LogosEmpresas/imperial.png";
import containerland from "../assets/LogosEmpresas/containerland.png";
import sika from "../assets/LogosEmpresas/sika.png";
import sodimac from "../assets/LogosEmpresas/sodimac.png";
import sqm from "../assets/LogosEmpresas/sqm.png";
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
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={bhp}
                  alt="bhp"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={containerland}
                  alt="containerland"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={imperial}
                  alt="imperial"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sika}
                  alt="sika"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sodimac}
                  alt="sodimac"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sqm}
                  alt="sqm"
                  className="max-w-[50px] max-h-[50px]"
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
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={bhp}
                  alt="bhp"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={containerland}
                  alt="containerland"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={imperial}
                  alt="imperial"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sika}
                  alt="sika"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sodimac}
                  alt="sodimac"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sqm}
                  alt="sqm"
                  className="max-w-[50px] max-h-[50px]"
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
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={bhp}
                  alt="bhp"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={containerland}
                  alt="containerland"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-right"
                  src={imperial}
                  alt="imperial"
                  className="max-w-[30px] max-h-[30px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={procesa}
                  alt="procesa"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sika}
                  alt="sika"
                  className="max-w-[70px] max-h-[70px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sodimac}
                  alt="sodimac"
                  className="max-w-[50px] max-h-[50px]"
                />
              </li>
              <li>
                <img
                  data-aos="flip-left"
                  src={sqm}
                  alt="sqm"
                  className="max-w-[50px] max-h-[50px]"
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
