export interface Train {
  id: number;
  name: string;
  availability: number;
  waitingList: number;
  fare: number;
  duration: number; // in minutes
}

export const trains: Train[] = [
  {
    id: 1,
    name: "Rajdhani Express",
    availability: 42,
    waitingList: 6,
    fare: 945,
    duration: 375,
  },
  {
    id: 2,
    name: "Vande Bharat",
    availability: 18,
    waitingList: 0,
    fare: 1195,
    duration: 310,
  },
  {
    id: 3,
    name: "Shatabdi Express",
    availability: 31,
    waitingList: 12,
    fare: 875,
    duration: 370,
  },
];