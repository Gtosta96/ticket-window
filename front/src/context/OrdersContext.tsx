import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useSync } from "../hooks/useSync";
import { Order } from "../services/orders/types";
import storage from "../utils/storage";
import { OrdersContextProviderProps } from "./types";

export interface OrdersContextState {
  orders: Order[];
  addOrder: (orders: Order) => void;
  updateOrder: (order: Order, partialOrder: Partial<Order>) => void;
  deleteOrder: (order: Order) => void;
}

export const ORDERS_CONTEXT_INITIAL_VALUES: OrdersContextState = {
  orders: [],
  addOrder: undefined,
  updateOrder: undefined,
  deleteOrder: undefined,
};

export const OrdersContext = createContext<OrdersContextState>(
  ORDERS_CONTEXT_INITIAL_VALUES
);

const OrdersContextProvider = ({ children }: OrdersContextProviderProps) => {
  const [orders, setOrders] = useState<OrdersContextState[`orders`]>([]);

  // useSync("orders", orders, setOrders);
  useEffect(() => {
    const callback = () => {
      const storageOrders = storage.get("orders");
      const contextOrders = orders;

      console.log({ storageOrders, contextOrders });

      if (storageOrders !== contextOrders) {
        setOrders(storageOrders);
      }
    };

    window.addEventListener("storage", callback);

    return () => {
      window.removeEventListener("storage", callback);
    };
  }, []);

  useEffect(() => {
    storage.set("orders", orders);
  }, [orders]);

  function addOrder(order: Order) {
    setOrders([...orders, order]);
  }

  function updateOrder(order: Order, partialOrder: Partial<Order>) {
    const newOrders = orders.map((o) => {
      if (o.id === order.id) {
        return {
          ...o,
          ...partialOrder,
        };
      }
      return o;
    });
    setOrders(newOrders);
  }

  function deleteOrder(order: Order) {
    const newOrders = orders.filter((o) => o.id !== order.id);
    setOrders(newOrders);
  }

  const ordersContextState: OrdersContextState = {
    orders,
    addOrder,
    updateOrder,
    deleteOrder,
  };

  return (
    <OrdersContext.Provider value={ordersContextState}>
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersContextProvider;
