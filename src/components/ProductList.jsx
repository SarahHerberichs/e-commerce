import React from "react";
import Product from "./Product";
import "./productList.css";
import AddProductForm from "./AddProductForm";
//Prend tous les products trouvés dans l'API, passé par le biai de Home
function ProductList({ products }) {
  //Retourne le composant Product pour chaque product de la liste
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <>
          <Product key={index} product={product} className="each-product">
            <AddProductForm product={product} />
          </Product>
        </>
      ))}
    </div>
  );
}

export default ProductList;
