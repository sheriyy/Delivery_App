import React, { useState, useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import PizzaItems from "../components/PizzaItems";
import { getAllPizzas } from "../actions/pizzaItems";
import { Form, InputGroup } from "react-bootstrap";

const Home = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  console.log(pizzasstate);
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <Form style={{ width: "40%", margin: "auto" }}>
        <InputGroup>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="pizzas items"
          />
        </InputGroup>
      </Form>
      <div className="grid-container mt-4">
        {pizzasstate.pizzas
          .filter((pizza) => {
            return search.toLowerCase() === ""
              ? pizza
              : pizza.name.toLowerCase().includes(search);
          })
          .map((pizza) => {
            return <PizzaItems pizza={pizza} key={pizza._id} />;
          })}
        {/* {pizzasstate.pizzas.map((pizza) => {
          return <PizzaItems pizza={pizza} />;
        })} */}
      </div>
    </div>
  );
};

export default Home;
