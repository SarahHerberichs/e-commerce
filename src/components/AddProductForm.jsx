import { useDispatch } from "react-redux";
import React, { createRef } from "react";

import { addToBasket } from "../actions";
import { nanoid } from "nanoid";

function AddProductForm({ product }) {
  const dispatch = useDispatch();
  const quantityRef = createRef();

  function addItem(e) {
    e.preventDefault();

    const quantity = Number(quantityRef.current.value);
    const payload = {
      item: product,
      quantity: quantity,
      id: nanoid(),
    };
    dispatch(addToBasket(payload));
  }

  return (
    <>
      <form onSubmit={addItem} className="add-item-form">
        Quandtity :
        <input ref={quantityRef} type="number" defaultValue="1" required />
        <button type="submit">Add To Basket</button>
      </form>
    </>
  );
}

export default AddProductForm;
