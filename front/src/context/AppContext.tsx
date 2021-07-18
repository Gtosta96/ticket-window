import React, { createContext, useState } from "react";
import { AppContextProviderProps } from "./types";

export interface AppContextState {
  messages: string[];
  setMessages: (messages: AppContextState[`messages`]) => void;
}

export const APP_CONTEXT_INITIAL_VALUES: AppContextState = {
  messages: [],
  setMessages: undefined,
};

export const AppContext = createContext<AppContextState>(
  APP_CONTEXT_INITIAL_VALUES
);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [messages, setMessages] = useState<AppContextState[`messages`]>([
    `message1`,
    `messag9999999`,
  ]);
  const appContextState: AppContextState = {
    messages,
    setMessages,
  };

  return (
    <AppContext.Provider value={appContextState}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
