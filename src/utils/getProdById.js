import { fetchFromAPI } from "./fetchFromAPI";

const prods = await fetchFromAPI("products");
export const getProdById = (id) => {
  const product = prods.find((product) => product.id === id);
  console.log(product);
  return product || null;
};
