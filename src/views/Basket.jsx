import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../components/Product";
import { clearBasket, removeItem, updateQuantity } from "../actions";
import "./basket.css";
function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  // Calcul du total d'articles et du prix total
  const totalItem = basket.reduce((total, { quantity }) => total + quantity, 0);
  const totalPrice = basket.reduce(
    (total, { item, quantity }) => total + item.price * quantity,
    0
  );

  // Utilisation du hook useState pour stocker localement les quantités des articles
  const [localQuantities, setLocalQuantities] = useState({});

  // Gestionnaire de changement de quantité
  const handleQuantityChange = (id, newQuantity) => {
    // Mettre à jour l'état local des quantités
    setLocalQuantities({
      ...localQuantities,
      [id]: newQuantity,
    });
    // Mettre à jour le state Redux avec la nouvelle quantité
    dispatch(updateQuantity(id, newQuantity));
  };

  return (
    <>
      <h1>Basket</h1>
      <section className="basket-head">
        {totalPrice > 0 && (
          <button onClick={() => dispatch(clearBasket())}>Clear Basket</button>
        )}
        <p>Salut tu as {totalItem} articles dans ton panier </p>
        <p>
          Tu peux les acheter pour la maudite somme de {totalPrice.toFixed(2)}{" "}
          €uros
        </p>
      </section>
      <div className="basket-container">
        {basket.length > 0 &&
          basket.map(({ id, item, quantity }) => (
            <Product key={id} product={item} className="product">
              <section className="quantity-and-btn">
                {quantity > 1 && <p> plus d'un article</p>}
                <div>
                  <p>Quantité : </p>
                  <input
                    type="number"
                    value={localQuantities[id] || quantity} // Utilisation de localQuantities[id] comme valeur de l'input si elle existe, sinon utiliser la quantité du panier
                    onChange={(e) =>
                      handleQuantityChange(id, parseInt(e.target.value))
                    } // Met à jour localQuantities et le state Redux lorsque l'utilisateur change la valeur
                  />
                </div>
                <p>Prix : {item.price} €</p>
                <button
                  onClick={() => handleQuantityChange(id, localQuantities[id])}
                >
                  Update Quantity
                </button>
                <button onClick={() => dispatch(removeItem(id))}>
                  Remove Item
                </button>
              </section>
            </Product>
          ))}
      </div>
    </>
  );
}

export default Basket;
