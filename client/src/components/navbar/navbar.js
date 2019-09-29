import React, { Component } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import navbarStyles from "./navbarstyle";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    const classes = navbarStyles;

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Meal Planner
            </Typography>
            <Button className={classes.auth} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default Navbar;