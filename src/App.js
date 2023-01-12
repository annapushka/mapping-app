import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import './App.scss';
import { Map } from './components/Map';
import { OrderTable } from './components/OrderTable';
import { fetchOrders } from "./store/action-creators/order";


function App ({error, loading, fetchOrders}) {

  useEffect(() => fetchOrders(), [])

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

  return (
    <div className="App">
      <OrderTable />
      <Map/>
    </div>
  );
};

const orderStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchOrders: fetchOrders}, dispatch);
};

export default connect(orderStateToProps, matchDispatchToProps)(App);


