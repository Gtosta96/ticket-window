import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { Order } from "../services/orders/types";
import storage from "../utils/storage";
import { AppContextProviderProps } from "./types";

export interface AppContextState {
  orders: Order[];
  addOrder: (orders: Order) => void;
  updateOrder: (order: Order, partialOrder: Partial<Order>) => void;
  deleteOrder: (order: Order) => void;
}

export const APP_CONTEXT_INITIAL_VALUES: AppContextState = {
  orders: [],
  addOrder: undefined,
  updateOrder: undefined,
  deleteOrder: undefined,
};

export const AppContext = createContext<AppContextState>(
  APP_CONTEXT_INITIAL_VALUES
);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [orders, setOrders] = useState<AppContextState[`orders`]>([]);

  useEffect(() => {
    const callback = () => {
      const storageOrders = storage.get("orders");
      const contextOrders = orders;

      console.log({ storageOrders, contextOrders });

      if (storageOrders !== contextOrders) {
        setOrders(storageOrders);
      }
    };

    console.log("set callback");
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

  const appContextState: AppContextState = {
    orders,
    addOrder,
    updateOrder,
    deleteOrder,
  };

  return (
    <AppContext.Provider value={appContextState}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
