import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../../../../assets/authImages/Logo.png'

const MyNavBar: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ccc' }}>
            {/* Top navbar */}
            <Box sx={{ backgroundColor: '#3F3077', color: '#fff', padding: '4px 0' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Box display="flex" alignItems="center">
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                +91 8374902234
                            </Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box display="flex" gap={2}>
                            <IconButton color="inherit" size="small">
                                <FacebookIcon fontSize="small" />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <InstagramIcon fontSize="small" />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <LinkedInIcon fontSize="small" />
                            </IconButton>
                            <IconButton color="inherit" size="small">
                                <TwitterIcon fontSize="small" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </Box>

            {/* bottom navbar */}
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
                    {/* Logo section */}
                    <Box>
                        <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} />
                    </Box>

                    {/* Menu items for large screens */}
                    <Box display={{ xs: 'none', md: 'flex' }} gap={3} alignItems="center">
                        <Typography variant="body1" component="span">
                            HOME
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="body1" component="span">
                            BOOKS
                        </Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography variant="body1" component="span">
                            NEW RELEASE
                        </Typography>
                    </Box>

                    {/* Icons on the right side for large screens */}
                    <Box display={{ xs: 'none', md: 'flex' }} gap={2}>
                        <IconButton color="primary">
                            <PersonIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <ShoppingBagIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="primary">
                            <ExitToAppIcon />
                        </IconButton>
                    </Box>
                    {/* Hamburger menu icon for small screens */}
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Drawer for small screens */}
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <List>
                        {/* Menu items */}
                        <ListItem >
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="Books" />
                        </ListItem>
                        <ListItem >
                            <ListItemText primary="New Release" />
                        </ListItem>
                        <Divider />
                        {/* Icons */}
                        <ListItem sx={{
                            justifyContent: 'space-between',
                            textAlign: 'center',
                            mt:'12px'
                        }} alignItems='center'>
                            <ListItemIcon sx={{
                                justifyContent: 'center'
                            }}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemIcon sx={{
                                justifyContent: 'center'
                            }}>
                                <FavoriteIcon />
                            </ListItemIcon>
                            <ListItemIcon sx={{
                                justifyContent: 'center'
                            }}>
                                <ExitToAppIcon />
                            </ListItemIcon>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default MyNavBar;

