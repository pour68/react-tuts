// step 1: create a collection of data
const shoppingCartCollection = [
  {
    id: 1,
    image: "./src/xbox-series-s.jpg",
    name: "xbox series s",
    price: 300,
    count: 2,
  },
  {
    id: 2,
    image: "./src/shampoo.jpg",
    name: "shampoo",
    price: 5.5,
    count: 5,
  },
  {
    id: 3,
    image: "./src/halogen-lamp.jpg",
    name: "halogen lamp",
    price: 2.5,
    count: 1,
  },
];

const getShoppingCart = () => shoppingCartCollection;

export default getShoppingCart;
