import { createContext, useState } from "react";
import { Box, ThemeProvider } from "@mui/system";
import { LightTheme } from "../themes/Light"

// can insert more themes
interface ThemeContextData {
  themeName: "Light";
}

const ThemeContext = createContext({} as ThemeContextData);

interface InterfaceThemeProvider {
  children: React.ReactNode;
}

export const InternThemeProvider: React.FC<InterfaceThemeProvider> = ({ children }) => {
  const [themeName, setThemeName] = useState<'Light'>('Light')
  return (
    <ThemeContext.Provider value={{themeName}}>
      <ThemeProvider theme={LightTheme}>
        <Box width="100vw" height="100vh" bgcolor={LightTheme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
