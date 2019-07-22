import React from 'react';
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';


/*Icons*/
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import RssFeed from '@material-ui/icons/RssFeed'
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Book from '@material-ui/icons/Book';

const activeStyles  = {
  color: 'red',
}


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },

  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },


}));

export default function ResponsiveDrawer(props) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div className="leftMenuDrawer">


      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Meta Categorii
        </ListSubheader>
      }
    >
            {/* Home */}
            <Link to="/" className="listItemClear" activeStyle={activeStyles}>
              <ListItem button component="a">
                <ListItemIcon> <HomeIcon/></ListItemIcon>
                <ListItemText primary="Acasă" />
              </ListItem>
            </Link>

            {/* Despre */}
            <Link to="/" className="listItemClear" /*partiallyActive={true}*/>
              <ListItem button component="a">
                <ListItemIcon> <Book/></ListItemIcon>
                <ListItemText primary="Studiu biblic" />
              </ListItem>
            </Link>

            {/* Contact */}
            <Link to="/" className="listItemClear" /*partiallyActive={true}*/>
              <ListItem button component="a">
                <ListItemIcon> <MailIcon /> </ListItemIcon>
                <ListItemText primary="Raspunsuri rapide" />
              </ListItem>
            </Link>

            {/* Blog */}
            <Link to="/" className="listItemClear" /*partiallyActive={true}*/>
              <ListItem button component="a">
                <ListItemIcon> <RssFeed /> </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItem>
            </Link>

            {/* Despre */}
            <Link to="/" className="listItemClear" >
              <ListItem button component="a">
                <ListItemIcon> <InfoIcon/></ListItemIcon>
                <ListItemText primary="Despre" />
              </ListItem>
            </Link>

            {/* Contact */}
            <Link to="/" className="listItemClear">
              <ListItem button component="a">
                <ListItemIcon> <MailIcon /> </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>

      </List>
      <Divider />

    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            SS-Template
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >

            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />

                {children}

      </main>
    </div>
  );
}