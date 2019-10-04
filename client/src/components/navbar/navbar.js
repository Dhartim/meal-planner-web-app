import React from 'react';

import { AppBar, Button, IconButton, Link, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./navbarstyle";

export function Navbar() {
    const classes = useStyles();
    const Home = () => <Link to="/" />;

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title}>
              <Button
                href={'/home'}
                color="inherit"
              >
                <Typography variant="h6" className={classes.title}>
                  Meal Planner
                </Typography>
              </Button>
            </Typography>
            <Button
              href={'/register'}
              className={classes.auth}
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}
export default Navbar;