import React from 'react';

import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./navbarstyle";
import ChevronLeftIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {FaHeart} from "react-icons/fa";

export function Navbar(props) {
    const classes = useStyles();
    const authorized = props.auth;
    console.log(`logged in=${authorized}`);

    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };

    if(authorized) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                edge="start"
                className={classes.menuButton}>
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/'}
                  color="inherit"
                >
                  <Typography component={'span'} variant="h6" className={classes.title}>
                    Meal Planner
                  </Typography>
                </Button>
              </Typography>
              <Button
                href={'/'}
                className={classes.auth}
                color="inherit"
                onClick={() => {
                  localStorage.removeItem('jwtToken');
                }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {classes.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Button
                href={'/favorites'}
                color="inherit"
              >
                <ListItem button key={'Favorites'}>
                  <ListItemIcon>
                    <span className="icon toggled heart">
                      <FaHeart size ={25}/>
                    </span>
                  </ListItemIcon>
                  <ListItemText primary={'Favorites'} />
                </ListItem>
              </Button>
            </List>
            {/*<Divider />*/}
          </Drawer>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/'}
                  color="inherit"
                >
                  <Typography component={'span'} variant="h6" className={classes.title}>
                    Meal Planner
                  </Typography>
                </Button>
              </Typography>
              <Button
                href={'/register'}
                className={classes.auth}
                color="inherit"
              >
                Sign up
              </Button>
              <Button
                href={'/login'}
                className={classes.auth}
                color="inherit"
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {classes.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button key={'Favorites'}>
                <ListItemIcon>
              <span className="icon toggled heart">
                <FaHeart size ={25}/>
              </span>
                </ListItemIcon>
                <ListItemText primary={'Favorites'} />
              </ListItem>
            </List>
            {/*<Divider />*/}
          </Drawer>
        </div>
      )
    }
}
export default Navbar;