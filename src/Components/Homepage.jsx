import React, { useState } from 'react'
import {
    Card, CardContent, Box, styled, Button, Menu, MenuItem, Fade, Typography,
    Slide,
} from '@mui/material'
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
import { Avatar, InputBase, Toolbar, IconButton, Tooltip, } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectDish } from './FEATURES/DishesSlice';

//// Search Box..//
import SearchIcon from '@mui/icons-material/Search';
import zIndex from '@mui/material/styles/zIndex';
import DishesOrdering from './DishesOrdering';
import { Link } from 'react-router-dom';
import PopOverPage from './PopOverPage';

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

const DivContainer = styled('div')({
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const CardWrapper = styled(Card)({
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: '15px',
});

// Side-Bar...//
const SideBar = styled(CardContent)({
    width: '5%',
    backgroundColor: '#1F1D2B',
});

const SideBarIcons = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const Icon = styled('div')(({ theme }) => ({
    color: '#EA6969',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f97f7f',
        color: 'white',
        padding: 10,
        borderRadius: '5px',
    },
}));

const IconLink = styled(Link)(({ theme }) => ({
    color: '#EA6969',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#f97f7f',
        color: 'white',
        borderRadius: '5px',
    },
}));

// Main Bar...//
const MainBar = styled(CardContent)({
    backgroundColor: '#393C49',
    width: '60%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const MainBarChildren = styled('div')({
    width: '98%',
    height: '100%',
    backgroundColor: '#393C49',
});

const NavBar1 = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const NavBar2 = styled('ul')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 12,
    paddingBottom: '20px',
    borderBottom: '1px solid #555a70',
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
}));

const NavItem = styled('li')({
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
        backgroundColor: '#EA6969',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
        transform: 'scaleX(1)',
    },
});

const NavLink = styled('a')(({ theme }) => ({
    '&:hover': {
        color: '#EA6969',
    },
}));

const UserName = styled('div')({
    display: 'flex',
});

const UserTypo = styled(Typography)({
    display: 'grid',
    flexDirection: 'column',
    color: 'white',
});

const Search = styled('div')(({ theme }) => ({
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
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
    color: '#c9cdce',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const NavBar3 = styled('div')({
    paddingTop: '5px',
    paddingBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const ChooseDishTypo = styled(Typography)({
    color: 'white',
    fontFamily: 'Quicksand',
    fontWeight: '500',
});

const DineInIcon = styled('div')({
    transition: 'transform 0.5s ease',
});

const DineInButton = styled(Button)({
    textTransform: 'none',
    backgroundColor: '#1F1D2B',
    padding: '4px 3px',
    border: '0.1px solid #c9cdce',
    '&:hover': {
        backgroundColor: '#393C49',
    },
    '&:focus $dineInIcon': {
        transform: 'rotate(180deg)',
    },
});

const DineInMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: '12px',
    fontFamily: 'Quicksand',
    '&:hover': {
        backgroundColor: '#393C49',
        color: 'white',
        borderRadius: '3px',
        padding: theme.spacing(1, 2),
    },
}));

const DishesWrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    textAlign: 'center',
    justifyContent: 'space-between',
    height: '55%',
    overflowY: 'scroll',
    borderBottom: '1px solid #555a70',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    '@media (max-width: 450px)': {
        height: '45%',
    },
    
});

const DishCard = styled(Card)({
    width: '23%',
    '@media (max-width: 600px)': {
        width: '30%',
    },
    '@media (max-width: 450px)': {
        width: '100%',
    },
    backgroundColor: '#1F1D2B',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '20px',
    cursor: 'pointer',
});

const DishImg = styled('img')({
    width: '100px',
    height: '100px',
    '@media (max-width: 600px)': {
        width: '80px',
        height: '80px',
    },
    '@media (max-width: 400px)': {
        width: '60px',
        height: '60px',
    },
});

//Right Bar...//
const RightBar = styled(CardContent)({
    width: '35%',
    backgroundColor: '#1F1D2B',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    position: 'relative',
});

const RightBarChildren = styled('div')({
    width: '100%',
});

const OrderBtnWrapper = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    paddingTop: '15px',
    '@media (max-width: 450px)': {
        gap: '12px'
    }
});

const OrderBtn = styled(Button)(({ theme }) => ({
    fontFamily: 'Quicksand',
    fontWeight: '600',
    textTransform: 'none',
    border: '1px solid #EA6969',
    borderRadius: '10px',
    padding: theme.spacing(1),
    color: '#EA6969',
    '&:hover': {
        backgroundColor: '#f97f7f',
        color: 'white',
        border: 'none',
    },
    '&:focus': {
        backgroundColor: '#EA6969',
        color: 'white',
        border: '1px solid #555a70',
    },
}));

const PaymentWrapper = styled('div')({
    width: '90%',
    position: 'absolute',
    bottom: 30,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    // paddingTop: '0.5rem',
    marginBottom: '25px',
    gap: '10px',
    '@media (max-width: 600px)': {
        fontSize: '12px',
        padding: '8px',
    },
    '@media (max-width: 450px)': {
        fontSize: '10px',
        padding: '6px',
        gap: '10px',
    },
});

const DiscountSubTotal = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginBottom: '5px',
    gap: '10px',
    '@media (max-width: 450px)': {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        fontSize: '10px',
        gap: '10px',
    },
});

const Discount = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '&::-webkit-scrollbar': {
        display: 'none !important',
    },
    '@media (max-width: 450px)': {
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '0px',
        width: '60%',
    },
});

const SubTotal = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '&::-webkit-scrollbar': {
        display: 'none !important',
    },
    '@media (max-width: 450px)': {
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '0px',
        width: '60%',
    },
});

// const BtnPayNow = styled('button')(({ theme }) => ({
//     width: '100%',
//     padding: theme.spacing(1),
//     border: 'none',
//     borderRadius: '10px',
//     color: 'white',
//     fontFamily: 'Quicksand',
//     fontWeight: '700',
//     backgroundColor: '#EA6969',
//     textTransform: 'none',
//     '&:hover': {
//         backgroundColor: '#f97f7f',
//     },
// }));


const Homepage = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [expandedDishName, setExpandedDishName] = useState(null);

    const [selectedDishes, setSelectedDishes] = useState([]);
    // text field
    const [name, setName] = React.useState('');

    // MAIN-BAR....//
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

    //Redux......
    const dispatch = useDispatch();
    const dishesData = useSelector((state) => state.dishes.dishes || []);
    console.log(dishesData);

    if (!dishesData || dishesData.length === 0) {
        return <div> No dishes available. Please add some dishes</div>
    }
    const isLoading = useSelector((state) => state.dishes.isLoading);
    const isError = useSelector((state) => state.dishes.isError);

    if (isLoading) {
        return <div>Loading dishes...</div>;
    }

    if (isError) {
        return <div>Error loading dishes. Please try again.</div>;
    }

    //SELECTED DISH TO ORDER...//
    const handleSelectDish = (dish) => {
        console.log(`Dish Selected: ${dish.name}, Units Available: ${dish.unitAvailable}`);

        dispatch(selectDish(dish));
        setSelectedDishes(prevDishes => [...prevDishes, dish]);

        // if (dish.unitAvailable > 0) {
        //     dispatch(selectDish(dish)); // Dispatch the dish to reduce unitAvailable and add to selectedDishes
        //     setSelectedDishes(prevDishes => [...prevDishes, dish]); // Add to local state without modifying unitAvailable
        // } else {
        //     alert('No more units available for this dish');
        // }

        // if (dish.unitAvailable > 0) {
        //     dispatch(selectDish(dish));
        // } else {
        //     alert('No more units available for this dish')
        // }
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


    //OVERLAY COMPONENT....//
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    //Open Overlay Visibility..//
    const openOverlay = () => {
        setIsOverlayVisible(true);
        // dispatch());
        // console.log("SHOW SLIDE IS TRUE");
    };
    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };


    return (
        <DivContainer>
            <CardWrapper>

                {/* SIDE-BAR */}
                <SideBar>
                    <SideBarIcons>
                        <Icon><StorefrontIcon /></Icon>
                        <Icon>
                            <IconLink to="/"><HomeOutlinedIcon /></IconLink>
                        </Icon>
                        <Icon><RamenDiningOutlinedIcon /></Icon>
                        <Icon>
                            <IconLink to="/dashboard"><DashboardCustomizeOutlinedIcon /></IconLink>
                        </Icon>
                        <Icon> <EmailOutlinedIcon /></Icon>
                        <Icon><NotificationsNoneOutlinedIcon /></Icon>
                        <Icon>
                            <IconLink to="/settings"><SettingsOutlinedIcon />
                            </IconLink></Icon>
                        <Icon><ExitToAppOutlinedIcon /></Icon>
                    </SideBarIcons>
                </SideBar>

                {/* MAIN BAR */}
                <MainBar>
                    <MainBarChildren>
                        <NavBar1>
                            <UserName>
                                <SoupKitchenOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: '55px', color: 'whitesmoke' }} />
                                <div>
                                    <UserTypo sx={{
                                        fontSize: {
                                            xs: '14px',
                                            sm: '17px',
                                            md: '18px',
                                            lg: '25px',
                                            xl: '24px',
                                        },
                                        fontWeight: {
                                            xs: 'bold',
                                        },
                                        color: {
                                            xs: '#EA6969'
                                        },
                                        letterSpacing: '.1rem'
                                    }}>
                                        Stackbite's Kitchen
                                    </UserTypo>
                                    <div>
                                        <DigitalClock />
                                    </div>
                                </div>
                            </UserName>
                            <div>
                                <Search>
                                    <SearchIconWrapper>
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search for food,cofee e.t.c.."
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
                        </NavBar1>

                        <div>
                            <NavBar2>
                                <NavItem><NavLink href="#">Hot Dishes</NavLink></NavItem>
                                <NavItem><NavLink href="#">Cold Dishes</NavLink></NavItem>
                                <NavItem><NavLink href="#">Soup</NavLink></NavItem>
                                <NavItem><NavLink href="#">Grill</NavLink></NavItem>
                                <NavItem><NavLink href="#">Appetizer</NavLink></NavItem>
                                <NavItem><NavLink href="#">Dessert</NavLink></NavItem>
                            </NavBar2>
                        </div>

                        <NavBar3>
                            <div>
                                <ChooseDishTypo sx={{ fontSize: '18px' }}>
                                    Choose Dishes
                                </ChooseDishTypo>
                            </div>
                            <div>
                                <DineInButton
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Quicksand', display: 'flex', alignItems: 'center', gap: '3px', padding: '0px 5px' }}>
                                        <DineInIcon>
                                            <KeyboardArrowDownIcon />
                                        </DineInIcon>
                                        Dine in
                                    </Typography>
                                </DineInButton>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    sx={{ width: '120px', }}
                                >
                                    <DineInMenuItem onClick={handleClose}>Profile</DineInMenuItem>
                                    <DineInMenuItem onClick={handleClose}>My account</DineInMenuItem>
                                    <DineInMenuItem onClick={handleClose}>Logout</DineInMenuItem>
                                </Menu>
                            </div>
                        </NavBar3>

                        {/* Choose Dishes Menu */}
                        <DishesWrapper>
                            {isLoading ? (
                                <Typography>Loading...</Typography>
                            ) : isError ? (
                                <Typography>Error loading dishes</Typography>
                            ) : (
                                dishesData && dishesData.map((dish) => (
                                    <DishCard key={dish.id} onClick={() => handleSelectDish(dish)} >
                                        <DishImg src={dish.imgSrc} alt={dish.name}
                                        />
                                        <Typography sx={{ fontFamily: 'Quicksand', fontWeight: '500', color: 'white', }}>
                                            {dish.name}
                                        </Typography>
                                        <span>
                                            <Typography sx={{ fontFamily: 'Quicksand', color: 'whitesmoke', }}>
                                                {dish.price}
                                            </Typography>
                                        </span>
                                        <span>
                                            <Typography sx={{ fontFamily: 'Quicksand', color: '#b5b8b9', fontSize: '13px' }}>
                                                {dish.unitAvailable}
                                            </Typography>
                                        </span>
                                    </DishCard>
                                ))
                            )}
                        </DishesWrapper>
                    </MainBarChildren>
                </MainBar>

                {/* RIGHT-BAR */}
                <RightBar>
                    <RightBarChildren>
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
                        <OrderBtnWrapper>
                            <OrderBtn variant="outlined" href="#outlined-buttons">
                                Dine In
                            </OrderBtn>
                            <OrderBtn variant="outlined" href="#outlined-buttons">
                                To Go
                            </OrderBtn>
                            <OrderBtn variant="outlined" href="#outlined-buttons">
                                Delivery
                            </OrderBtn>
                        </OrderBtnWrapper>

                        {/* Dishes-Ordering Component */}
                        <DishesOrdering
                            // dishes={dishesData}
                            selectedDishes={selectedDishes}
                            handleTextboxChange={handleTextboxChange}
                            handleDishName={handleDishName}
                            expandedDishName={expandedDishName}
                        />

                        {/* Payment Wrapper */}
                        <PaymentWrapper >
                            <DiscountSubTotal>

                                <Discount>
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
                                            '@media (max-width: 450px)': {
                                                fontSize: '12px !important',
                                            },
                                        }}>
                                            $0
                                        </Typography>
                                    </span>
                                </Discount>

                                <SubTotal>
                                    <Typography
                                        sx={{
                                            fontSize: '15px',
                                            fontFamily: 'Quicksand',
                                            color: '#b5b8b9',
                                            '@media (max-width: 600px)': {
                                                fontSize: '12px',
                                            },
                                            '@media (max-width: 450px)': {
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
                                </SubTotal>

                            </DiscountSubTotal>

                            <Button onClick={openOverlay}
                                sx={{
                                    backgroundColor: '#f97f7f',
                                    borderRadius: '10px',
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
                                    '@media (max-width: 480px)': {
                                        width: '60%',
                                        fontSize: '10px',
                                        padding: '5px',
                                    },
                                }}>
                                Continue to Payment
                            </Button>
                        </PaymentWrapper>
                    </RightBarChildren>
                </RightBar>

                {/* Pop Over Page Component... */}
                {isOverlayVisible && (
                    <PopOverPage
                        selectedDishes={selectedDishes}
                        onClose={closeOverlay}
                    />
                )}

            </CardWrapper>
        </DivContainer>
    )
}

export default Homepage