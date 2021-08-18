import React, { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import sidebarItems from "./helpers";
import { useHistory, useRouteMatch } from "react-router-dom";
import { Box } from "@material-ui/core";
import { PATHS } from "../../config/paths";

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
    borderTop: "1px solid #333",
    borderBottom: "1px solid #333",
  },
  ImageLogo: {
    width: 150,
  },
}));

type Anchor = "left";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { push } = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const isDisplayRoute = useRouteMatch(PATHS.DISPLAY);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      {!isDisplayRoute && (
        <>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sistema de Gerenciamento de Pedidos - SGP
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <Box display="flex" justifyContent="center">
              <img
                className={classes.ImageLogo}
                src="./assets/img/logo2.jpg"
                alt="logo"
              />
            </Box>
            <Box
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer("left", false)}
              onKeyDown={toggleDrawer("left", false)}
            >
              <List>
                {sidebarItems.map((item) => (
                  <ListItem
                    button
                    key={item.path}
                    onClick={() => push(item.path)}
                    disabled={item.disabled}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      )}

      <Box
        display="flex"
        flexDirection="column"
        padding="2rem"
        flexGrow={1}
        overflow="auto"
      >
        {children}
      </Box>
    </Box>
  );
}
