export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

export interface Attraction {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: 'iglesia' | 'parque' | 'naturaleza' | 'ingenieria';
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  route: 'gallina' | 'carne' | 'postres';
  address: string;
}

export interface CulinaryRoute {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}