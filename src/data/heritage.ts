export interface Heritage {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  type: 'iglesia' | 'parque' | 'sendero' | 'museo';
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
    id: 3,
    name: "Capilla y Convento Nuestra Señora de Belencito de Nobsa",
    description: "Una capilla y convento religioso con arquitectura neoclásica y hermosas vidrieras que representan pasajes bíblicos. Es un lugar de culto y veneración para las comunidades locales.",
    imageUrl: "/images/Iglesias/belencito.jpg",
    type: "iglesia",
    location: "Parque de Belencito, Nobsa",
    historicalValue: "Esta iglesia ha sido centro de peregrinaciones y celebraciones religiosas tradicionalmente asociadas con la fiesta de la Virgen del Carmen el 16 de julio."
  },
{
    id: 4,
    name: "Parroquia Jesús Obrero de Nazareth",
    description: " Una parroquia religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/Parroquia_Jesus_Obrero_Nazareth.JPG",
    type: "iglesia",
    location: "Nazareth, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 5,
    name: "Capilla María Rosa Mística",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/RosaMistica.JPG",
    type: "iglesia",
    location: "Chameza Mayor, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 6,
    name: "Capilla Chameza Mayor Sector alto",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaChamezaMayor.JPG",
    type: "iglesia",
    location: "Chameza Mayor Sector Alto, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 7,
    name: "Capilla Caleras",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaCaleras.JPG",
    type: "iglesia",
    location: "Caleras, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },
  {
    id: 8,
    name: "Capilla Ucuenga",
    description: "Una capilla religiosa con un significativo valor histórico y cultural para la comunidad local. Es una joya arquitectónica que combina elementos coloniales y neoclásicos.",
    imageUrl: "/images/Iglesias/CapillaUcuenga.JPG",
    type: "iglesia",
    location: "Caleras, Nobsa",
    historicalValue: "Fue inaugurada en 1973 y ha sido testigo de acontecimientos importantes en la historia de Nobsa. Es un lugar de culto y veneración para las comunidades locales."
  },

  // SENDEROS ECOLOGICOS
  {
    id: 9,
    name: "Cruz de Aranda",
    description: "El Cerro Cruz de Aranda es el cerro más importante del Municipio de Nobsa, debido al arraigo cultural que presenta en sus habitantes, El padre José Agustín Aranda, en el año de 1885, el tres de mayo reflexiono con algunos de sus feligreses y optaron por la más práctica y real, en el cerro el Tungón, se erigió y entronizo para siempre la sagrada y venerada cruz, como guardia celoso y en esta comarca reinaría por siempre la paz, Por ser el sitio más alto y distante del pueblo se llevó con veneración la sagrada cruz en penitente peregrinación el sitio, que andando el tiempo los habitantes de Nobsa, llamaron cruz de Aranda esta primera cruz fue hecha de madera y en forma cuadrada, totalmente forrada en lata, Para entonces el sitio ya era conocido como Cruz de Aranda, El Padre Francisco Becerra en mayo 13 de 1931, volvió con sus católicos creyentes, a construir una cruz en cemento y en sitio denominado; de la Porquera; y desde allí llevada en memorable procesión de vía crucis, el domingo 14 de junio de 1931 al lugar que decían los creyentes que allí estuvo la cruz del padre Aranda. Erigida y entronizada. Duró en pie y erguida hasta el año de 1957, en los que algunos afirmaban que un rayo la quebró de su base y le partió su parte superior, doblándola sobre la inmensa roca. Hasta el año 1989, cuando por iniciativa de un grupo de la comunidad organizado y con la colaboración del Padre Aquileo Correa, se emprendió de nuevo la fe de la peregrinación a Cruz de Aranda., El 4 de marzo de 1989 en la casa del señor Adolfo Zarate, se reúnen por invitación de señor Hernando León algunos líderes Nobsanos y decidieron de común acuerdo erigir y construir una Cruz en hormigón armado, en el Cerro conocido como Cruz de Aranda, Este hermoso Cerro se encuentra ubicado en el área montañosa de la vereda Santa Ana, cuenta con un ascenso lineal de 5 km y un ascenso longitudinal de 790 metros, iniciando desde los 2.500 m.s.n.m.    hasta los 3290 m.s.n.m, debido a la complejidad de su pendiente que en promedio es de 19,4 % con áreas con pendientes altas entre 25% - 55%   dentro del acceso. por tanto, se requiere de manera obligatoria el uso de guía profesional si no se es habitante tradicional del municipio, ya que puede presentarse el riesgo de extraviarse con facilidad. ",
    imageUrl: "https://padulcofrade.com/fotos/2020/cruz_de_aranda_1.jpg",
    type: "sendero",
    location: "Desde Bogotá se toma la autopista La Caro-Tocancipá, desde la autopista norte, tomando la autopista Tunja - Paipa-Duitama- Nobsa. Tomar la vía Capilla Lourdes y el Sendero Central con un ascenso de 5 km y un descenso de igual magnitud aproximadamente, con un total de recorrido de 10 Km de sendero peatonal hasta el casco urbano.",
    historicalValue: "El sendero atraviesa zonas que históricamente fueron utilizadas por los indígenas muiscas antes de la colonización española."
  },
  {
    id: 10,
    name: "Cascada del 'Penitente'",
    description: "La Cascada del Penitente, también conocida por algunos habitantes como Salto de Santa Ana, es uno de los paisajes naturales más emblemáticos del municipio de Nobsa. Ubicada en la zona montañosa de la vereda Santa Ana, esta majestuosa caída de agua ha sido desde generaciones pasadas un sitio de contemplación, reflexión y conexión con la naturaleza, respetado por la comunidad local por su belleza, su riqueza hídrica y su papel espiritual y simbólico dentro del entorno rural nobsano. El origen del nombre “Penitente” proviene de las caminatas que realizaban antiguos feligreses y habitantes de la zona alta, quienes accedían al lugar como parte de recorridos de reflexión personal y comunal, especialmente durante celebraciones religiosas y peregrinaciones tradicionales. En medio de un entorno de imponentes farallones y vegetación andina, el estruendo del agua cayendo sobre la roca viva ofrecía —y sigue ofreciendo— un momento único de recogimiento y paz interior. La cascada se encuentra a una altitud aproximada de 2.600 metros sobre el nivel del mar, enclavada dentro de la Reserva Natural Santa Ana, y es accesible por un camino de senderismo que recorre alrededor de 11 kilómetros desde el casco urbano de Nobsa, pasando por parajes rurales como la vereda La Culebra y los miradores del cerro. Este recorrido, de dificultad moderada, requiere una preparación física adecuada, ya que presenta un desnivel acumulado de más de 400 metros y zonas con tramos estrechos y rocosos. Por tratarse de un ecosistema de alta montaña, se recomienda el acompañamiento de guías profesionales o locales conocedores de la zona, especialmente para quienes no son habitantes tradicionales del municipio, debido a la complejidad del terreno y la posibilidad de extravío en sectores boscosos y poco señalizados. La Cascada del Penitente no solo representa un atractivo turístico y ecológico de gran valor, sino también un símbolo de identidad ambiental y cultural para los nobsanos. A lo largo del tiempo, se ha mantenido como un sitio de encuentro con la naturaleza, ideal para el senderismo, la fotografía, y la sensibilización ambiental, promoviendo la conservación de los recursos hídricos y la biodiversidad del altiplano boyacense.",
    imageUrl: "https://s1.wklcdn.com/image_18/546079/42874662/27967516.jpg",
    type: "sendero",
    location: "Vereda Santa Ana Nobsa",
    historicalValue: "El parque fue establecido para preservar y promover las técnicas artesanales que han sido parte de la identidad cultural de Nobsa desde tiempos precolombinos."
  },
  {
    id: 11,
    name: "Sendero Morales",
    description: "El Sendero Morales es uno de los principales recorridos de montaña del municipio de Nobsa, ubicado en la región andina de Boyacá. Este sendero ofrece una experiencia única de conexión con la naturaleza, siendo ideal para los amantes del trekking, la fotografía de paisajes y quienes buscan espacios de tranquilidad y aire puro. Con un recorrido que inicia desde la plaza principal de Nobsa, el camino asciende por zonas rurales hasta alcanzar altitudes cercanas a los 3.100 m s. n. m., atravesando bosques de pinos, zonas de cultivo, praderas y miradores naturales con vistas espectaculares hacia el valle de Sogamoso y las montañas que rodean la región. El trayecto varía entre los 7 y 12 kilómetros, dependiendo de la variante que el visitante elija. La ruta cuenta con tramos de dificultad moderada, con pendientes pronunciadas, sectores pedregosos y áreas en las que se recomienda el uso de bastones de senderismo y calzado adecuado. Uno de los puntos más emblemáticos del recorrido es la cumbre del cerro Morales, donde se encuentran cruces y banderas que simbolizan el esfuerzo del ascenso, y desde donde se obtienen algunas de las mejores panorámicas del municipio. Además del valor paisajístico, el Sendero Morales es escenario de actividades de conservación y educación ambiental. Gracias al compromiso de la comunidad y organizaciones locales, se han promovido campañas de limpieza, señalización del camino y protección de los recursos naturales. Por la extensión del sendero y la presencia de cruces de caminos, se recomienda realizar la caminata con un guía local, especialmente para quienes visitan por primera vez, garantizando una experiencia segura, enriquecedora y respetuosa con el entorno.",
    imageUrl: "https://s2.wklcdn.com/image_158/4744690/36483208/23617025Master.jpg",
    type: "sendero",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  {
    id: 12,
    name: "Sendero Cruz de la Culebra",
    description: "El Sendero Cruz de la Culebra es uno de los recorridos ecológicos más representativos del municipio de Nobsa, ubicado en la zona rural de la vereda La Culebra. Este sendero permite a los visitantes recorrer caminos tradicionales cargados de historia, biodiversidad y paisajes imponentes, convirtiéndolo en un espacio ideal para el senderismo y la conexión con la naturaleza andina. El recorrido inicia en los alrededores rurales de Nobsa, ascendiendo progresivamente hasta alcanzar los 2.900 metros sobre el nivel del mar, donde se encuentra la emblemática Cruz de la Culebra, un punto de contemplación simbólico y tradicional. A lo largo del camino se atraviesan bosques altoandinos, zonas de pajonales y tramos de piedra, con variedad de flora nativa y amplias vistas del valle de Sogamoso y de los cerros vecinos. El sendero tiene una longitud que varía entre 8,9 y 9,3 kilómetros en circuito, con un desnivel acumulado de 420 a 444 metros. Es catalogado como de dificultad moderada y es frecuentado tanto por caminantes como por ciclistas de montaña debido a la diversidad del terreno y su nivel técnico intermedio.  Por su altitud y exposición solar, se recomienda llevar protección solar, hidratación suficiente y vestimenta adecuada para clima cambiante. Aunque el sendero cuenta con tramos visibles, existen ramificaciones que pueden confundir a quienes no conocen bien la zona, por lo que es aconsejable el acompañamiento de un guía local. Este recorrido, además de su valor natural, tiene un profundo significado cultural para la comunidad nobsana, convirtiéndolo en una experiencia integral para quienes buscan turismo ecológico, deporte al aire libre y contacto espiritual con el paisaje.",
    imageUrl: "https://s1.wklcdn.com/image_236/7103317/60164261/40120279.jpg",
    type: "sendero",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  
  // PARQUES
  {
    id: 13,
    name: "Parque principal de Nobsa",
    description: "El Parque Principal de Nobsa es el corazón vibrante del municipio, punto de encuentro para sus habitantes y lugar emblemático que conserva la esencia histórica, religiosa y cultural de la región. Ubicado en pleno centro urbano, este espacio representa un lugar de tradición, donde confluyen la cotidianidad del pueblo con sus celebraciones más significativas. Rodeado de arquitectura colonial, coloridas jardineras y caminos empedrados, el parque es hogar de la imponente Iglesia de San Jerónimo, una estructura construida en piedra, reconocida por su valor arquitectónico y religioso. En los alrededores se encuentran también la Alcaldía Municipal, la Casa de la Cultura, cafés típicos, locales de artesanías y tiendas dedicadas a la venta de tejidos de lana, uno de los productos más representativos del municipio. El parque no solo es un sitio de contemplación y descanso, sino también el escenario de eventos clave como las festividades de Semana Santa, la celebración de San Jerónimo, el Festival del Ruana y el famoso Día Mundial del Tejido. Es común encontrar grupos musicales, mercados campesinos y actividades lúdicas que convierten este espacio en un dinamizador de la vida comunitaria. Con sus bancas bajo la sombra, esculturas representativas, árboles ornamentales y vista directa hacia los cerros que rodean Nobsa, el Parque Principal ofrece una experiencia acogedora tanto para locales como para turistas, siendo el lugar ideal para iniciar cualquier recorrido por el municipio.",
    imageUrl: "https://situr.boyaca.gov.co/wp-content/uploads/2017/05/Parque-Principal-02Nobsa.jpg",
    type: "parque",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  {
    id: 14,
    name: "Parque de la ruana Nobsa",
    description: "Es una zona de protección ambiental dedicada a la conservación y promoción de la flora nativa de la región. Contiene senderos ecológicos, exhibiciones de artesanos y actividades recreativas.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "parque",
    location: "Reserva Natural El Peligro, a 5 km del centro de Nobsa",
    historicalValue: "Esta área ha sido protegida desde la década de 1980 como parte de los esfuerzos de conservación de especies de flora en peligro de extinción."
  },
  ,
  {
    id: 15,
    name: "Parque del acero",
    description: "Es un parque ubicado en Nazareth con varias cosas importantes",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "parque",
    location: "Parque Nazareth, a 5 km del centro de Nobsa",
    historicalValue: "Este parque se realizo para algos cosas"
  },

   ,
  {
    id: 16,
    name: "Museo Siderúrgico De Colombia",
    description: "El Museo Siderúrgico de Colombia es un espacio único que preserva y difunde la historia del desarrollo industrial del país, con énfasis en la región de Boyacá. Ubicado en el municipio de Nobsa, este museo rinde homenaje a la tradición minera y metalúrgica que caracterizó a la zona, especialmente por su cercanía a los antiguos complejos siderúrgicos y acerías del altiplano cundiboyacense. El museo conserva maquinaria histórica, herramientas, fotografías, documentos técnicos y piezas emblemáticas utilizadas en la producción de acero, todo ello presentado en un recorrido interactivo y educativo. Su diseño expositivo permite entender el impacto económico, social y ambiental que tuvo la industria siderúrgica en el desarrollo regional. Además de su valor histórico, el Museo Siderúrgico cumple un importante rol pedagógico. Frecuentemente se realizan visitas guiadas para instituciones educativas, exposiciones temáticas, conversatorios y actividades enfocadas en la innovación y la sostenibilidad industrial. Este espacio cultural se ha convertido en una parada obligatoria para los visitantes interesados en la historia productiva del país y en la memoria viva del trabajo obrero. Visitar el museo es comprender la importancia de la industria pesada en el progreso de Colombia, todo desde el corazón siderúrgico de Boyacá.",
    imageUrl: "https://images.pexels.com/photos/7015635/pexels-photo-7015635.jpeg",
    type: "museo",
    location: "Parque Nazareth, a 5 km del centro de Nobsa",
    historicalValue: "Este parque se realizo para algos cosas"
  },
];