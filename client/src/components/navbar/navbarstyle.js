import {makeStyles} from "@material-ui/core";

export const navbarStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      flexGrow: 1,
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    auth: {
      flexGrow: 1,
    },
}));
export  default  navbarStyles;