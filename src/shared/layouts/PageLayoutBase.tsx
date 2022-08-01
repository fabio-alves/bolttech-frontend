import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts/DrawerContext"

interface InterfaceLayoutBase {
  children: React.ReactNode;
  title: string;
}

export const PageLayoutBase: React.FC<InterfaceLayoutBase> = ({children, title}) => {
  const theme = useTheme();
  const smBelow = useMediaQuery(theme.breakpoints.down('sm'))
  const mdBelow = useMediaQuery(theme.breakpoints.down('md'))
  const { toggleDrawerOpen } = useDrawerContext();


  return (
  <Box height="100%" display="flex" flexDirection="column" gap={3}>
    <Box padding={1} height={theme.spacing(smBelow ? 6 : mdBelow ? 8 : 12)} display="flex" alignItems="center">
     { smBelow && <IconButton onClick={toggleDrawerOpen}>
        <Icon>menu</Icon>
      </IconButton>}
      <Typography 
        variant ={smBelow ? "h5" : mdBelow ? "h3" : "h2"}
        whiteSpace ="nowrap"
        overflow ="hidden"
        textOverflow ="ellipses"
      >
        { title }
      </Typography>
    </Box>

    <Box>
      Barra de ferramentas
    </Box>
   
    <Box flex={1} overflow="auto">
    { children }
    </Box>
    
  </Box>
  );
};
