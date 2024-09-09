import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Person {
  name: string;
  role: string;
  imageUrl: string;
  email: string;
  phone?: string;
}

const people: Person[] = [
  {
    name: "Ricardo Cabrera",
    role: "Director General /CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
    phone: "+56 9 1234 5678",
  },
  {
    name: "Ricardo Cabrera",
    role: "Director de Operaciones /COO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
    phone: "+56 9 2345 6789",
  },
  {
    name: "Ricardo Cabrera",
    role: "Director de Finanzas /CFO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
    phone: "+56 9 3456 7890",
  },
  {
    name: "Ricardo Cabrera",
    role: "Director de Tecnología /CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    email: "rcabrera@ingprotec.cl",
    phone: "+56 9 4567 8901",
  },
];

const Staff: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-cyan-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-x-8 gap-y-20 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2
              data-aos="fade-down-right"
              className="text-3xl font-bold tracking-tight text-cyan-100 sm:text-4xl"
            >
              Conozca a nuestros dirigentes
            </h2>
            <p
              data-aos="fade-up-right"
              className="mt-6 text-lg leading-8 text-cyan-50"
            >
              En IngProtec, contamos con un equipo de profesionales apasionados
              y dedicados. Cada miembro aporta su experiencia y creatividad para
              garantizar los mejores resultados, trabajando juntos para superar
              las expectativas en cada proyecto.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person, index) => (
              <li
                key={person.name + index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-x-6">
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <img
                      className="h-16 w-16 rounded-full object-cover"
                      src={person.imageUrl}
                      alt={person.name}
                    />
                    {hoveredIndex === index && (
                      <div className="absolute inset-0 bg-cyan-300/20 rounded-full animate-ripple" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-sky-50">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-50">
                      {person.role}
                    </p>
                    <div className="mt-2 flex space-x-3">
                      <a
                        href={`mailto:${person.email}`}
                        className="text-cyan-300 hover:text-cyan-100"
                      >
                        <Mail size={16} />
                        <span className="sr-only">Email de {person.name}</span>
                      </a>
                      {person.phone && (
                        <a
                          href={`tel:${person.phone}`}
                          className="text-cyan-300 hover:text-cyan-100"
                        >
                          <Phone size={16} />
                          <span className="sr-only">
                            Teléfono de {person.name}
                          </span>
                        </a>
                      )}
                      <p className="text-sm leading-6 text-teal-200">
                        {person.phone}
                      </p>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-teal-200">
                      {person.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Staff;
