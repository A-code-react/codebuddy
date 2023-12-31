import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import './styels/navbar.css';
import NestedDropdown from '../pages/DropDown';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const TransparentStickyAppBar = styled(AppBar)(() => ({
    position: 'sticky',
    top: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    backdropFilter: 'blur(10px)',
}));

const drawerWidth = 240;

const useStyles = styled(() => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    // const handleMobileMenuOpen = (event) => {
    //     setMobileMoreAnchorEl(event.currentTarget);
    // };

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const drawer = (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List>
                <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Image" />
                </ListItem>
                <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Video" />
                </ListItem>
                <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="Translate" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={handleDrawerClose}>
                    <ListItemText primary="More Options" />
                </ListItem>
            </List>
        </Drawer>
    );

    return (
        <>
            <Box sx={{
                flexGrow: 1,
                gap: "100px"
            }} />
            <Box sx={{ flexGrow: 1 }}>
                <TransparentStickyAppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            <img src="src/assets/logo-preview.png" alt="" />
                        </Typography>

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                '& .menu-items': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                },
                            }}
                        >
                            <Box className="menu-items">
                                <IconButton size="small" color="inherit" aria-label="search image">
                                    <p>image</p>
                                </IconButton>
                                <IconButton size="small" color="inherit" aria-label="search videos">
                                    <p>video</p>
                                </IconButton>
                                <IconButton size="small" color="inherit" aria-label="translate">
                                    <p>translate</p>
                                </IconButton>
                                <IconButton size="small" color="inherit" aria-label="more options">
                                    <p>...</p>
                                </IconButton>
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            size="small"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <h6> sign-in</h6>
                            <AccountCircle />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Add another IconButton for the dropdown */}
                        <IconButton size="small" color="inherit" aria-label="toggle dropdown" onClick={handleDropdownToggle}>
                            <ArrowDropDownCircleIcon />
                        </IconButton>
                        {isDropdownVisible && (
                            <NestedDropdown />
                        )}
                    </Toolbar>
                </TransparentStickyAppBar>
                {renderMobileMenu}
                {renderMenu}
                {drawer}
            </Box>

            <Box sx={{
                flexGrow: 1,
                gap: "100px"
            }} />
        </>
    );
}
