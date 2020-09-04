import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import TocIcon from '@material-ui/icons/Toc';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { BrowserRouter, Route , Switch, Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Categories from '../details/categories'
import Crud from '../crud/Crud'
import Users from '../user/users'
import Ordenes from '../admin/Ordenes'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  
  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false); };

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >

        <Divider />
                <div>
                  <Link to='/admin/categorias'  className={classes.link}>
                    <ListItem button>
                        <ListItemIcon>
                          <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categorias" />
                      </ListItem>
                  </Link>

                  <Link to='/admin/productos'  className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <CreateIcon />
                      </ListItemIcon>
                      <ListItemText primary="Productos" />
                    </ListItem>
                  </Link>

                  <Link to='/admin/usuarios'  className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <PeopleAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Usuarios" />
                    </ListItem>
                  </Link>

                  <Link to='/admin/ordenes'  className={classes.link}>
                    <ListItem button>
                      <ListItemIcon>
                        <TocIcon />
                      </ListItemIcon>
                      <ListItemText primary="Ordenes" />
                    </ListItem>
                  </Link>
                </div>

      </Drawer>
      <main className={classes.content}>

      <Switch>
        
          <Route exact path="/admin/categorias">
            <Container>
              <Categories/>
            </Container>
          </Route>

          <Route exact path="/admin/productos">
            <Container>
              <Crud/>
            </Container>
          </Route>

          <Route exact path="/admin/usuarios">
            <Container>
              <Users/>
            </Container>
          </Route>

          <Route exact path="/admin/ordenes">
            <Container>
              <Ordenes/>
            </Container>
          </Route>

      </Switch>
      </main>
    </div>
    </BrowserRouter>
  );
}