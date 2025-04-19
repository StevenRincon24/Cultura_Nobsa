export interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type: string;
  location: {
    lat: number;
    lng: number;
  };
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Monumento al Pantano de Vargas",
    description: "Impresionante monumento conmemorativo de la Batalla del Pantano de Vargas, un importante enfrentamiento durante la guerra de independencia de Colombia.",
    imageUrl: "https://images.pexels.com/photos/5850072/pexels-photo-5850072.jpeg",
    type: "Monumento",
    location: {
      lat: 5.7703,
      lng: -72.9258
    }
  },
  {
    id: 2,
    name: "Plazoleta de las Artesanías",
    description: "Centro artesanal donde se exhiben y venden productos típicos de la región, incluyendo los famosos tejidos en lana virgen de Nobsa.",
    imageUrl: "https://images.pexels.com/photos/2850438/pexels-photo-2850438.jpeg",
    type: "Artesanías",
    location: {
      lat: 5.7705,
      lng: -72.9262
    }
  },
  {
    id: 3,
    name: "Mirador de Nobsa",
    description: "Punto panorámico que ofrece vistas espectaculares del valle circundante y de las montañas de la región de Boyacá.",
    imageUrl: "https://images.pexels.com/photos/2437291/pexels-photo-2437291.jpeg",
    type: "Mirador",
    location: {
      lat: 5.7708,
      lng: -72.9240
    }
  },
  {
    id: 4,
    name: "Iglesia San Jerónimo",
    description: "Hermoso templo colonial con arquitectura religiosa tradicional, uno de los centros espirituales más importantes del municipio.",
    imageUrl: "https://images.pexels.com/photos/158732/pexels-photo-158732.jpeg",
    type: "Iglesia",
    location: {
      lat: 5.7710,
      lng: -72.9250
    }
  },
  {
    id: 5,
    name: "Reserva Natural El Peligro",
    description: "Área de conservación ecológica con senderos naturales y gran diversidad de flora y fauna propias del altiplano cundiboyacense.",
    imageUrl: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg",
    type: "Reserva Natural",
    location: {
      lat: 5.7730,
      lng: -72.9300
    }
  },
  {
    id: 6,
    name: "Centro Cultural de Nobsa",
    description: "Espacio dedicado a la promoción y conservación de la cultura local, con exposiciones permanentes y temporales de arte y tradiciones.",
    imageUrl: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg",
    type: "Centro Cultural",
    location: {
      lat: 5.7700,
      lng: -72.9245
    }
  }
];