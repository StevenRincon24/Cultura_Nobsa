import { Attraction, CulinaryRoute, Event, Restaurant } from "../types";

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Cumpleaños Nobsa",
    date: "9 de Enero",
    description: "El día 9 de enero se celebra el cumpleaños de Nobsa, una celebración que se celebra con mucha animación y festividad.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRVPXxahHIgjOIjBXb7BsPc5TYM_wz0vE-w&s"
  },
  {
    id: 2,
    title: "Dia mundial de la ruana",
    date: "Mayo",
    description: "Exposición y venta de artesanías locales incluyendo tejidos, cerámica y productos elaborados con técnicas ancestrales.",
    imageUrl: "https://fondocultura.org/wp-content/uploads/2025/05/nobsa-dia-mundial-de-la-ruana-2025.jpg"
  },
  {
    id: 3,
    title: "Festividad Virgen del Carmen en los diferentes sectores del Municipio",
    date: "Junio - Agosto",
    description: "Celebración religiosa en honor a la patrona de los conductores con procesiones, misas y actividades culturales.",
    imageUrl: "https://static-resources-elementor.mirai.com/wp-content/uploads/sites/756/vinculacion-al-mar.jpeg"
  },
  {
    id: 4,
    title: "Festividades en Honor a San Roque",
    date: "Septiembre",
    description: "Celebración en honor a San Roque con procesiones, misas y actividades culturales.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbahHPG69a-hZIE5u0_EL1YG-1TEejqjd7wO4WZvBjohI7G0IS_F9zVWkckfS8S3ZdL6IZMIVkc4h2K2lp_DNDAtr400-m_wczT5dHIgEgF0oOhmi77aTKxWnb-s231X3cSmG94154LA4/s1600/Procesi%25C3%25B3n+de+San+Roque+en+Piedralaves.jpg"
  },
  {
    id: 5,
    title: "Festival vallenato",
    date: "Noviembre",
    description: "Celebración del festival vallenato con procesiones, misas y actividades culturales.",
    imageUrl: "https://viajaporcolombia.com/images/festival-vallenato-2024-en-nobsa-boyaca.jpg"
  },
  {
    id: 6,
    title: "Temporada Decembrina",
    date: "Diciembre",
    description: "Temporada decembrina con diferentes actividades, alumbrados decembrinos y misas.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9P1_6sucxnzT_-r7Z4dinoaKBVlifNtYPA&s"
  }
];

export const touristAttractions: Attraction[] = [
  {
    id: 1,
    name: "Basílica de Nuestra Señora del Rosario",
    description: "Imponente templo religioso con arquitectura neogótica y hermosas vidrieras que representan pasajes bíblicos.",
    imageUrl: "https://images.pexels.com/photos/19670599/pexels-photo-19670599/free-photo-of-basilica-de.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "iglesia"
  },
  {
    id: 2,
    name: "Capilla de San Antonio",
    description: "Pequeña capilla colonial con un significativo valor histórico y cultural para la comunidad local.",
    imageUrl: "https://images.pexels.com/photos/9817397/pexels-photo-9817397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "iglesia"
  },
  {
    id: 3,
    name: "Parque Principal de Nobsa",
    description: "Corazón de la vida social del municipio, rodeado de coloridas casas coloniales y árboles nativos.",
    imageUrl: "https://images.pexels.com/photos/4350272/pexels-photo-4350272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "parque"
  },
  {
    id: 4,
    name: "Mirador de Nobsa",
    description: "Punto panorámico con vistas espectaculares del valle y las montañas circundantes de la región.",
    imageUrl: "https://images.pexels.com/photos/9044329/pexels-photo-9044329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "naturaleza"
  },
  {
    id: 5,
    name: "Sendero Ecológico La Peña",
    description: "Ruta natural que ofrece un recorrido por la biodiversidad local y formaciones rocosas impresionantes.",
    imageUrl: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "naturaleza"
  },
  {
    id: 6,
    name: "Puente de Nobsa",
    description: "Estructura histórica de ingeniería que cruza el río y conecta distintas partes del municipio.",
    imageUrl: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "ingenieria"
  }
];

export const culinaryRoutes: CulinaryRoute[] = [
  {
    id: "gallina",
    name: "Ruta de la Gallina",
    description: "Descubre los mejores restaurantes donde degustar la tradicional gallina campesina preparada con recetas ancestrales.",
    imageUrl: "https://images.pexels.com/photos/16471579/pexels-photo-16471579/free-photo-of-comida-cena-comiendo-pollo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "carne",
    name: "Ruta de la Carne",
    description: "Recorrido gastronómico por los establecimientos especializados en cortes de res y cerdo de la región.",
    imageUrl: "/images/Rutas/ruta_carne.png"
  },
  {
    id: "postres",
    name: "Ruta de los Postres",
    description: "Itinerario dulce para conocer y disfrutar de la repostería tradicional boyacense elaborada con productos locales.",
    imageUrl: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "La Gallina Criolla",
    description: "Restaurante tradicional especializado en gallina campesina cocida a fuego lento con verduras de la región.",
    imageUrl: "https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "gallina",
    address: "Calle 8 #5-23, Centro"
  },
  {
    id: 2,
    name: "El Fogón Boyacense",
    description: "Cocina auténtica con recetas transmitidas por generaciones, donde la gallina es la estrella del menú.",
    imageUrl: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "gallina",
    address: "Carrera 10 #12-45, Barrio La Esperanza"
  },
  {
    id: 3,
    name: "La Parrilla de Nobsa",
    description: "Especialidad en cortes de carne a la parrilla acompañados de papas criollas y ensalada campesina.",
    imageUrl: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "carne",
    address: "Vía Principal km 3, Sector El Prado"
  },
  {
    id: 4,
    name: "El Rincón del Asado",
    description: "Carnes asadas al carbón con el sabor característico de la región y acompañamientos tradicionales.",
    imageUrl: "https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "carne",
    address: "Avenida Central #23-10, Barrio El Progreso"
  },
  {
    id: 5,
    name: "Dulces Sueños",
    description: "Cafetería y pastelería artesanal con variedad de postres tradicionales como brevas con arequipe y cuajada con melao.",
    imageUrl: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "postres",
    address: "Calle 5 #4-19, Centro Histórico"
  },
  {
    id: 6,
    name: "La Casa del Postre",
    description: "Establecimiento dedicado a la repostería típica boyacense con técnicas artesanales y productos frescos.",
    imageUrl: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    route: "postres",
    address: "Carrera 7 #9-32, Zona Comercial"
  }
];