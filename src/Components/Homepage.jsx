import React, { useState } from 'react'
import {
    Card, CardContent, Box, styled, Button, Menu, MenuItem, Fade, Typography,
} from '@mui/material'
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
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import DigitalClock from './DIGITAL-CLOCK/DigitalClock'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, InputBase, Toolbar, IconButton, Tooltip,  } from '@mui/material'
//// Search Box..//
import SearchIcon from '@mui/icons-material/Search';
import zIndex from '@mui/material/styles/zIndex';
import DishesOrdering from './DishesOrdering';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function createData(item, amount, quantity, price, textboxValue) {
    return { item, amount, quantity, price, textboxValue };
}
const dishes = [
    {
        imgSrc: 'DishImages/img1.png',
        name: 'Salted Pasta Seasoning',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '3',
        totalPrice: '$10.26',
    },
    {
        imgSrc: 'DishImages/img2.png',
        name: 'Ice cream sandwich',
        price: '$1.06',
        unitAvailable: '10 Bowls Available',
        quantity: '6',
        totalPrice: '$20.56',
    },
    {
        imgSrc: 'DishImages/img3.png',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '5 Bowls Available',
        quantity: '9',
        totalPrice: '$105.50',
    },
    {
        imgSrc: 'DishImages/img4.png',
        name: 'Fresh Youghout',
        price: '$3.33',
        unitAvailable: '4 Bowls Available',
        quantity: '2',
        totalPrice: '$20.89',
    },
    {
        imgSrc: 'DishImages/img5.png',
        name: 'Salted pasta with assorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '35',
        totalPrice: '$70.00',
    },
    {
        imgSrc: 'DishImages/img6.png',
        name: 'Instant Noodles with egg',
        price: '$10.33',
        unitAvailable: '10 Bowls Available',
        quantity: '1',
        totalPrice: '$10.56',
    },
    {
        imgSrc: 'DishImages/img1.png',
        name: 'Salted Pasta Seasoning',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '120',
        totalPrice: '$490.45',
    },
    {
        imgSrc: 'DishImages/img2.png',
        name: 'Ice cream sandwich',
        price: '$1.06',
        unitAvailable: '3 Bowls Available',
        quantity: '3',
        totalPrice: '$23.11',
    },
    {
        imgSrc: 'DishImages/img3.png',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '10 Bowls Available',
        quantity: '25',
        totalPrice: '$24.33',
    },
    {
        imgSrc: 'DishImages/img4.png',
        name: 'Fresh Youghout',
        price: '$3.33',
        unitAvailable: '20 Bowl Available',
        quantity: '3',
        totalPrice: '$10.11',
    },
    {
        imgSrc: 'DishImages/img5.png',
        name: 'Salted pasta with assorted meat',
        price: '$2.33',
        unitAvailable: '20 Bowl Available',
        quantity: '10',
        totalPrice: '$4.76',
    },
    {
        imgSrc: 'DishImages/img5.png',
        name: 'Salted pasta with assorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '11',
        totalPrice: '$22.33',
    },
];

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
        height: '100vh',
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
            backgroundColor: '#f97f7f',
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
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: 12,
        paddingBottom: '20px',
        borderBottom: '1px solid #555a70 !important',
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
        border: '1px solid #555a70',
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
    navBar3: {
        paddingTop: '5px',
        paddingBottom: '15px',
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
        '&:focus $dineInIcon': {
            transform: 'rotate(180deg)',
        },
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
    dishesWrapper: {
        display: 'flex !important',
        flexWrap: 'wrap',
        gap: '30px',
        textAlign: 'center',
        justifyContent: 'space-between',
        height: '25%',
        '@media (max-width: 400px)': {
            height: '15%'
        },
        overflowY: 'scroll !important',
        borderBottom: '1px solid #555a70',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    dishCard: {
        width: '23%',
        '@media (max-width: 600px)': {
            width: '30%'
        },
        '@media (max-width: 400px)': {
            width: '60%'
        },
        backgroundColor: '#1F1D2B !important',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '20px !important',
        cursor: 'pointer',
    },
    dishImg: {
        width: '100px !important',
        height: '100px !important',
        '@media (max-width: 600px)': {
            width: '80px',
            height: '80px'
        },
        '@media (max-width: 400px)': {
            width: '60px',
            height: '60px'
        }
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
        width: '100% !important',
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
        border: '1px solid #EA6969 !important',
        borderRadius: '10px !important',
        padding: theme.spacing(1),
        color: '#EA6969 !important',
        '&:hover': {
            backgroundColor: '#f97f7f !important',
            color: 'white !important',
            border: 'none !important',
        },
        '&:focus': {
            backgroundColor: '#EA6969 !important',
            color: 'white !important',
            border: '1px solid #555a70',
        },
    },
    dishesOrdering: {
        height: '13.5% !important',
        width: '100%',
        paddingTop: '10px',
    },
    tableContainer: {
        height: '100%',
        overflowY: 'scroll',
        border: 'none !important',
        borderBottom: '1px solid #555a70',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    table: {
        width: '100% !important',
        borderCollapse: 'collapse !imporant'
    },
    // TABLE HEADER..//
    tableHead: {
        width: '100% !important',
        position: 'sticky !important',
        top: '0',
        backgroundColor: '#1F1D2B !important',
        zIndex: '1',
        border: 'none !important',

        '& .MuiTableCell-root': {
            position: 'sticky',
            color: '#fff !important',
            borderBottom: '1px solid #555a70 !important',
        },
    },
    tableHeadRow: {
        width: '100% !important',
    },
    itemCell: {
        width: '100% !important',
        paddingLeft: '0 !important',
    },
    quantityCell: {
        width: '100% !important',
    },
    totalPriceCell: {
        width: '100% !important',
        paddingRight: '0 !important'
    },

    // TABLE BODY...//
    tableBody: {
        width: '100% !important',
        backgroundColor: '#1F1D2B !important',
        borderBottom: '1px solid #555a70 !important',
        // border: 'none !important',
        '& .MuiTableCell-root': {
            color: '#c9cdce !important',
            borderBottom: 'none !important',
        },
    },
    tableBodyRow: {
        width: '100% !important',
        padding: '0 !important',
        margin: '0 !important',
    },
    tableBodyItemCell: {
        // width: '94% !important',
        paddingLeft: '0 !important',
        padding: '4px 8px !important',
    },
    dishImgOrdering: {
        width: '40px',
        height: '40px',
    },
    tableBodyQuantityCell: {
        width: '100% !important',
        padding: '4px 8px !important',
    },
    tableBodyTotalPriceCell: {
        width: '100% !important',
        paddingRight: '0 !important',
        padding: '4px 8px !important',
    },
    textFieldRow: {
        width: '100% !important',
        padding: '0px !important',
        marginTop: '0px !important',
    },
    textFieldCell: {
        paddingLeft: '0 !important',
        width: '100%',
        paddingTop: '14px !important',
        paddingBottom: '30px !important',
    },
    textField: {
        width: '100%',
    },
    truncateText: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        maxWidth: '150px',
    },
    fullText: {
        cursor: 'pointer',
        maxWidth: '150px',
    },
    deleteBtnCell: {
        width: '100% !important',
        paddingTop: '14px !important',
        paddingRight: '0 !important',
        paddingBottom: '30px !important',
    },
    deleteBtn: {
        border: '1px solid #EA6969 !important',
        borderRadius: '10px !important',
        padding: theme.spacing(1),
        color: '#EA6969 !important',
        '&:hover': {
            backgroundColor: '#f97f7f !important',
            color: 'white !important',
            border: 'none !important',
        },
        '&:focus': {
            backgroundColor: '#EA6969 !important',
            color: 'white !important',
            border: '1px solid #555a70',
        },
    },
    paymentWrapper: {
        display: 'flex',
        flexWrap: 'wrap !important',
        flexDirection: 'column',
        gap: '10px',
        '@media (max-width: 600px)': {
            fontSize: '12px',
            padding: '8px',
        },
        '@media (max-width: 400px)': {
            fontSize: '10px',
            padding: '6px',
        },
    },
    discount: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    subTotal: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
}));

const Homepage = () => {
    const classes = useStyles();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [expandedDishName, setExpandedDishName] = useState(null);
    // text field
    const [name, setName] = React.useState('');

    // MAIN-BAR...//
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

    // RIGHT BAR...//
    const handleTextboxChange = (index) => (event) => {
        const newRows = [...rows];
        newRows[index].textboxValue = event.target.value;
        setRows(newRows);
    };
    // Handle Truncating of the DishName...//
    const handleDishName = (index) => {
        setExpandedDishName(index === expandedDishName ? null : index);
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
                            {
                                dishes.map((dish, index) => (
                                    <Card key={index} className={classes.dishCard}>
                                        <img src={dish.imgSrc} alt={dish.name}
                                            className={classes.dishImg}
                                        />
                                        <Typography className={classes.dishName} sx={{ fontFamily: 'Quicksand', fontWeight: '500', color: 'white', }}>
                                            {dish.name}
                                        </Typography>
                                        <span>
                                            <Typography className={classes.dishPrice} sx={{ fontFamily: 'Quicksand', color: 'white', }}>
                                                {dish.price}
                                            </Typography>
                                        </span>
                                        <span>
                                            <Typography className={classes.dishPrice} sx={{ fontFamily: 'Quicksand', color: '#b5b8b9', fontSize: '13px' }}>
                                                {dish.unitAvailable}
                                            </Typography>
                                        </span>
                                    </Card>
                                ))
                            }
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

                        {/* Dishes-Ordering */}
                        <DishesOrdering
                            dishes={dishes}
                            handleTextboxChange={handleTextboxChange}
                            handleDishName={handleDishName}
                            expandedDishName={expandedDishName}
                        />

                        {/* Payment Wrapper */}
                        <div className={classes.paymentWrapper} sx={{ border: '1px solid red', backgroundColor: 'red', paddingTop: '20px' }}>
                            <div className={classes.discount}>
                                <Typography sx={{
                                    fontSize: '15px',
                                    fontFamily: 'Quicksand',
                                    color: '#b5b8b9',
                                    '@media (max-width: 600px)': {
                                        fontSize: '12px',
                                    },
                                    '@media (max-width: 400px)': {
                                        fontSize: '12px !important',
                                    },
                                }}>
                                    Discount
                                </Typography>
                                <span>
                                    <Typography sx={{
                                        fontSize: '17px',
                                        fontFamily: 'Quicksand',
                                        color: 'white',
                                        '@media (max-width: 600px)': {
                                            fontSize: '12px',
                                        },
                                        '@media (max-width: 400px)': {
                                            fontSize: '12px !important',
                                        },
                                    }}>
                                        $0
                                    </Typography>
                                </span>
                            </div>
                            <div className={classes.subTotal}>
                                <Typography
                                    sx={{
                                        fontSize: '15px',
                                        fontFamily: 'Quicksand',
                                        color: '#b5b8b9',
                                        '@media (max-width: 600px)': {
                                            fontSize: '12px',
                                        },
                                        '@media (max-width: 400px)': {
                                            fontSize: '12px !important',
                                        },
                                    }}>
                                    Sub total
                                </Typography>
                                <span>
                                    <Typography sx={{
                                        fontSize: '17px',
                                        fontFamily: 'Quicksand',
                                        color: 'white',
                                        '@media (max-width: 600px)': {
                                            fontSize: '12px',
                                        },
                                        '@media (max-width: 400px)': {
                                            fontSize: '12px !important',
                                        },
                                    }}>
                                        $31.90
                                    </Typography>
                                </span>
                            </div>
                            <Button
                                sx={{
                                    backgroundColor: '#f97f7f',
                                    color: 'white',
                                    padding: '10px',
                                    textTransform: 'none',
                                    fontFamily: 'Quicksand',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    '@media (max-width: 600px)': {
                                        fontSize: '12px',
                                        padding: '8px',
                                    },
                                    '@media (max-width: 400px)': {
                                        width: '90%',
                                        fontSize: '10px',
                                        // padding: '1px',
                                        padding: '1px',
                                    },
                                }}>
                                Continue to Payment
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Homepage
