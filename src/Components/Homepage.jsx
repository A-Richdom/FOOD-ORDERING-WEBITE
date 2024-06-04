import React from 'react'
import { Card, CardContent, Box, Drawer, colors, styled, Button, Menu, MenuItem, Fade, } from '@mui/material'
import { makeStyles } from '@mui/styles'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

// Card Content 2..//
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import DigitalClock from './DIGITAL-CLOCK/DigitalClock'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import  from '../assets'

//// Search Box
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';




const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
        '&::placeholder': {
            color: '#c9cdce',
            opacity: 1,
            fontSize: '14px',
        },
    },

}));


const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        width: '100%',
        height: '95vh',
        display: 'flex',
        backgroundColor: 'transparent !important'
    },
    // Side-Bar...//
    sideBar: {
        width: '5%',
        backgroundColor: '#1F1D2B',
    },
    sideBarIcons: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        color: '#EA6969',
        fontSize: '40px',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#EA6969',
            color: 'white',
            padding: 10,
            borderRadius: '5px',
        },
    },
    // Main Bar...//
    mainBar: {
        backgroundColor: '#393C49 !important',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainBarChildren: {
        width: '98%',
        backgroundColor: '#393C49',
    },
    navBar1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navBar2: {
        display: 'flex',
        flexWrap: 'wra',
        listStyle: 'none',
        padding: 12,
        '& li': {
            marginRight: theme.spacing(6),
            '& a': {
                color: 'white',
                textDecoration: 'none',
                fontFamily: 'Quicksand',
                '&:hover': {
                    color: '#EA6969',
                },
            },
        },
    },
    navItem: {
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',

            marginBottom: '-5px',
            backgroundColor: '#EA6969 !important',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
        },
        '&:hover::after': {
            transform: 'scaleX(1)',
        },
    },
    navLink: {
        '&:hover': {
            color: '#EA6969',
        },
    },
    userName: {
        display: 'flex',
    },
    userTypo: {
        display: 'grid',
        flexDirection: 'column',
        color: 'white',
    },
    search: {
        position: 'relative',
        border: '1px solid #555a70;',
        borderRadius: '10px',
        backgroundColor: '#474b5d',
        '&:hover': {
            backgroundColor: '#1F1D2B',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        }
    },
    searchIconWrapper: {
        padding: theme.spacing(0, 1),
        color: '#c9cdce',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hrLine: {
        height: '0.1px',
        width: '100%',
        backgroundColor: '#25272d !important',
        // backgroundColor: '#393C49 !important',
    },
    navBar3: {
        paddingTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    chooseDishTypo: {
        color: 'white',
        fontFamily: 'Quicksand',
        fontWeight: '500 !important'
    },
    dineInIcon: {
        transition: 'transform 0.5s ease !important',
    },
    dineInButton: {
        textTransform: 'none !important',
        backgroundColor: '#1F1D2B !important',
        padding: '4px 3px !important',
        border: '0.1px solid #c9cdce !important',
        '&:hover': {
            backgroundColor: '#393C49 !important'
        },
        '&:hover $dineInIcon': {
            transform: 'rotate(180deg)',
        },
        '&:focus $dineInIcon': {
            transform: 'rotate(180deg)'
        }
    },
    dineInItem: {
        fontSize: '12px !important',
        fontFamily: 'Quicksand',
        '&:hover': {
            backgroundColor: '#393C49 !important',
            color: 'white',
            borderRadius: '3px',
            padding: theme.spacing(1, 2)
        },
    },
    dishCard: {
        width: '30%',
        height: '100%',
        backgroundColor: '#1F1D2B !important',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Right Bar...//
    rightBar: {
        width: '35%',
        backgroundColor: '#1F1D2B !important',
        display: 'flex !important',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightBarChildren: {
        width: '94%',
        border: '1px solid red'
    },
    orderBtnWrapper: {
        display: 'flex !important',
        flexWrap: 'wrap !important',
        gap: '8px !important',
        paddingTop: '20px'
    },
    orderBtn: {
        fontFamily: 'Quicksand !important',
        fontWeight: '600 !important',
        textTransform: 'none !important',
        border: '1px solid #c9cdce !important',
        borderRadius: '10px !important',
        padding: theme.spacing(1),
        color: '#EA6969 !important',
        '&:hover': {
            backgroundColor: '#EA6969 !important',
            color: 'white !important',
            border: 'none !important',
        },
        '&:focus': {
            backgroundColor: '#EA6969 !important',
            color: 'white !important',
            border: 'none !important'
        },

    },
    subHeader: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '30px',
        paddingBottom: '14px',
        alignItems: 'center !important',
        justifyContent: 'space-between',
    },
    subHeaderChildren: {
        display: 'flex',
        gap: '40px',
    },

}));



const Homepage = () => {
    const classes = useStyles();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    // Dine in Button Function
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



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
                <CardContent className={classes.sideBar}>

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

                {/* MAIN BAR */}
                <CardContent className={classes.mainBar}>
                    <div className={classes.mainBarChildren}>
                        <div className={classes.navBar1}>

                            <div className={classes.userName}>
                                <SoupKitchenOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '55px', color: 'whitesmoke' }} />

                                <div>
                                    <Typography className={classes.userTypo} sx={{
                                        fontSize: {
                                            xs: '14px',
                                            sm: '16px',
                                            md: '18px',
                                            lg: '25px',
                                            xl: '24px',
                                        },
                                        letterSpacing: '.1rem'
                                    }}>
                                        A-Richdom
                                    </Typography>

                                    <div>
                                        <DigitalClock />
                                    </div>
                                </div>

                            </div>

                            <div>
                                <div className={classes.search} >
                                    <div className={classes.searchIconWrapper}>
                                        <SearchIcon />
                                    </div>
                                    <StyledInputBase className={classes.searchInputBase}
                                        placeholder="Search for food,cofee e.t.c.."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
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

                        <div className={classes.navBar2Wrapper}>
                            <ul className={classes.navBar2}>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Hot Dishes</a></li>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Cold Dishes</a></li>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Soup</a></li>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Grill</a></li>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Appetizer</a></li>
                                <li className={classes.navItem}><a href="" className={classes.navLink}>Dessert</a></li>
                            </ul>
                        </div>
                        <hr className={classes.hrLine} />

                        <div className={classes.navBar3}>
                            <div>
                                <Typography className={classes.chooseDishTypo} sx={{ fontSize: '18px' }}>
                                    Choose Dishes
                                </Typography>
                            </div>
                            <div>
                                <Button
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className={classes.dineInButton}
                                >
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Quicksand', display: 'flex', alignItems: 'center', gap: '3px', padding: '0px 5px' }}>
                                        <KeyboardArrowDownIcon className={classes.dineInIcon} />
                                        Dine in
                                    </Typography>
                                </Button>

                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    className={classes.dineInList}
                                    sx={{ width: '120px', }}
                                >
                                    <MenuItem onClick={handleClose} className={classes.dineInItem}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose} className={classes.dineInItem}>My account</MenuItem>
                                    <MenuItem onClick={handleClose} className={classes.dineInItem}>Logout</MenuItem>
                                </Menu>
                            </div>
                        </div>

                        {/* Choose Dishes Menu */}
                        <div className={classes.dishesWrapper}>
                            <Card className={classes.dishCard}>

                                <img src="" alt="" />
                                <Typography className={classes.dishName} sx={{ fontFamily: 'Quicksand', color: 'white', }}>eyetetette</Typography>

                                <span><Typography className={classes.dishPrice} sx={{ fontFamily: 'Quicksand', color: 'white', }}>$2.67</Typography></span>

                            </Card>
                        </div>

                    </div>
                </CardContent>

                {/* RIGHT-BAR */}
                <CardContent className={classes.rightBar}>
                    <div className={classes.rightBarChildren}>

                        <Typography sx={{
                            fontSize: {
                                xs: '14px',
                                sm: '16px',
                                md: '18px',
                                lg: '25px',
                                xl: '24px',
                            },
                            fontWeight: '400',
                            color: 'white',
                        }}>
                            Orders #23244
                        </Typography>

                        <div className={classes.orderBtnWrapper}>
                            <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                                Dine In
                            </Button>
                            <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                                To Go
                            </Button>
                            <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                                Delivery
                            </Button>
                        </div>

                        <div className={classes.subHeader}>
                            <Typography sx={{
                                fontSize: '19px',
                                color: 'white'
                            }}>Item</Typography>

                            <div className={classes.subHeaderChildren}>
                                <Typography sx={{
                                    fontSize: '19px',
                                    color: 'white',
                                }}>Qty</Typography>
                                <Typography sx={{
                                    fontSize: '19px',
                                    color: 'white'
                                }}>Price</Typography>
                            </div>
                        </div>
                        <hr className={classes.hrLine} />

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Homepage