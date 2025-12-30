import { createStore, applyMiddleware } from "redux";
import { default as thunk } from 'redux-thunk';

// Basit reducer
const initialState = { count: 0 };
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

// Store oluştur
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
