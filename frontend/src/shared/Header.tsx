import React, { useState } from "react";
//styles
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
//material components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
//image assets
import logo from "../assets/cuco-logo.png";
//static content
import { options } from "../staticInfo/header";
import {
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

interface HeaderProps {
  isMainPage: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: 240,
    },
    menuButton: {
      color: "#fff",
    },
  })
);

export default function Header(props: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center"}}
    >
      <Link href="/">
            <img src={logo} alt="Cuco Arts!" />
          </Link>
      <Divider />
      <List key={'mainMenu'}>
        {options.map((item, i) => (
           item.enabled && (
            <ListItem key={i} disablePadding>
              <ListItemButton
                key={item.to}
                sx={{ textAlign: "left", color:'#fff' }}
                href={item.to}
              >
                <ListItemText key={item.title} primary={item.title} />
              </ListItemButton>
            </ListItem>
           )
            )
          )}
      </List>
    </Box>
  );

  const classes = useStyles();
  const { isMainPage } = props;
  return (
    <>
      <AppBar
        component="nav"
        position="static"
        color={isMainPage ? "transparent" : "primary"}
        elevation={0}
        sx={isMainPage ? { pt: 4 } : { backgroundColor: "#111" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/">
            <img src={logo} alt="Cuco Arts!" className={classes.logo} />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {options.map((option: any, i) => (
              <>
                {option.enabled ? (
                  <Button
                    key={i}
                    className={classes.menuButton}
                    color={"neutral"}
                    href={option.to}
                    size="small"
                  >
                    {option.title}
                  </Button>
                ) : (
                  <></>
                )}
              </>
            ))}
          </Box>
          {/* <Button
            key={"pre-registro"}
            className={classes.menuButton}
            color={"neutral"}
            variant="outlined"
            size="small"
          >
            Pre-Registro
          </Button> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          key="drawer"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor:'#111',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
