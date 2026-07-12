export interface Route {
  id: number;
  train: string;
  duration: number; // minutes
  fare: number;
  transfers: number;
}

export const routes: Route[] = [
  {
    id: 1,
    train: "Rajdhani Express",
    duration: 375,
    fare: 945,
    transfers: 0,
  },
  {
    id: 2,
    train: "Vande Bharat",
    duration: 310,
    fare: 1195,
    transfers: 0,
  },
  {
    id: 3,
    train: "Shatabdi + Intercity",
    duration: 420,
    fare: 760,
    transfers: 1,
  },
  {
    id: 4,
    train: "Duronto Express",
    duration: 390,
    fare: 880,
    transfers: 0,
  },
  {
    id: 5,
    train: "Garib Rath",
    duration: 455,
    fare: 620,
    transfers: 1,
  },
];