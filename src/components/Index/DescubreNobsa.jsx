import { motion } from "framer-motion";

const cards = [
  {
    image: "ruta-de-la-imagen2.jpg",
    title: "Telar",
    description:
      "Nuestros programas en ciencias garantizan una formación rigurosa y orientada a la investigación y el desarrollo.",
  },
  {
    image: "ruta-de-la-imagen3.jpg",
    title: "Juegos tradicionales",
    description:
      "Las humanidades son fundamentales en Nobsa para formar ciudadanos con pensamiento crítico y conciencia social.",
  },
  {
    image: "ruta-de-la-imagen4.jpg",
    title: "Artesanías",
    description:
      "Desarrollamos habilidades de comunicación integral para afrontar los retos del mundo moderno.",
  },
  {
    image: "https://i.postimg.cc/wB9HGBhW/oveja.jpg",
    title: "Oveja",
    description:
      "Fuente de lana y compañía en el campo, símbbolo de humildad y tranquilidad",
  },
  {
    image: "ruta-de-la-imagen4.jpg",
    title: "Lana",
    description:
      "Desarrollamos habilidades de comunicación integral para afrontar los retos del mundo moderno.",
  },
  {
    image: "https://i.postimg.cc/wB9HGBhW/oveja.jpg",
    title: "Tejidos",
    description:
      "Fuente de lana y compañía en el campo, símbbolo de humildad y tranquilidad",
  },
];
function DescrubreNobsa() {
  return (
    <>
      <section className="w-full">
        <div className="w-full bg-gray-100 p-6">
          <div className="w-full bg-white shadow-lg rounded-2xl p-6 text-center">
            <h2
              style={{ fontFamily: "Maitland Script" }}
              className="text-8xl text-red-900 text-center"
            >
              Sabías que...
            </h2>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={card.image}
                      alt={card.title}
                    />
                    <div className="p-6">
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-gray-700">{card.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

export default DescrubreNobsa;
