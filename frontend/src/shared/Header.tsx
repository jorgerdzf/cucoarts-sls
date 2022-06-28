import React from "react";
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
import logo from "./assets/cuco-logo.png";
//static content
import {options} from "../staticInfo/header";

interface HeaderProps {
  isMainPage: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: 120,
    },
    menuButton: {
      color: "#fff",
    },
  })
);

const mainHeader = (classes: any) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          color="transparent"
          elevation={0}
          sx={{ pt: 4 }}
        >
          <Toolbar>
            <img src={logo} alt="Cuco Arts!" className={classes.logo} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            {options.map(
              (option:any) => (
                <Button className={classes.menuButton} color={"neutral"}>
                  {option.title}
                </Button>
              )
            )}
            <Button
              className={classes.menuButton}
              color={"neutral"}
              variant="outlined"
            >
              {" "}
              Pre-Registro
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

const secondaryHeader = (classes: any) => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          color="transparent"
          elevation={0}
          sx={{ pt: 4 }}
        >
          <Toolbar>
            <img src={logo} alt="Cuco Arts!" className={classes.logo} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            {options.map(
              (option:any) => (
                <Button className={classes.menuButton} color={"neutral"}>
                  {option.title}
                </Button>
              )
            )}
            <Button
              className={classes.menuButton}
              color={"neutral"}
              variant="outlined"
            >
              {" "}
              Pre-Registro
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { isMainPage } = props;
  return (
    <>
      {isMainPage
        ? mainHeader(classes)
        : secondaryHeader(classes)}
    </>
  );
}
