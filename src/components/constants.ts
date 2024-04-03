type Car = {
  brand: string,
  model: string,
  year: number,
  price: number,
  сurrency: string,
  color: string[],
  isReserve: boolean
}

export const cars: Car[] = [
    {
      brand: "Toyota",
      model: "Corolla",
      year: 2020,
      price: 20000,
      сurrency: "BYN",
      color: ["Красный", "Синий", "Серый"],
      isReserve: true,
    },
    {
      brand: "Honda",
      model: "Civic",
      year: 2018,
      price: 18000,
      сurrency: "RUB",
      color: ["Красный", "Синий", "Серый"],
      isReserve: false,
    },
    {
      brand: "Ford",
      model: "Mustang",
      year: 2021,
      price: 25000,
      сurrency: "CNY",
      color: ["Красный", "Синий", "Серый"],
      isReserve: true,
    },
    {
      brand: "Chevrolet",
      model: "Camaro",
      year: 2019,
      price: 23000,
      сurrency: "RUB",
      color: ["Красный", "Синий", "Серый"],
      isReserve: true,
    },
    {
      brand: "Nissan",
      model: "Sentra",
      year: 2019,
      price: 18000,
      сurrency: "CNY",
      color: ["Красный", "Синий", "Серый"],
      isReserve: false,
    }
  ];