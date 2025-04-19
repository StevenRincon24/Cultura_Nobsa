export interface Hotel {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type: 'hotel' | 'glamping' | 'hostal';
  priceRange: string;
  amenities: string[];
  address: string;
  phone: string;
  website?: string;
}

export const accommodations: Hotel[] = [
  {
    id: 1,
    name: "Hotel Boyacá Colonial",
    description: "Un elegante hotel que combina la arquitectura colonial con comodidades modernas. Ofrece habitaciones espaciosas con vista a la plaza principal o a las montañas circundantes.",
    imageUrl: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    type: "hotel",
    priceRange: "$$",
    amenities: [
      "Restaurante tradicional",
      "Wi-Fi gratuito",
      "Estacionamiento",
      "Servicio a la habitación",
      "Spa"
    ],
    address: "Calle 4 #5-10, Centro Histórico, Nobsa",
    phone: "+57 321 456 7890",
    website: "https://www.hotelboyacacolonial.com"
  },
  {
    id: 2,
    name: "Glamping Valle de Nobsa",
    description: "Una experiencia única de glamping con carpas de lujo ubicadas en un entorno natural con vistas panorámicas al valle. Perfecto para quienes buscan conectar con la naturaleza sin renunciar a la comodidad.",
    imageUrl: "https://images.pexels.com/photos/6548539/pexels-photo-6548539.jpeg",
    type: "glamping",
    priceRange: "$$$",
    amenities: [
      "Carpas con camas king size",
      "Baño privado",
      "Desayuno orgánico",
      "Fogata nocturna",
      "Tours ecológicos"
    ],
    address: "Vereda Chámeza, a 3 km del centro de Nobsa",
    phone: "+57 315 987 6543",
    website: "https://www.glampingvalledenobsa.com"
  },
  {
    id: 3,
    name: "Hostal Ruta Artesanal",
    description: "Un acogedor hostal familiar decorado con artesanías locales. Ofrece un ambiente cálido y auténtico, ideal para viajeros que buscan una experiencia cultural cercana a los principales sitios de interés.",
    imageUrl: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    type: "hostal",
    priceRange: "$",
    amenities: [
      "Desayuno incluido",
      "Cocina común",
      "Wi-Fi gratuito",
      "Sala de estar compartida",
      "Información turística"
    ],
    address: "Carrera 8 #7-45, Nobsa",
    phone: "+57 313 246 8579"
  },
  {
    id: 4,
    name: "Hotel Hacienda Santa María",
    description: "Una antigua hacienda convertida en hotel boutique, que conserva el encanto tradicional boyacense con todas las comodidades modernas. Rodeada de jardines y con vistas a los campos de cultivo.",
    imageUrl: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    type: "hotel",
    priceRange: "$$$",
    amenities: [
      "Piscina",
      "Restaurante gourmet",
      "Bar",
      "Gimnasio",
      "Salón de eventos"
    ],
    address: "Vía Nobsa-Tibasosa Km 3",
    phone: "+57 311 987 6543",
    website: "https://www.haciendasantamaria.com"
  },
  {
    id: 5,
    name: "Glamping Estrellas de Boyacá",
    description: "Domos transparentes que permiten observar las estrellas desde la comodidad de tu cama. Una experiencia inmersiva en la naturaleza con todas las comodidades necesarias.",
    imageUrl: "https://images.pexels.com/photos/3735133/pexels-photo-3735133.jpeg",
    type: "glamping",
    priceRange: "$$$",
    amenities: [
      "Domos con calefacción",
      "Baño privado",
      "Telescopio",
      "Desayuno a la habitación",
      "Hidromasaje exterior"
    ],
    address: "Vereda Punta Larga, Sector Alto de la Cruz",
    phone: "+57 320 765 4321",
    website: "https://www.estrellasdeboy.com"
  }
];