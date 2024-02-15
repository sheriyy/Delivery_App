import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { addToCart } from "../actions/cartAction";
import { deleteFromCart } from "../actions/cartAction";

const Cart = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();

  return (
    <div style={{ overflow: "hidden" }}>
      <div class="row justify-content">
        <div className="col-md-6">
          <h2 style={{ fontSize: "30px" }}>My Cart</h2>
          {cartItems.map((item) => {
            return (
              <div className="flex-container flex-start">
                <div>
                  <p style={{ marginBottom: "0" }}>
                    {item.name} ({item.pizzavariant})
                  </p>
                  <p style={{ marginBottom: "0" }}>
                    Price : {item.quantity} *{" "}
                    {item.prices[0][item.pizzavariant]} = {item.price}
                  </p>
                  <p style={{ display: "inline-block", marginBottom: "0" }}>
                    Quantity:
                  </p>
                  {console.log(item)}
                  <GoPlus
                    style={{ color: "blue" }}
                    onClick={() =>
                      dispatch(
                        addToCart(item, item.quantity + 1, item.pizzavariant)
                      )
                    }
                  />
                  {item.quantity}
                  <FiMinus
                    style={{ color: "red" }}
                    onClick={() =>
                      dispatch(
                        addToCart(item, item.quantity - 1, item.pizzavariant)
                      )
                    }
                  />
                  <hr />
                </div>
                <div style={{ margin: "0" }}>
                  <img
                    src={item.image}
                    style={{ height: "90px", width: "90px" }}
                  />
                  <MdOutlineDeleteOutline
                    style={{ color: "red" }}
                    onClick={() => dispatch(deleteFromCart(item))}
                  />
                </div>
                {/* <div>
                  <MdOutlineDeleteOutline style={{ color: "red" }} />
                </div> */}
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Cart;
