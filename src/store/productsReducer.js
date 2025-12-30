const initialState = {
  items: [],
  loading: false,
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_START":
      return { ...state, loading: true, error: null };

    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, items: action.payload };

    case "FETCH_PRODUCTS_ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
