export interface Heritage {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type: 'iglesia' | 'parque' | 'sendero';
  location: string;
  historicalValue: string;
}

export const heritageItems: Heritage[] = [
  {
    id: 1,
    name: "Iglesia de San Jerónimo",
    description: "Esta majestuosa iglesia de estilo colonial es uno de los principales monumentos religiosos de Nobsa. Construida en el siglo XVIII, destaca por su arquitectura clásica, sus altares tallados y sus imágenes religiosas de gran valor histórico.",
    imageUrl: "/images/Iglesias/Iglesia_San_Jeronimo.jpg",
    type: "iglesia",
    location: "Plaza Principal de Nobsa",
    historicalValue: "Construida en 1786, ha sido testigo de eventos históricos importantes de la región y es un símbolo del patrimonio religioso de Boyacá."
  },
  {
    id: 2,
    name: "Parque Principal Simón Bolívar",
    description: "El parque central del municipio es un espacio arbolado y bien mantenido que sirve como punto de encuentro para los habitantes de Nobsa y sus visitantes. Rodeado de edificios históricos, incluida la iglesia principal, es el corazón de la vida social del pueblo.",
    imageUrl: "https://images.pexels.com/photos/1367422/pexels-photo-1367422.jpeg",
    type: "parque",
    location: "Centro de Nobsa",
    historicalValue: "Nombrado en honor al Libertador Simón Bolívar, este parque ha sido testigo de eventos cívicos y celebraciones culturales por más de 200 años."
  },
  {
    id: 3,
    name: "Sendero Ecológico El Mirador",
    description: "Este sendero natural ofrece un recorrido por la flora nativa de la región, con puntos panorámicos que permiten admirar el paisaje del valle de Nobsa y las montañas circundantes. Es ideal para caminatas y observación de aves.",
    imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg",
    type: "sendero",
    location: "Vía a Cerro de Guática, a 3 km del centro de Nobsa",
    historicalValue: "El sendero atraviesa zonas que históricamente fueron utilizadas por los indígenas muiscas antes de la colonización española."
  },
  {
    id: 4,
    name: "Capilla y Convento Nuestra Señora de Belencito de Nobsa",
    description: "Una capilla y convento religioso con arquitectura neoclásica y hermosas vidrieras que representan pasajes bíblicos. Es un lugar de culto y veneración para las comunidades locales.",
    imageUrl: "/images/Iglesias/Belencito.jpeg",
    type: "iglesia",
    location: "Vereda Puntalarga, Nobsa",
    historicalValue: "Esta iglesia ha sido centro de peregrinaciones y celebraciones religiosas tradicionalmente asociadas con la fiesta de la Virgen del Carmen el 16 de julio."
  },
  {
    id: 5,
    name: "Parque Temático de las Artesanías",
    description: "Un parque dedicado a la tradición artesanal de Nobsa, con exhibiciones permanentes de los procesos de tejido, cerámica y trabajo en metal. Incluye talleres interactivos donde los visitantes pueden aprender sobre estas técnicas ancestrales.",
    imageUrl: "https://images.pexels.com/photos/2850438/pexels-photo-2850438.jpeg",
    type: "parque",
    location: "Entrada sur de Nobsa",
    historicalValue: "El parque fue establecido para preservar y promover las técnicas artesanales que han sido parte de la identidad cultural de Nobsa desde tiempos precolombinos."
  },
  {
    id: 6,
    name: "Sendero de las Orquídeas",
    description: "Un fascinante recorrido ecológico que atraviesa zonas de bosque nativo donde crecen diversas especies de orquídeas y otras plantas endémicas. El sendero cuenta con estaciones informativas sobre la biodiversidad local.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "sendero",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  }
];