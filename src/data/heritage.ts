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
    imageUrl: "/images/Iglesias/San_jeronimo.JPG",
    type: "iglesia",
    location: "Plaza Principal de Nobsa",
    historicalValue: "Construida en 1786, ha sido testigo de eventos históricos importantes de la región y es un símbolo del patrimonio religioso de Boyacá."
  },
  {
    id: 2,
    name: "Capilla de Lourdes",
    description: "Es una capilla religiosa colonial con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/LOURDES.JPG",
    type: "iglesia",
    location: "Cra. 9 #11-25, Nobsa, Boyacá",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  
  {
    id: 4,
    name: "Capilla y Convento Nuestra Señora de Belencito de Nobsa",
    description: "Una capilla y convento religioso con arquitectura neoclásica y hermosas vidrieras que representan pasajes bíblicos. Es un lugar de culto y veneración para las comunidades locales.",
    imageUrl: "/images/Iglesias/belencito.jpg",
    type: "iglesia",
    location: "Parque de Belencito, Nobsa",
    historicalValue: "Esta iglesia ha sido centro de peregrinaciones y celebraciones religiosas tradicionalmente asociadas con la fiesta de la Virgen del Carmen el 16 de julio."
  },
{
    id: 7,
    name: "Parroquia Jesús Obrero de Nazareth",
    description: " Una parroquia religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/Parroquia_Jesus_Obrero_Nazareth.JPG",
    type: "iglesia",
    location: "Nazareth, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 8,
    name: "Capilla María Rosa Mística",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/RosaMistica.JPG",
    type: "iglesia",
    location: "Chameza Mayor, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 9,
    name: "Capilla Chameza Mayor Sector alto",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaChamezaMayor.JPG",
    type: "iglesia",
    location: "Chameza Mayor Sector Alto, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 10,
    name: "Capilla Caleras",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaCaleras.JPG",
    type: "iglesia",
    location: "Caleras, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 11,
    name: "Capilla Ucuenga",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaUcuenga.JPG",
    type: "iglesia",
    location: "Caleras, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },

  // SENDEROS ECOLOGICOS
  {
    id: 3,
    name: "Cruz de Aranda",
    description: "Este sendero natural ofrece un recorrido por la flora nativa de la región, con puntos panorámicos que permiten admirar el paisaje del valle de Nobsa y las montañas circundantes. Es ideal para caminatas y observación de aves.",
    imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg",
    type: "sendero",
    location: "Vía a Cerro de Guática, a 3 km del centro de Nobsa",
    historicalValue: "El sendero atraviesa zonas que históricamente fueron utilizadas por los indígenas muiscas antes de la colonización española."
  },
  {
    id: 5,
    name: "Cascada del 'Penitente'",
    description: "Un parque dedicado a la tradición artesanal de Nobsa, con exhibiciones permanentes de los procesos de tejido, cerámica y trabajo en metal. Incluye talleres interactivos donde los visitantes pueden aprender sobre estas técnicas ancestrales.",
    imageUrl: "https://images.pexels.com/photos/2850438/pexels-photo-2850438.jpeg",
    type: "sendero",
    location: "Entrada sur de Nobsa",
    historicalValue: "El parque fue establecido para preservar y promover las técnicas artesanales que han sido parte de la identidad cultural de Nobsa desde tiempos precolombinos."
  },
  {
    id: 6,
    name: "Sendero Morales",
    description: "Un fascinante recorrido ecológico que atraviesa zonas de bosque nativo donde crecen diversas especies de orquídeas y otras plantas endémicas. El sendero cuenta con estaciones informativas sobre la biodiversidad local.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "sendero",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  
  // PARQUES
  {
    id: 12,
    name: "Parque principal de Nobsa",
    description: "Un fascinante recorrido ecológico que atraviesa zonas de bosque nativo donde crecen diversas especies de orquídeas y otras plantas endémicas. El sendero cuenta con estaciones informativas sobre la biodiversidad local.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "parque",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  {
    id: 13,
    name: "Parque de la ruana Npbsa",
    description: "Es una zona de protección ambiental dedicada a la conservación y promoción de la flora nativa de la región. Contiene senderos ecológicos, exhibiciones de artesanos y actividades recreativas.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "parque",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  ,
  {
    id: 13,
    name: "Parque del acero",
    description: "Es un parque ubicado en Nazareth con varias cosas importantes",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "parque",
    location: "Parque Nazareth, a 5 km del centro de Nobsa",
    historicalValue: "Este parque se realizo para algos cosas"
  },
];