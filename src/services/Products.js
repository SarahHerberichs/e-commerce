import { useEffect, useState } from "react";

const API = "https://fakestoreapi.com/products";

export function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(`Cannot fetch products`, err));
  }, []);
  return products;
}
