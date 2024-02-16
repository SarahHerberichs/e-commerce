import React from "react";
import { useProducts } from "../services/Products";
import ProductList from "../components/ProductList";
function Home() {
  //Fonction Products qui fetch dans l'api pour trouver tous les products
  //On passe à product list cette liste de product
  const products = useProducts();
  return <div>{products && <ProductList products={products} />}</div>;
}

export default Home;
