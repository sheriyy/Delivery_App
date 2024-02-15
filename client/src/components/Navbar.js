import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  console.log(cartState);
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BERLIN'S PIZZA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-end" id="navbarNav">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  href="http://127.0.0.1:5500/11.3%20TinDog%20Project/index.html"
                >
                  Login
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  Cart {cartState?.cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
