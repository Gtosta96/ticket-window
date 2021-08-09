import React, { createContext, useState } from "react";
import { useSync } from "../hooks/useSync";
import storage from "../utils/storage";

import { SettingsContextProviderProps } from "./types";

export interface OrdersContextState {
  waitingTime: number;
  setWaitingTime: (waitingTime: number) => void;
}

export const SETTINGS_CONTEXT_INITIAL_VALUES: OrdersContextState = {
  waitingTime: undefined,
  setWaitingTime: undefined,
};

export const SettingsContext = createContext<OrdersContextState>(
  SETTINGS_CONTEXT_INITIAL_VALUES
);

const SettingsContextProvider = ({
  children,
}: SettingsContextProviderProps) => {
  const [waitingTime, setWaitingTime] = useState<number>(
    storage.get(`waitingTime`) ?? 10
  );

  useSync("waitingTime", waitingTime, setWaitingTime);

  const settingsContextState: OrdersContextState = {
    waitingTime,
    setWaitingTime,
  };

  return (
    <SettingsContext.Provider value={settingsContextState}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
