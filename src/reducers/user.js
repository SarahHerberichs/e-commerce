import { SET_USER, UPDATE_USER } from "../actions/types";

const initialState = {
  firstname: "Germain",
  lastname: "Dupuis",
  email: "germain_dupuis@dev.com",
  password: "12345678",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    case UPDATE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
