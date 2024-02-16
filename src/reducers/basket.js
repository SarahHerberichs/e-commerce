import {
  ADD_ITEM,
  CLEAR_BASKET,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from "../actions/types.js";

const initialState = [];
export default function basketReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      //retour d'une copie de l'étatactuel avec un nouveau payload
      return [...state, action.payload];

    case CLEAR_BASKET:
      //Vide le state du basket en retournant un tableau vide
      return [];
    default:
      return state;

    case REMOVE_ITEM:
      //new basket est tous les éléments sauf celui qui a l'id passé dans le payload
      const newBasket = state.filter(({ id }) => id !== action.payload);
      return newBasket;

    case UPDATE_QUANTITY:
      //retourne un nouveau tableau avec la quantité modifiée selon le payload
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: action.payload.quantity,
          };
        }
        return item;
      });
  }
}
