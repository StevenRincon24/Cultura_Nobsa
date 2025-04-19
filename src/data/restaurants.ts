export interface Restaurant {
  id: number;
  name: string;
  description: string;
  specialty: string;
  imageUrl: string;
  address: string;
  phone: string;
  openingHours: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Restaurante El Fogón Boyacense",
    description: "Restaurante tradicional que ofrece auténtica comida boyacense en un ambiente acogedor y rústico. Famoso por sus sopas y platos a base de maíz.",
    specialty: "Cuchuco de trigo con espinazo",
    imageUrl: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg",
    address: "Calle 4 #5-23, Centro, Nobsa",
    phone: "+57 321 456 7890",
    openingHours: "Lun-Dom: 11:00 - 21:00"
  },
  {
    id: 2,
    name: "La Casa del Mute",
    description: "Especializado en el tradicional mute boyacense, este restaurante ofrece una experiencia gastronómica auténtica con recetas transmitidas por generaciones.",
    specialty: "Mute boyacense",
    imageUrl: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg",
    address: "Carrera 9 #8-45, Nobsa",
    phone: "+57 313 987 6543",
    openingHours: "Lun-Sáb: 12:00 - 20:00, Dom: 12:00 - 18:00"
  },
  {
    id: 3,
    name: "Asadero La Brasa de Nobsa",
    description: "Reconocido por su deliciosa carne a la llanera y sus picadas típicas. Un lugar ideal para disfrutar de una buena comida en familia.",
    specialty: "Carne a la llanera y picada mixta",
    imageUrl: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    address: "Avenida Principal #12-34, Nobsa",
    phone: "+57 311 234 5678",
    openingHours: "Jue-Mar: 11:30 - 22:00"
  },
  {
    id: 4,
    name: "Café y Postres La Bendición",
    description: "Cafetería artesanal que ofrece deliciosos postres tradicionales de la región, acompañados de un buen café cultivado en tierras colombianas.",
    specialty: "Brevas con arequipe y cuajada con melao",
    imageUrl: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    address: "Carrera 5 #4-12, Centro Histórico, Nobsa",
    phone: "+57 320 765 4321",
    openingHours: "Lun-Dom: 08:00 - 20:00"
  }
];