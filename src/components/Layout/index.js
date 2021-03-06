import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../Header";
import Topnav from "../Topnav";

const useStyles = makeStyles((theme) => ({
  page: {
    background: theme.palette.primary.light,
    width: "100%",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <Topnav />
      <div className={classes.page}>{children}</div>
    </>
  );
};

export default Layout;
