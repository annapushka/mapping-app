// @flow
import * as React from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";

export const OrderTable = () => {
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
  const orders = useSelector((state) => state.orderReducer.orders);

  return <Table columns={columns} dataSource={orders} />;
};
