export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum Language {
  RU = 'ru',
  EN = 'en',
  VN = 'vn',
}

export interface Review {
  text: string;
  author: string;
  source: string;
}

export interface Tour {
  id: string;
  title: string;
  price: string;
  short_description: string;
  image: string;
  video?: string;
  full_description: string;
  program: string[];
  included: string[];
  recommendations?: string;
  duration?: string;
}