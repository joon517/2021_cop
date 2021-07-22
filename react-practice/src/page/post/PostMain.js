import React from 'react';
import PostList from './PostListEx';
import { withRouter } from 'react-router-dom';

import PostView from './PostView';

// import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import FolderIcon from '@material-ui/icons/Folder';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import CreateIcon from '@material-ui/icons/Create';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import { CenterFocusStrong } from '@material-ui/icons';



import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';



const useStyles = makeStyles({
  root: {
    // width: 'relative',
    position: 'fixed',
    bottom: 0,
    right: 50,
    left: 50,
    // backgroundColor: 'grey',
  },
});

const useStylesBar = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // textAlign: 'center',
    left: 50,
    right: 50,
    // display: 'none',
    // [theme.breakpoints.up('sm')]: {
    //   display: 'block',
    // },
  },
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(3),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'inherit',
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
  //   },
  // },
  // sectionDesktop: {
  //   display: 'none',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'flex',
  //   },
  // },
  // sectionMobile: {
  //   display: 'flex',
  //   [theme.breakpoints.up('md')]: {
  //     display: 'none',
  //   },
  // },
}));

// const PostMain = props => {
export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const classesBar = useStylesBar();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {/* <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> */}
    </Menu>
  );




  return (
    <>

      <div className={classesBar.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classesBar.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <div className={classesBar.grow} />
            <Typography className={classesBar.title} variant="h6" noWrap>
              홈
            </Typography>
            {/* <div className={classesBar.search}>
              <div className={classesBar.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classesBar={{
                  root: classesBar.inputRoot,
                  input: classesBar.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}
            <div className={classesBar.grow} />
            {/* <div className={classesBar.sectionDesktop}> */}
              {/* <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton> */}
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              {/* <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
            {/* </div> */}
            {/* <div className={classesBar.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div> */}
          </Toolbar>
        </AppBar>
        {/* {renderMobileMenu}
        {renderMenu} */}
      </div>


      {/* <br/> */}
      {/* <h2 align="center">게시판</h2> */}
      <PostView />
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        {/* <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} /> */}
        <BottomNavigationAction label="홈" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="검색" value="search" icon={<SearchIcon />} />
        <BottomNavigationAction label="새글작성" value="create" icon={<CreateIcon />} />
        <BottomNavigationAction label="북마크" value="bookmark" icon={<BookmarkBorderIcon />} />
        <BottomNavigationAction label="더보기" value="more" icon={<MoreHorizIcon />} />
        {/* <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} /> */}
        {/* <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} /> */}
        {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
      </BottomNavigation>
    </>
  )
}

// export default PostMain;