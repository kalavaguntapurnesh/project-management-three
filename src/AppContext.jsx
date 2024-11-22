import React, { createContext, useState, useContext } from 'react';

const DetailsContext = createContext();

export const useDetails = () => {
  return useContext(DetailsContext);
};

export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    tenantDetails: null,
    landlordDetails: null,
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};
