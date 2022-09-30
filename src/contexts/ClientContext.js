import React, { createContext } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  return (
    <ClientContext.Provider
      value={{
        client,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};
