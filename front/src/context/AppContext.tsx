import React, { createContext, useState } from "react";
import { Order } from "../services/orders/types";
import { AppContextProviderProps } from "./types";

export interface AppContextState {
  orders: Order[];
  setOrders: (orders: AppContextState[`orders`]) => void;
  updateOrder: (order: Order, partialOrder: Partial<Order>) => void;
}

export const APP_CONTEXT_INITIAL_VALUES: AppContextState = {
  orders: [],
  setOrders: undefined,
  updateOrder: undefined,
};

export const AppContext = createContext<AppContextState>(
  APP_CONTEXT_INITIAL_VALUES
);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [orders, setOrders] = useState<AppContextState[`orders`]>([]);

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

  const appContextState: AppContextState = {
    orders,
    setOrders,
    updateOrder,
  };

  return (
    <AppContext.Provider value={appContextState}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
