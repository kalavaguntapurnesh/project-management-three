import { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [tenantDetails, setTenantDetails] = useState(null);
  const [landlordDetails, setLandlordDetails] = useState(null);

  return (
    <AppContext.Provider value={{ tenantDetails, setTenantDetails, landlordDetails, setLandlordDetails }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the app context
export const useAppContext = () => useContext(AppContext);
