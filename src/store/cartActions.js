// Action tipi
export const ADD_TO_CART = "ADD_TO_CART";

// Sepete ürün ekleme action creator
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
