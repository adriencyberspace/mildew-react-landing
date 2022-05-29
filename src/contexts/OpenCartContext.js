import React, { createContext, useState } from "react";

export const OpenCartContext = createContext();

export const OpenCartProvider = ({ children }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <OpenCartContext.Provider value={{ isCartOpen, setCartOpen }}>
      {children}
    </OpenCartContext.Provider>
  );
};
