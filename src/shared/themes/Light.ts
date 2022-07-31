import { createTheme } from "@mui/material"

export const LightTheme =  createTheme({
  palette: {
    primary: {
      main: '#170F4F',
      dark: '#00BAC7' ,
      light: '#66D6DD',
      contrastText: '#fff',
    },
    secondary: {
      main: '#918DA8',
      dark: '#00BAC7' ,
      light: '#5D5784',
      contrastText: '#fff',
    },
    background: {
      default: '#F2FBFC',
      paper: '#fff',
    },
  }
});