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

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
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

export default function Header(props: HeaderProps) {
  const classes = useStyles();
  const { sections } = props;
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
            {sections.map((section) => (
              <Button 
                className={classes.menuButton}
                color={'neutral'}
                >{section.title}</Button>
            ))}
            <Button 
              className={classes.menuButton}
              color={'neutral'} 
              variant="outlined">
              {" "}
              Pre-Registro
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
