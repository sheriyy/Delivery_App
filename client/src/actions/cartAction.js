import { NavItem } from "react-bootstrap";

export const addToCart =
  (pizza, quantity, pizzavariant) => (dispatch, getState) => {
    console.log(pizza, quantity, pizzavariant);
    var cartItem = {
      name: pizza.name,
      _id: pizza._id,
      image: pizza.image,
      pizzavariant: pizzavariant,
      quantity: Number(quantity),
      prices: pizza.prices,
      price: pizza.prices[0][pizzavariant] * quantity,
    };
    if (cartItem.quantity > 10) {
      alert("Cannot add more than 10");
    } else {
      if (cartItem.quantity < 0) {
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
      } else {
        dispatch({ type: "ADD_TO_CART", payload: cartItem });
      }
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

export const deleteFromCart = (pizza) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: pizza });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
