export interface TypicalDish {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  imageUrl: string;
  region: string;
}

export const typicalDishes: TypicalDish[] = [
  {
    id: 1,
    name: "Cuchuco de Trigo con Espinazo",
    description: "Una sopa espesa tradicional preparada con trigo partido, carne de cerdo (espinazo), tubérculos como papa y habas, y condimentos locales. Es un plato contundente que refleja la tradición culinaria del altiplano cundiboyacense.",
    ingredients: [
      "Trigo partido",
      "Espinazo de cerdo",
      "Papa criolla",
      "Papa pastusa",
      "Habas",
      "Cebolla",
      "Cilantro",
      "Condimentos varios"
    ],
    imageUrl: "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg",
    region: "Boyacá Central"
  },
  {
    id: 2,
    name: "Mazamorra Chiquita",
    description: "Plato caldoso que combina diferentes tipos de carnes, especialmente cerdo, con maíz, habas, arvejas y papa. Es un plato reconfortante y nutritivo, típico de festividades y reuniones familiares.",
    ingredients: [
      "Costilla de cerdo",
      "Carne de res",
      "Maíz pelado",
      "Habas verdes",
      "Arvejas",
      "Papa",
      "Cebolla larga",
      "Ajo",
      "Cilantro"
    ],
    imageUrl: "https://images.pexels.com/photos/5409017/pexels-photo-5409017.jpeg",
    region: "Región Andina de Boyacá"
  },
  {
    id: 3,
    name: "Mute Boyacense",
    description: "Sopa espesa elaborada con maíz, diversos tipos de carnes y vísceras, papa, arvejas y habas. Es considerado uno de los platos más representativos de la gastronomía boyacense y normalmente se sirve como plato principal.",
    ingredients: [
      "Maíz pelado",
      "Carne de res",
      "Callos",
      "Pata de res",
      "Papa",
      "Ahuyama",
      "Arvejas",
      "Habas",
      "Cebolla",
      "Ajo",
      "Cilantro"
    ],
    imageUrl: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    region: "Todo Boyacá"
  },
  {
    id: 4,
    name: "Cocido Boyacense",
    description: "Guiso abundante que reúne diversos tubérculos como papas, hibias, cubios y chuguas, junto con habas, maíz y carnes. Es un plato que demuestra la riqueza agrícola de la región.",
    ingredients: [
      "Costilla de cerdo",
      "Papa criolla",
      "Papa pastusa",
      "Maíz tierno",
      "Habas",
      "Rubas",
      "Cubios",
      "Chuguas",
      "Col",
      "Cebolla",
      "Ajo"
    ],
    imageUrl: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
    region: "Nobsa y alrededores"
  },
  {
    id: 5,
    name: "Arepa de Maíz Pelao",
    description: "Arepa preparada con maíz pelado y cocido que luego se muele para formar una masa que se asa a la parrilla. Se suele servir como acompañamiento o con queso fresco encima.",
    ingredients: [
      "Maíz pelado",
      "Sal",
      "Mantequilla",
      "Queso fresco (opcional)"
    ],
    imageUrl: "https://images.pexels.com/photos/5737252/pexels-photo-5737252.jpeg",
    region: "Todo Boyacá"
  },
  {
    id: 6,
    name: "Brevas con Arequipe",
    description: "Postre tradicional que consiste en brevas maduras cocinadas en almíbar y rellenas con arequipe (dulce de leche). Un dulce clásico de la región.",
    ingredients: [
      "Brevas maduras",
      "Azúcar",
      "Canela",
      "Arequipe",
      "Queso fresco (acompañamiento opcional)"
    ],
    imageUrl: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg",
    region: "Región Andina"
  }
];