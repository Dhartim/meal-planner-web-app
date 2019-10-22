import React from 'react';
import clsx from 'clsx';

import {
  AppBar,
  Button,
  ClickAwayListener,
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FaHeart, FaHome } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md"

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

    return (
      <ClickAwayListener onClickAway={handleDrawerClose}>
        <div className={classes.root}>
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}>
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/'}
                  color="inherit"
                  className={classes.textButton}
                >
                  <Typography component={'span'} variant="h6" className={classes.title}>
                    Meal Planner
                  </Typography>
                </Button>
              </Typography>
              {authorized === true ? <br/> :
                <Button
                  href={'/register'}
                  className={classes.auth}
                  color="inherit"
                >
                  Sign up
                </Button>}
              {authorized === true ?
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
                :
                <Button
                  href={'/login'}
                  className={classes.auth}
                  color="inherit"
                >
                  Login
                </Button>
              }
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            color="inherit"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button component="a" href='/' key={'Home'} className={classes.listItem}>
                <ListItemIcon>
                  <span>
                    <FaHome size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItem>
              <ListItem button component="a" href='/' key={'Profile'} className={classes.listItem}>
                <ListItemIcon>
                  <span>
                    <MdAccountCircle size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
              </ListItem>
              <ListItem button component="a" href='/favorites' key={'Favorites'} className={classes.listItem}>
                <ListItemIcon>
                  <span className="greyHeart">
                    <FaHeart size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Favorites'} />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            {props.children}
          </main>
        </div>
      </ClickAwayListener>
    )
}
export default Navbar;