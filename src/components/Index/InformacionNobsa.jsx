import { motion } from "framer-motion";

function InformacionNobsa() {

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl lg:flex lg:items-center lg:gap-16">
          {/* Columna de texto */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{ fontFamily: "Maitland Script" }}
              className="text-8xl text-red-900 text-center"
            >
              Sabías que...
            </h2>
            <motion.p>
              <b className="extrabold">Nobsa</b> es un municipio del
              departamento de Boyacá, situado en el centro oriente de Colombia,
              en la región del Alto Chicamocha.
            </motion.p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <motion.p whileHover={{ scale: 1.05 }}>
                Pertenece a la provincia del Sugamuxi.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }}>
                Fundada en 1593 por Jerónimo Holguín y declarado municipio en
                1811.
              </motion.p>
              <br />
              <motion.p whileHover={{ scale: 1.05 }}>
                Tiene el carácter y el sentido equivalente de nobleza según la
                organización muisca.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }}>
                Nobsa se encuentra a 7 km de Sogamoso, 63 km de Tunja y a 3
                horas de Bogotá.
              </motion.p>
              <motion.p whileHover={{ scale: 1.05 }}>
                Su gentilicio es Nobsano (a).
              </motion.p>
            </ul>
          </motion.div>

          {/* Columna de imagen */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/20/5c/61/caption.jpg?w=1200&h=-1&s=1"
              alt="Imagen de Nobsa"
              className="rounded-lg shadow-lg w-full h-auto max-w-md"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default InformacionNobsa;
