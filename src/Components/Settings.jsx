import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { Button, Card, CardContent, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addDish } from './FEATURES/DishesSlice';
import AddDishModal from './AddDishModal';


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
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainBarChildren: {
        width: '100%',
        backgroundColor: '#393C49',
    },
    header: {
        paddingBottom: '15px'
    },
    mainBarBodies: {
        display: 'flex !important',
        gap: '20px',
    },

    body1Content: {
        width: '100%',
        display: 'flex',
        gap: '6px',
        padding: '20px',
        paddingTop: '20px',
        paddingBottom: '20px',
        boxSizing: 'border-box',
        position: 'relative',
        '&:hover': {
            backgroundColor: '#54363B',
            '& svg': {
                color: '#EA6969',
            },
            '& p:first-of-type': {
                color: '#EA6969',
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '45%',
                backgroundColor: '#EA6969'
            }
        }
    },
    nav1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '10px',
        top: 0,
        zIndex: 1,
    },
    manageCategory: {
        display: 'flex',
        gap: '5px',
        color: 'white'
    },
    nav2Children: {
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
    dishesWrapper: {
        display: 'flex !important',
        flexWrap: 'wrap',
        gap: '20px',
        textAlign: 'center',
        justifyContent: 'space-around',
        height: '60%',
        '@media (max-width: 400px)': {
            height: '15%'
        },
        overflowY: 'scroll !important',
        // borderBottom: '1px solid #555a70',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    addNewDish: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '20%',
        border: '1px dashed #EA6969',
        '@media (max-width: 600px)': {
            width: '30%'
        },
        '@media (max-width: 400px)': {
            width: '60%'
        },
        backgroundColor: '#1F1D2B !important',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '20px !important',
    },
    dishCard: {
        width: '20%',
        border: '1px solid #555a70',
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
    priceQuantity: {
        display: 'flex !important',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
    },
    dishCardFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnsWrapper: {
        display: 'flex',
        gap: '10px',
        paddingTop: '30px'
    }

}));

const Settings = () => {
    const classes = useStyles();

    //Update State Using Redux..//
    const dispatch = useDispatch();
    const dishesData = useSelector((state) => state.dishes.dishes);
    console.log(dishesData);
    const isLoading = useSelector((state) => state.dishes.isLoading);
    const isError = useSelector((state) => state.dishes.isError);

    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleAddDish = (dish) => {
        dispatch(addDish(dish))
        handleCloseModal();
    };
        console.log(handleAddDish);
        
    return (
        <div className={classes.divContainer}>
            <Card className={classes.cardWrapper}>

                {/* SIDE-BAR */}
                <CardContent className={classes.sideBar}>
                    <div className={classes.sideBarIcons}>
                        <StorefrontIcon className={classes.icon} />
                        <Link to="/"><HomeOutlinedIcon className={classes.icon} /></Link>
                        <RamenDiningOutlinedIcon className={classes.icon} />
                        <Link to="/dashboard"><DashboardCustomizeOutlinedIcon className={classes.icon} /></Link>
                        <EmailOutlinedIcon className={classes.icon} />
                        <NotificationsNoneOutlinedIcon className={classes.icon} />
                        <Link to="/settings"><SettingsOutlinedIcon className={classes.icon} /></Link>
                        <ExitToAppOutlinedIcon className={classes.icon} />
                    </div>
                </CardContent>

                {/* MAIN-BAR */}
                <CardContent className={classes.mainBar}>
                    <div className={classes.mainBarChildren}>
                        <div className={classes.header}>
                            <Typography className={classes.headerTypo} sx={{
                                fontSize: {
                                    xs: '14px',
                                    sm: '16px',
                                    md: '18px',
                                    lg: '25px',
                                    xl: '24px',
                                },
                                letterSpacing: '.1rem',
                                color: 'white',
                            }}>
                                Settings
                            </Typography>
                        </div>

                        <div className={classes.mainBarBodies}>
                            <CardContent sx={{ width: '25%', height: '85.5vh', backgroundColor: '#1F1D2B', borderRadius: '8px', padding: '0' }}>
                                <div className={classes.body1Content}>
                                    <FavoriteBorderIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> Appearance </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Dark and Light mode, Font size</Typography>
                                    </div>
                                </div>
                                <div className={classes.body1Content}>
                                    <StorefrontIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> Your Restaurant </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Dark and Light mode, Font size</Typography>
                                    </div>
                                </div>
                                <div className={classes.body1Content}>
                                    <RamenDiningOutlinedIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> Products Management </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Mange your products, pricing etc</Typography>
                                    </div>
                                </div>
                                <div className={classes.body1Content}>
                                    <NotificationsNoneOutlinedIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> Notifications </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Customize your notifications</Typography>
                                    </div>
                                </div>
                                <div className={classes.body1Content}>
                                    <LockOpenOutlinedIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> Security </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Configure Password, PIN, etc</Typography>
                                    </div>
                                </div>
                                <div className={classes.body1Content}>
                                    <InfoOutlinedIcon sx={{ fontSize: '16px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '3px' }} />
                                    <div>
                                        <Typography sx={{
                                            fontSize: {
                                                xs: '12px',
                                                sm: '14px',
                                                md: '17px',
                                                lg: '14px',
                                                xl: '24px',
                                            },
                                            fontFamily: 'Quicksand',
                                            fontWeight: '500',
                                            color: 'white',
                                        }}> About Us </Typography>
                                        <Typography sx={{
                                            fontSize: '11px',
                                            fontFamily: 'Quicksand',
                                            color: '#c9cdce',
                                        }}>Find out more about us</Typography>
                                    </div>
                                </div>
                            </CardContent>

                            <CardContent sx={{ width: '80%', height: '78.5vh', backgroundColor: '#1F1D2B', borderRadius: '8px', justifyContent: 'center', }}>

                                <div className={classes.nav1}>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: '14px',
                                            sm: '16px',
                                            md: '18px',
                                            lg: '25px',
                                            xl: '24px',
                                        },
                                        letterSpacing: '.1rem',
                                        color: 'white',
                                    }}>Products Management
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        href="#outlined-buttons"
                                        sx={{
                                            minWidth: 'unset',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontFamily: 'Quicksand',
                                            border: '1px solid #393c49 !important',
                                            borderRadius: '10px !important',
                                            padding: '7px 12px !important',
                                            color: '#abbbc2 !important',
                                            transition: 'border 0.3s ease, background-color 0.3s ease, color 0.3s ease !important',
                                            '&:hover': {
                                                border: '1.4px solid #abbbc2 !important',
                                                backgroundColor: 'inherit !important',
                                                color: 'white !important',
                                            },
                                            '&:focus': {
                                                color: 'white !important',
                                                border: '1.4px solid #abbbc2 !important',
                                            },
                                        }}>
                                        <span className={classes.manageCategory}>
                                            <TuneOutlinedIcon />
                                            Manage Categories
                                        </span>
                                    </Button>

                                </div>

                                <div className={classes.nav2Wrapper}>
                                    <ul className={classes.nav2Children}>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Hot Dishes</a></li>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Cold Dishes</a></li>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Soup</a></li>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Grill</a></li>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Appetizer</a></li>
                                        <li className={classes.navItem}><a href="" className={classes.navLink}>Dessert</a></li>
                                    </ul>
                                </div>

                                {/* Choose Dishes Menu */}
                                <div className={classes.dishesWrapper}>

                                    {/* ADD NEW DISH */}
                                    <Card className={classes.addNewDish} onClick={handleOpenModal}>
                                        <div className={`${`rotating-dotted-line`}`}></div>

                                        <AddOutlinedIcon sx={{ fontFamily: 'Quicksand', fontSize: '30px', fontWeight: '500', color: '#EA6969', cursor: 'pointer', }} />
                                        <Typography sx={{ fontFamily: 'Quicksand', fontWeight: '600', color: '#EA6969', cursor: 'pointer', }}>Add new dish</Typography>
                                    </Card>

                                    {/* DISHES-ADDED */}
                                    {isLoading ? (
                                        <Typography>Loading...</Typography>
                                    ) : isError ? (
                                        <Typography>Error loading dishes</Typography>
                                    ) : (
                                        dishesData && dishesData.map((dish, index) => (
                                            <Card key={index} className={classes.dishCard} >
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
                                                    <Typography className={classes.dishUnit} sx={{ fontFamily: 'Quicksand', color: '#b5b8b9', fontSize: '13px' }}>
                                                        {dish.unitAvailable}
                                                    </Typography>
                                                </span>
                                                <div className={classes.dishCardFooter}>

                                                    <Button variant="outlined" sx={{
                                                        textTransform: 'none', color: 'white', fontFamily: 'Quicksand', fontSize: '14px', margin: '0px', paddingLeft: '10px', paddingRight: '10px', border: 'none',
                                                        '&:hover': {
                                                            border: 'none',
                                                            backgroundColor: '#54363B',
                                                            '& .MuiSvgIcon-root': {
                                                                color: 'white',
                                                            },
                                                            '& .MuiTypography-root': {
                                                                color: 'white',
                                                            },
                                                        },
                                                    }}>
                                                        <DriveFileRenameOutlineOutlinedIcon sx={{ fontSize: '18px', color: '#EA6969', marginRight: '5px', }} />
                                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '14px', fontWeight: 'bold', color: '#EA6969', cursor: 'pointer', }}>
                                                            Edit dish
                                                        </Typography>
                                                    </Button>
                                                </div>
                                            </Card>
                                        ))
                                    )}
                                </div>

                                <div className={classes.btnsWrapper}>
                                    <Button variant="outlined" sx={{
                                        textTransform: 'none', color: 'white', fontFamily: 'Quicksand', margin: '0px', paddingLeft: '30px', paddingRight: '30px', border: '1px solid #EA6969',
                                        '&:hover': {
                                            border: 'none',
                                            backgroundColor: '#EA6969',
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                            '& .MuiTypography-root': {
                                                color: 'white',
                                            },
                                        },
                                    }}>
                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '12px', fontWeight: '500', color: '#EA6969', cursor: 'pointer', }}>
                                            Cancel
                                        </Typography>
                                    </Button>
                                    <Button variant="outlined" sx={{
                                        textTransform: 'none', color: 'white', fontFamily: 'Quicksand', margin: '0px', paddingLeft: '20px', paddingRight: '20px', border: '1px solid #EA6969',
                                        '&:hover': {
                                            border: 'none',
                                            backgroundColor: '#EA6969',
                                            '& .MuiSvgIcon-root': {
                                                color: 'white',
                                            },
                                            '& .MuiTypography-root': {
                                                color: 'white',
                                            },
                                        },
                                    }}>
                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '12px', fontWeight: '500', color: '#EA6969', cursor: 'pointer', }}>
                                            Save Change
                                        </Typography>
                                    </Button></div>
                            </CardContent>
                        </div>

                    </div>
                </CardContent>
            </Card>
            <AddDishModal open={modalOpen} onClose={handleCloseModal} onAddDish={handleAddDish} />
        </div>
    )
}

export default Settings