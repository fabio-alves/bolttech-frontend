import { HomeRepairService } from "@mui/icons-material";
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useDrawerContext } from "../../contexts/DrawerContext";

interface InterfaceSideBar {
  children: React.ReactNode;
}

export const SideBar: React.FC<InterfaceSideBar> = ({children}) => {
  const theme = useTheme();
  const smBelow = useMediaQuery(theme.breakpoints.down('sm'))

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();
  return (
    <>
      <Drawer open={isDrawerOpen} variant={smBelow ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{height: theme.spacing(14), width: theme.spacing(14)}}
            src="" />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <HomeRepairService />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </List>

          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smBelow ?  0 : theme.spacing(28)}>
      {children}
      </Box>
    </>
  )

}