import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_PRODUCTS_START" });

    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );

      dispatch({
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_PRODUCTS_ERROR",
        payload: "Ürünler yüklenemedi",
      });
    }
  };
};
