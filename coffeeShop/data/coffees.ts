export interface Coffee {
    id: string;
    name: string;
    description: string;
    price: number;
    image: any;
  }

  export const coffees: Coffee[] = [
    {
      id: "1",
      name: "Americano",
      description: "Rich espresso with hot water",
      price: 80,
      image: require("../assets/images/americano.png"),
    },
    {
      id: "2",
      name: "Latte",
      description: "Espresso with steamed milk",
      price: 95,
      image: require("../assets/images/latte.png"),
    },
    {
      id: "3",
      name: "Filter Coffee",
      description: "Slow brewed filter coffee",
      price: 70,
      image: require("../assets/images/filtercoffee.png"),
    },
    {
      id: "4",
      name: "Espresso",
      description: "Strong and bold shot",
      price: 60,
      image: require("../assets/images/espresso.png"),
    },
    {
      id: "5",
      name: "Mocha",
      description: "Chocolate flavored latte",
      price: 105,
      image: require("../assets/images/mocha.png"),
    },
  ];