import {
  ADD_ITEM,
  CLEAR_BASKET,
  REMOVE_ITEM,
  SET_USER,
  UPDATE_QUANTITY,
  UPDATE_USER,
} from "./types";

//Ajout Item au panier
export function addToBasket(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}
export function clearBasket() {
  return {
    type: CLEAR_BASKET,
  };
}
export function removeItem(payload) {
  return {
    type: REMOVE_ITEM,
    payload,
  };
}
export function updateQuantity(id, quantity) {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
}
export function setUser(payload) {
  return {
    type: SET_USER,
    payload,
  };
}
export function updateUser(payload) {
  return {
    type: UPDATE_USER,
    payload,
  };
}
