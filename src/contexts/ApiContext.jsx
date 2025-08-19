import { createContext } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_URL = "http://localhost:5173";

  return (
    <ApiContext.Provider value={{ API_URL }}>
      {children}
    </ApiContext.Provider>
  );
}; 