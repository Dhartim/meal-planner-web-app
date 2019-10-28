import React, { useContext, useEffect } from 'react';
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FaHeart, FaHome } from "react-icons/fa";
import { MdAccountCircle, MdRestaurant } from "react-icons/md"

import useStyles from "./navbarstyle";
import UserContext from "../../context/usercontext";

const mapStateToProps = (state, ownProps) => {
  return {
    location: ownProps.location
  }
};

export function Navbar(props) {
  const userContext = useContext(UserContext);
  const userId = userContext.userId;
  const loading = userContext.loading;
  console.log("navbar - id=%d", userId);
  console.log("navbar - loading=%s", loading);

  const classes = useStyles();
  const [authorized, setAuthorized] = React.useState(false);

  useEffect(() => {
    setAuthorized(userContext.authorized);
    // setLoading(false);
  }, [userContext.authorized]);
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
                href={'/dashboard'}
                color="inherit"
                className={classes.textButton}
              >
                <Typography component={'span'} variant="h6" className={classes.title}>
                  Meal Planner
                </Typography>
              </Button>
            </Typography>
            {loading ? <div/> :
              authorized ? <div/> :
              <Button
                href={'/register'}
                className={classes.auth}
                color="inherit"
              >
                Sign up
              </Button>
            }
            {loading ? <div/> :
              authorized ?
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
            <ListItem button component="a" href='/dashboard' key={'Home'} className={classes.listItem}>
              <ListItemIcon>
                <span>
                  <FaHome size ={25}/>
                </span>
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>

            {authorized ?
              <ListItem button component="a" href='/account' key={'Profile'} className={classes.listItem}>
                <ListItemIcon>
                  <span>
                    <MdAccountCircle size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
              </ListItem>
              : <div/>
            }
            {authorized ?
              <ListItem button component="a" href='/preferences' key={'Preferences'} className={classes.listItem}>
                <ListItemIcon>
                  <span>
                    <MdRestaurant size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Preferences'} />
              </ListItem>
              : <div/>
            }
            {authorized ?
              <ListItem button component="a" href='/favorites' key={'Favorites'} className={classes.listItem}>
                <ListItemIcon>
                  <span className="greyHeart">
                    <FaHeart size ={25}/>
                  </span>
                </ListItemIcon>
                <ListItemText primary={'Favorites'} />
              </ListItem>
              : <div/>
            }
          </List>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {props.children}
        </main>
      </div>
    </ClickAwayListener>
  )
}

export default Navbar;