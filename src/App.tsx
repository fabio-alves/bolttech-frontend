import { ThemeProvider } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes/Light"
import { InternThemeProvider } from "./shared/contexts/TheContext"

function App() {
  return (
    <InternThemeProvider>
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
    </InternThemeProvider>
  );
}

export default App;
