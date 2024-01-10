import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { DrawerComponent } from "./Drawer";
import { Theme } from "@mui/material";
import { RegisterDropDown } from "./RegisterDropDown";
import { SlipDropDown } from "./SlipDropDown";
import { ExhibitionSaleDropDown } from "./ExhibitionSaleDropDown";


const useStyles = makeStyles((theme: Theme) => ({
    navbar : {
        backgroundColor: '#204060',
    },
    navlinks: {
      marginLeft: theme.spacing(5),
      display: "flex",
    },
    logo: {
      display : 'flex',
      flexGrow: 1,
      cursor: "pointer",
      justifyContent: 'left'
    },
    link: {
      textDecoration: "none",
      color: "white",
      marginLeft: theme.spacing(5),
      borderBottom: "1px solid transparent",
    },
    initlink : {
      marginTop: "8px",
      fontSize: "14px",
      textDecoration: "none",
      color: "white",
      marginLeft: theme.spacing(5),
      borderBottom: "1px solid transparent",
      "&:hover": {
        color: "yellow",
      },
    }
    
  }));

export const Navbar : React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className = {classes.navbar}>
        <Typography variant="h4" className={classes.logo}>
          <Link to='/dashboard' className="text-white hover:text-gray-200">Acrylic Admin</Link>
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.initlink}>
            ダッシュボード
            </Link>
            <Link to="/auth/login" className={classes.initlink}>
              ログイン
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

