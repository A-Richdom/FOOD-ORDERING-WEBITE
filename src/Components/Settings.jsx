import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
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
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from 'react-router-dom';
import DigitalClock from './DIGITAL-CLOCK/DigitalClock';
import { useDispatch, useSelector } from 'react-redux';
import { addDish, deleteDish, editDish } from './FEATURES/DishesSlice';
import AddDishModal from './AddDishModal';
import LoadingModal from './LoadingModal';



const CardWrapper = styled(Card)({
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: 'transparent !important',
});
// Side-Bar....//
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

const Icon = styled('div')({
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
});

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
    backgroundColor: '#393C49 !important',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const MainBarChildren = styled('div')({
    width: '100%',
    backgroundColor: '#393C49',
});

const Header = styled('div')({
    paddingBottom: '15px',
});

const MainBarBodies = styled('div')({
    display: 'flex !important',
    gap: '20px',
});

const Body1Content = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
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
            backgroundColor: '#EA6969',
        },
    },
}));

const Nav1 = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10px',
    top: 0,
    zIndex: 1,
});

const ManageCategory = styled('span')({
    display: 'flex',
    gap: '5px',
    color: 'white',
});

const Nav2Children = styled('ul')(({ theme }) => ({
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
        backgroundColor: '#EA6969 !important',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease',
    },
    '&:hover::after': {
        transform: 'scaleX(1)',
    },
});

const NavLink = styled('a')({
    '&:hover': {
        color: '#EA6969',
    },
});

const DishesWrapper = styled('div')(({ theme }) => ({
    display: 'flex !important',
    flexWrap: 'wrap',
    gap: '20px',
    textAlign: 'center',
    justifyContent: 'space-around',
    height: '60%',
    '@media (max-width: 400px)': {
        alignItems: 'center',
        justifyContent: 'center',
        height: '35%',
    },
    overflowY: 'scroll !important',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}));

const AddNewDish = styled(Card)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '20%',
    border: '1px dashed #EA6969',
    '@media (max-width: 600px)': {
        width: '30%',
    },
    '@media (max-width: 400px)': {
        width: '56%',
    },
    backgroundColor: '#1F1D2B !important',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '20px !important',
}));

const DishCard = styled(Card)(({ theme }) => ({
    width: '20%',
    border: '1px solid #555a70',
    backgroundColor: '#1F1D2B !important',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '20px !important',
    cursor: 'pointer',
    '@media (max-width: 600px)': {
        width: '30%',
    },
    '@media (max-width: 450px)': {
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        padding: '10px',
    },

}));

const DishImg = styled('img')(({ theme }) => ({
    width: '100px !important',
    height: '100px !important',
    '@media (max-width: 600px)': {
        width: '80px',
        height: '80px',
    },
    '@media (max-width: 400px)': {
        width: '60px',
        height: '60px',
    },
}));

const PriceAndUnit = styled('div')({
    display: 'flex !important',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
});

const DishCardFooter = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const BtnsWrapper = styled('div')({
    display: 'flex',
    gap: '10px',
    paddingTop: '30px',
    '@media (max-width: 450px)': {
        paddingTop: '12px',
    },
});


const Settings = () => {

    //Update State Using Redux..//
    const dispatch = useDispatch();
    const dishesData = useSelector((state) => state.dishes.dishes);
    console.log(dishesData.id);
    const isLoading = useSelector((state) => state.dishes.isLoading);
    const isError = useSelector((state) => state.dishes.isError);

    const [modalOpen, setModalOpen] = useState(false);
    const [dishToEdit, setDishToEdit] = useState(null);
    const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);

    useEffect(() => {
        console.log("Dishes Data:", dishesData); // log the dishes Data            
    }, [dishesData]);

    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
        setDishToEdit(null);
    };

    console.log("Dishes data", dishesData);

    const handleAddDish = (dish) => {
        if (dishToEdit) {
            console.log("Editing dish:", dish);
            dispatch(editDish({ id: dishToEdit.id, updatedDish: dish }));
        }
        else {
            console.log("Diapatching dish:", dish); //log the dish being dispatched
            dispatch(addDish(dish));
            setIsSpinnerLoading(true);

            setTimeout(() => {
                setIsSpinnerLoading(false);
            }, 5000);
        }
        handleCloseModal();
    };

    const handleEditDish = (dish) => {
        setDishToEdit(dish);
        handleOpenModal();
    };

    const handleDeleteDish = (id) => {
        if (id !== undefined) {
            dispatch(deleteDish(id))
            console.log('Deleted dish:', id);
        }
        else {
            console.log('ID is undefined');;
        }
    };

    return (
        <div>
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

                {/* MAIN-BAR */}
                <MainBar>
                    <MainBarChildren>
                        <Header>
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
                            }}>
                                Settings
                            </Typography>
                            <div>
                                <DigitalClock />
                            </div>
                        </Header>

                        <MainBarBodies>
                            <CardContent sx={{
                                width: '25%', height: '85.5vh', backgroundColor: '#1F1D2B', borderRadius: '8px', padding: '0', overflowY: 'auto',
                                '@media (max-width: 450px)': {
                                    height: '87vh',
                                    width: '26%',
                                    overflowY: 'auto',
                                    '&::-webkit-scrollbar': {
                                        display: 'none',
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // flexWrap: 'wrap',
                                },
                            }}>
                                <Body1Content>
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
                                </Body1Content>

                                <Body1Content>
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
                                </Body1Content>

                                <Body1Content>
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
                                </Body1Content>

                                <Body1Content>
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
                                </Body1Content>

                                <Body1Content>
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
                                </Body1Content>

                                <Body1Content>
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
                                </Body1Content>

                            </CardContent>

                            <CardContent sx={{
                                width: { xs: '40%', md: '80%', }, height: { xs: '80.5vh', md: '78.5vh', }, backgroundColor: '#1F1D2B', borderRadius: '8px', justifyContent: 'center',
                            }}>

                                <Nav1>
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
                                        '@media (max-width: 450px)': {
                                            display: 'none',
                                        },
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
                                        <ManageCategory>
                                            <TuneOutlinedIcon />
                                            Manage Categories
                                        </ManageCategory>
                                    </Button>

                                </Nav1>

                                <div>
                                    <Nav2Children>
                                        <NavItem><NavLink href="#">Hot Dishes</NavLink></NavItem>
                                        <NavItem><NavLink href="#">Cold Dishes</NavLink></NavItem>
                                        <NavItem><NavLink href="#">Soup</NavLink></NavItem>
                                        <NavItem><NavLink href="#">Grill</NavLink></NavItem>
                                        <NavItem><NavLink href="#">Appetizer</NavLink></NavItem>
                                        <NavItem><NavLink href="#">Dessert</NavLink></NavItem>
                                    </Nav2Children>
                                </div>

                                {/* Choose Dishes Menu */}
                                <DishesWrapper>

                                    {/* ADD NEW DISH */}
                                    <AddNewDish onClick={handleOpenModal}>

                                        {/* <RotatingDottedLine /> */}

                                        <div className={`${`rotating-dotted-line`}`}></div>

                                        <AddOutlinedIcon sx={{ fontFamily: 'Quicksand', fontSize: '30px', fontWeight: '500', color: '#EA6969', cursor: 'pointer', }} />
                                        <Typography sx={{ fontFamily: 'Quicksand', fontWeight: '600', color: '#EA6969', cursor: 'pointer', }}>Add new dish</Typography>
                                    </AddNewDish>

                                    <div>
                                        <LoadingModal open={isSpinnerLoading} />
                                    </div>
                                    {/* DISHES-ADDED */}
                                    {isLoading ? (
                                        <Typography>Loading...</Typography>
                                    ) : isError ? (
                                        <Typography>Error loading dishes</Typography>
                                    ) : (
                                        dishesData && dishesData.map((dish) => (

                                            <DishCard key={dish.id}>

                                                <DishImg src={dish.imgSrc} alt={dish.name}
                                                />
                                                <Typography sx={{ fontFamily: 'Quicksand', fontWeight: '500', color: 'white', }}>
                                                    {dish.name}
                                                </Typography>

                                                <PriceAndUnit>
                                                    <span>
                                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '13px', color: '#b5b8b9', }}>
                                                            {dish.price}
                                                        </Typography>
                                                    </span>
                                                    <CircleIcon sx={{ fontSize: '5px', color: '#b5b8b9' }} />
                                                    <span>
                                                        <Typography sx={{ fontFamily: 'Quicksand', color: '#b5b8b9', fontSize: '13px' }}>
                                                            {dish.unitAvailable}
                                                        </Typography>
                                                    </span>
                                                </PriceAndUnit>

                                                <DishCardFooter>

                                                    <Button variant="outlined" onClick={() => handleEditDish(dish)} sx={{
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
                                                            Edit
                                                        </Typography>
                                                    </Button>

                                                    <Button variant="outlined" onClick={() => handleDeleteDish(dish.id)} sx={{
                                                        textTransform: 'none', color: 'white', fontFamily: 'Quicksand', fontSize: '14px', margin: '0px', paddingLeft: '10px', paddingRight: '10px', border: 'none',
                                                        '&:hover': {
                                                            border: 'none',
                                                            backgroundColor: '#54363B',
                                                            '& .MuiSvgIcon-root': {
                                                                color: 'red',
                                                            },
                                                            '& .MuiTypography-root': {
                                                                color: 'red',
                                                            },
                                                        },
                                                    }}>
                                                        <DeleteOutlineOutlinedIcon sx={{ fontSize: '18px', color: '#EA6969', marginRight: '5px', }} />
                                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '14px', fontWeight: 'bold', color: '#EA6969', cursor: 'pointer', }}>
                                                            Del
                                                        </Typography>
                                                    </Button>
                                                </DishCardFooter>
                                            </DishCard>
                                        ))
                                    )}
                                </DishesWrapper>

                                <BtnsWrapper>
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
                                    </Button>
                                </BtnsWrapper>
                            </CardContent>
                        </MainBarBodies>

                    </MainBarChildren>
                </MainBar>
            </CardWrapper>
            <AddDishModal open={modalOpen} onClose={handleCloseModal} onAddDish={handleAddDish} dishToEdit={dishToEdit} />
        </div>
    )
}

export default Settings