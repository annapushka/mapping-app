// @flow
import * as React from "react";
import { connect } from "react-redux";
import { Table } from "antd";

export const OrderTable = ({ orders }) => {
  const columns = [
    {
      title: "Номер заявки",
      dataIndex: "orderNumber",
    },
    {
      title: "Координаты ОТ lat",
      dataIndex: "latFrom",
    },
    {
      title: "Координаты ОТ lng",
      dataIndex: "lngFrom",
    },
    {
      title: "Координаты ДО lat",
      dataIndex: "latTo",
    },
    {
      title: "Координаты ДО lng",
      dataIndex: "lngTo",
    },
  ];

  return <Table columns={columns} dataSource={orders} />;
};

const orderStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(orderStateToProps)(OrderTable);
