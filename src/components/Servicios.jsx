import { CheckCircle2 } from "lucide-react";
import camionImg from "../assets/camion.jpg";
import { checklistItems } from "../constants";
import "aos/dist/aos.css"; // Importación de los estilos de AOS

const Servicios = () => {
  return (
    <div className=" relative border-b border-neutral-800 min-h-[750px]">
      <h2
        data-aos="fade-down"
        className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide "
      >
        Nuestros
        <span className="bg-gradient-to-r from-green-200 via-sky-500 to-blue-600 text-transparent bg-clip-text">
          {" "}
          servicios
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mb-11">
        <div className="p-8 w-full lg:w-1/2 h-full lg:h-auto">
          <img
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="rounded-l-lg gradient-mask-r-0 h-full object-cover"
            src={camionImg}
            alt=""
          />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div
                data-aos="flip-left"
                className="text-sky-500 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full"
              >
                <CheckCircle2 />
              </div>
              <div data-aos="fade-left">
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
