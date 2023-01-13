import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.scss";
import { Map } from "./components/Map/Map";
import { OrderTable } from "./components/OrderTable/OrderTable";
import { fetchOrders } from "./store/redusers/orderReduser";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchOrders()), []);

  return (
    <div className="App">
      <OrderTable />
      <Map />
    </div>
  );
};
