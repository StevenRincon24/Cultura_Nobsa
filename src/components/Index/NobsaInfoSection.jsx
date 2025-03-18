import { motion } from "framer-motion";

const cards = [
  {
    title: "FUNDACIÓN HISTÓRICA",
    description:
      "Nobsa fue fundada en 1593 por Jerónimo Holguín y declarada municipio en 1811.",
    icon: "🌎",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Nobsa_Parque.JPG",
  },
  {
    title: "ESCUDO DE ARMAS",
    description:
      "El escudo de Nobsa refleja su herencia colonial y su pasado indígena muisca.",
    icon: "🛡️",
    image: "https://i.postimg.cc/bYtM1hnd/logo1.png",
  },
  {
    title: "BANDERA",
    description:
      "La bandera de Nobsa está compuesta por colores representativos de su identidad cultural.",
    icon: "🚩",
    image: "https://www.crwflags.com/fotw/images/c/co-boyno.gif",
  },
];

export default function NobsaInfoSection() {
  return (
    <section className="py-16 px-6 ">
      <div className="max-w-screen-xl mx-auto grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative w-full min-h-[200px] bg-opacity-70 rounded-lg shadow-lg p-6 text-white text-center overflow-hidden"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Capa de opacidad */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Contenido */}
            <div className="relative z-10">
              <div className="text-4xl">{card.icon}</div>
              <h3 className="text-xl font-bold mt-4">{card.title}</h3>
              <p className="mt-2 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
