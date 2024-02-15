export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        pizzas: action.payload,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
