import React from 'react'
import { Card, CardContent, Container, Drawer, styled } from '@mui/material'
import { makeStyles } from '@mui/styles'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

// Caed Content 2..//
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDi ningOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import DigitalClock from './DIGITAL-CLOCK/DigitalClock'

//// Search Box
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
// import { Search } from '@mui/icons-material';




const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'grey',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        width: '100%',
        height: '95vh',
        display: 'flex',
    },
    cardContent1: {
        width: '5%',
        backgroundColor: '#1F1D2B',
    },
    cardContent2: {
        width: '60%',
        backgroundColor: '#393C49',
    },
    navBar1: {
        display: 'flex',
        // alignItems: 'center',
    },
    userName: {
        display: 'flex',

    },
    userTypo: {
        display: 'grid',
        flexDirection: 'column',
        color: 'white',
    },
    cardContent3: {
        width: '35%',
        backgroundColor: '#1F1D2B',
    },
    sideBarIcons: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        color: 'EA7C69',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        color: '#EA6969',
        fontSize: '40px',
        fontWeight: 'bold',
    },


}));

const Homepage = () => {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className={classes.divContainer}>
            <Card className={classes.cardWrapper}>

                {/* SIDE-BAR */}
                <CardContent className={classes.cardContent1}>

                    <div className={classes.sideBarIcons}>
                        <StorefrontIcon className={classes.icon} />
                        <HomeOutlinedIcon className={classes.icon} />
                        <RamenDiningOutlinedIcon className={classes.icon} />
                        <DashboardCustomizeOutlinedIcon className={classes.icon} />
                        <EmailOutlinedIcon className={classes.icon} />
                        <NotificationsNoneOutlinedIcon className={classes.icon} />
                        <SettingsOutlinedIcon className={classes.icon} />
                        <ExitToAppOutlinedIcon className={classes.icon} />
                    </div>

                </CardContent>

                {/* MENU BAR */}
                <CardContent className={classes.cardContent2}>
                    <div className={classes.navBar1}>

                        <div className={classes.userName}>
                            <SoupKitchenOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '50px', color: 'whitesmoke' }} />

                            <div>
                                <Typography className={classes.userTypo} style={{ fontSize: '30px', letterSpacing: '.1rem', }}>
                                    A-Richdom
                                </Typography>

                                <div>
                                    <DigitalClock />
                                </div>
                            </div>

                        </div>

                        <div>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                        </div>

                        <div>
                            <Toolbar disableGutters>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>

                            </Toolbar>
                        </div>


                    </div>






                    <AppBar position="static">
                        <Container maxWidth="xl">

                        </Container>
                    </AppBar>

                </CardContent>

                {/* RIGHT-BAR */}
                <CardContent className={classes.cardContent3}>

                </CardContent>
            </Card>
        </div>
    )
}

export default Homepage