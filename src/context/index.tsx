import React, { FC } from "react";

import OrdersContext from "./OrdersContext";
import SettingsContext from "./SettingsContext";

const RootContextProvider: FC = ({ children }) => {
  return (
    <OrdersContext>
      <SettingsContext>{children}</SettingsContext>
    </OrdersContext>
  );
};

export default RootContextProvider;
