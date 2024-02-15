import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { UseDispatch, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

const PizzaItems = ({ pizza }) => {
  const [pizzavariant, setPizzaVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const addToCarts = () => {
    dispatch(addToCart(pizza, quantity, pizzavariant));
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h4>{pizza.name}</h4>
      <img src={pizza.image} onClick={handleShow} />
      <div className="flex-container">
        <div>
          <p>Variants:</p>
          <select
            value={pizzavariant}
            onChange={(e) => setPizzaVariant(e.target.value)}
          >
            {pizza.variants.map((variant) => {
              return <option>{variant}</option>;
            })}
          </select>
        </div>
        <div>
          <p>Quantity:</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {pizza.quantity.map((pizzaquantity) => {
              return <option>{pizzaquantity}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container ">
        <div className="mt-3 w-100">
          <p>
            Prices:{pizza.prices[0][pizzavariant] * quantity}
            {"€"}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3 btn-style"
          onClick={addToCarts}
        >
          Add to Cart
        </button>
        <div></div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} alt="pizza image" />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PizzaItems;
