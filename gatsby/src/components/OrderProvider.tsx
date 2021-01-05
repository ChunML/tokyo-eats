import React, { useState } from "react";
import { OrderStyle } from "../utils/types";

export const OrderContext = React.createContext<
  [OrderStyle, React.Dispatch<React.SetStateAction<OrderStyle>>]
  // eslint-disable-next-line @typescript-eslint/no-empty-function
>([{}, () => {}]);

const OrderContextProvider = ({ children }) => {
  const [order, setOder] = useState({});

  return (
    <OrderContext.Provider value={[order, setOder]}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
