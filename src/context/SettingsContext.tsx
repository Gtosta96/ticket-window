import React, { createContext, useState } from "react";
import { useSync } from "../hooks/useSync";
import storage from "../utils/storage";

import { SettingsContextProviderProps } from "./types";

export interface OrdersContextState {
  waitingTime: number;
  setWaitingTime: (waitingTime: number) => void;

  alertInterval: number;
  setAlertInterval: (alertInterval: number) => void;
}

export const SETTINGS_CONTEXT_INITIAL_VALUES: OrdersContextState = {
  waitingTime: undefined,
  setWaitingTime: undefined,

  alertInterval: undefined,
  setAlertInterval: undefined,
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

  const [alertInterval, setAlertInterval] = useState<number>(
    storage.get(`alertInterval`) ?? 120
  );

  useSync("waitingTime", waitingTime, setWaitingTime);
  useSync("alertInterval", alertInterval, setAlertInterval);

  const settingsContextState: OrdersContextState = {
    waitingTime,
    setWaitingTime,

    alertInterval,
    setAlertInterval,
  };

  return (
    <SettingsContext.Provider value={settingsContextState}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
