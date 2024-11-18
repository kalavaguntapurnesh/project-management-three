import React, { createContext, useContext, useState } from "react";


const DetailsContext = createContext();


export const useDetails = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetails must be used within a DetailsProvider");
  }
  return context;
};


export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    tenant: null,
    landlord: null,
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};
