import React from "react";
import "./product.css";
function Product({ product, children }) {
  //Récupère le product passé par ProductList lors de sa boucle dans la liste
  //Affiche son image et title, (ce composant est injecté autant de fois
  //   qu'il n'y a de products dans ProductList)
  return (
    <section className="each-product">
      <img src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p> {product.price} €</p>
      {children}
    </section>
  );
}
export default Product;
