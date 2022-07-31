import { createContext, useCallback, useContext, useState } from "react";

// can insert more themes
interface DrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
};

const DrawerContext = createContext({} as DrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
}

interface InterfaceDrawerProvider {
  children: React.ReactNode;
}

export const DrawerProvider: React.FC<InterfaceDrawerProvider> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen}}>
      {children}        
    </DrawerContext.Provider>
  )
}
