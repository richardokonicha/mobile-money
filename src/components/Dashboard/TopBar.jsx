import React, {useState} from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Avartar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Open Sans, sans-serif',
      textTransform: 'capitalize',
      fontWeight: 600,
      paddingTop: theme.spacing(2),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight: 64 + 32,
      // alignItems: 'flex-start',
      // paddingTop: theme.spacing(1),
      // paddingBottom: theme.spacing(2),
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.black, 0.08),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.black, 0.08),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: fade(theme.palette.common.black, 0.75),
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    sub: {
        opacity: 0.5,
        fontFamily: 'Open Sans, sans-serif',
        color: 'grey',
    },
  }));

export default function TopBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const classes = useStyles();
  const {
    open, 
    userProfile,
    handleDrawerOpen, 
    handleLogOut,
    handleSearch, 
  } = props;

  // const handleSearch = () => {
  //     console.log(searchValue);
  // };

  return (
  <React.Fragment>
    <AppBar 
    elevation={1} 
    position="absolute" 
    className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          // color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h4" color="inherit" noWrap className={classes.title}>
          Hello, {userProfile.firstName}
          <Typography className={classes.sub}>welcome back!</Typography>
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
              {/* <IconButton color="inherit"> */}
                  <SearchIcon />
              {/* </IconButton> */}
          </div>
          <InputBase
            placeholder="Find friends…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <IconButton color="inherit">
          <Badge badgeContent={8} color="secondary">
          <Avartar alt={userProfile.firstName} src="https://res.cloudinary.com/konichar/image/upload/v1596457389/fav.png"/>
          </Badge>
        </IconButton>`
      </Toolbar>
  </AppBar>
</React.Fragment>
)};