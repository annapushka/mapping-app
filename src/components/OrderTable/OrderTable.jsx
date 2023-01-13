// @flow
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "antd";
import { showOrder } from "../../store/redusers/orderReduser";
import "./OrderTable.scss";

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

  const dispatch = useDispatch();

  const [showRow, setShowRow] = useState(null);

  const setShow = (record, rowIndex) => {
    setShowRow(rowIndex);
    dispatch(showOrder(record));
  };

  return (
    <Table
      rowClassName={(record, index) => index === showRow && "table-row-show"}
      columns={columns}
      dataSource={orders}
      onRow={(record, rowIndex) => {
        return {
          onClick: (event) => {
            setShow(record, rowIndex);
          },
        };
      }}
    />
  );
};
