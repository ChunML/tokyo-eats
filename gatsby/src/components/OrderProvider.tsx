import React, { useState } from "react";
import { OrderStyle } from "../utils/types";

export const OrderContext = React.createContext<
  [OrderStyle, React.Dispatch<React.SetStateAction<OrderStyle>>]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>([{}, () => {}]);

const OrderContextProvider = ({ children }) => {
  const [order, setOder] = useState(
    localStorage.getItem("tokyoEatsOrder")
      ? JSON.parse(localStorage.getItem("tokyoEatsOrder"))
      : {}
  );

  return (
    <OrderContext.Provider value={[order, setOder]}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
