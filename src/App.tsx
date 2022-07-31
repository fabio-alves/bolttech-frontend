import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { InternThemeProvider } from "./shared/contexts/TheContext"
import { SideBar } from "./shared/components/sideBar/SideBar";
import { DrawerProvider } from "./shared/contexts/DrawerContext";

function App() {
  return (
    <InternThemeProvider>
    <DrawerProvider>
    <BrowserRouter >
    <SideBar>
      <AppRoutes />
    </SideBar>
    </BrowserRouter>
    </DrawerProvider>
    </InternThemeProvider>
  );
}

export default App;
