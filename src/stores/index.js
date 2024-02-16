import basketReducer from "../reducers/basket";
import { combineReducers, createStore } from "redux";
import userReducer from "../reducers/user";

//Création d'un store pour accès partout à l'application des reducers par dispatch
const rootReducer = combineReducers({
  basket: basketReducer,
  profile: userReducer,
});
const store = createStore(rootReducer);

export default store;
