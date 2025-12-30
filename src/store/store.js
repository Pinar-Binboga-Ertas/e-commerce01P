import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

// Mevcut counter reducer
const initialState = { count: 0 };
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

// Yeni cart reducer
const initialCart = { items: [] };
function cartReducer(state = initialCart, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer,
});

// Store oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
