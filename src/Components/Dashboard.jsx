import React, { useEffect, useState } from 'react'
// import { styled } from '@mui/material/styles';
import {
    Card, CardContent, Box, styled, Button, Menu, MenuItem, Fade, Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    useMediaQuery,
} from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
// Main-Bar...//
import DigitalClock from './DIGITAL-CLOCK/DigitalClock';
import WidgetsIcon from '@mui/icons-material/Widgets';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DishReport from './DishReport';
import zIndex from '@mui/material/styles/zIndex';
import { Link } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


const dishes = [
    {
        customer: 'Harry Richdom01',
        imgSrc: 'DishImages/img1.png',
        name: 'Salted Pesta Seasoningg',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '3',
        totalPrice: '$10.26',
    },
    {
        customer: 'Harry Richdom02',
        imgSrc: 'DishImages/img2.png',
        name: 'Ice creem sandwich',
        price: '$1.06',
        unitAvailable: '10 Bowls Available',
        quantity: '6',
        totalPrice: '$20.56',
    },
    {
        customer: 'Harry Richdom03',
        imgSrc: 'DishImages/img3.png',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '5 Bowls Available',
        quantity: '9',
        totalPrice: '$105.50',
    },
    {
        customer: 'Harry Richdom04',
        imgSrc: 'DishImages/img4.png',
        name: 'Fresh Youghout',
        price: '$3.33',
        unitAvailable: '4 Bowls Available',
        quantity: '2',
        totalPrice: '$20.89',
    },
    {
        customer: 'Harry Richdom05',
        imgSrc: 'DishImages/img4.png',
        name: 'Salted pasta with asorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '35',
        totalPrice: '$70.00',
    },
    {
        customer: 'Harry Richdom06',
        imgSrc: 'DishImages/img5.png',
        name: 'Instant Noodles with egg',
        price: '$10.33',
        unitAvailable: '10 Bowls Available',
        quantity: '1',
        totalPrice: '$10.56',
    },
    {
        customer: 'Harry Richdom07',
        imgSrc: 'DishImages/img6.png',
        name: 'Salted Pasta Seasooning',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '120',
        totalPrice: '$490.45',
    },
];

const CardContainer = styled(Card)({
    width: '100% !important',
    height: '100vh',
    display: 'flex !important',
    backgroundColor: '#393C49 !important',
});

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

// MAIN BAR.....
const MainBar = styled(CardContent)(({ theme }) => ({
    backgroundColor: '#393C49 !important',
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        padding: '10px'
    },
}));

const MainBarChildren = styled('div')({
    width: '100%',
    backgroundColor: '#393C49',
});

const Header = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
});

const HeaderChildren = styled('div')({
    borderBottom: '1px solid #555a70 !important',
    paddingBottom: '20px',
    // Ensure it spans the width of the container
    width: '100%',
});

const MetricsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '25px',
    justifyContent: 'space-between',
    paddingTop: '20px',
    paddingBottom: '20px',
    borderRadius: '10px',
    // Ensure it spans the width of the container
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        gap: '10px',
    }
}));

const MetricCard = styled(Card)({
    '@media (max-width: 450px)': {
        width: '60%',
        padding: '15px'
    },
});

const MetricItem = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
});

const ReportNav1 = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    top: 0,
    zIndex: 1,
    // Ensure it spans the width of the container
    width: '100%',
});

const RightBar = styled(CardContent)({
    width: '30%',
    display: 'flex !important',
    flexDirection: 'column',
    backgroundColor: '#393C49 !important',
    alignItems: 'center',
    justifyContent: 'center',
    // transition: 'transform 0.3s ease-in-out',  // Add transition for smooth sliding
    // transform: 'translateX(0)',  // Ensure it's in view initially
    '@media (max-width: 450px)': {
        width: '76%',
        position: 'absolute',  // Fix to the side of the screen
        top: 8,
        right: 0,
        height: '94vh',
        zIndex: 1000,
        transition: 'transform 0.3s ease-in-out',
        transform: props => (props.showRightBar ? 'translateX(0)' : 'translateX(-50%)'),  // Slide in/out based on state
    }
});

const RightBarChildren = styled('div')({
    width: '100% !important',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});


const MostOrderNav = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '5px',
    borderBottom: '1px solid #555a70 !important',
});

const DishImgOrdering = styled('img')(({ theme }) => ({
    width: '40px',
    height: '40px',
}));

const TodayBtn = styled('span')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

const TableContainerStyled = styled(TableContainer)({
    height: '35%',
    overflowY: 'scroll !important',
    border: 'none !important',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
});

const TableStyled = styled(Table)({
    width: '100% !important',
    border: 'none !important',
});

const TableBodyStyled = styled(TableBody)({
    border: 'none !important',
});

const TableRowStyled = styled(TableRow)({
    border: 'none !important',
    '& td': {
        border: 'none !important',
    },
});

const DishImg = styled('img')(({ theme }) => ({
    width: '100px !important',
    height: '100px !important',
    [theme.breakpoints.down('sm')]: {
        width: '80px',
        height: '80px',
    },
    [theme.breakpoints.down('xs')]: {
        width: '60px',
        height: '60px',
    },
}));

const FilterOrder = styled('span')({
    display: 'flex',
    gap: '5px',
});


const Dashboard = ({ onClose }) => {
    const [expandedDishName, setExpandedDishName] = useState(null);
    const [showRightBar, setShowRightBar] = useState(false);
    const isMediumScreenUp = useMediaQuery(theme => theme.breakpoints.up('md'));
    const isSmallScreenDown = useMediaQuery(theme => theme.breakpoints.down('sm'));


    useEffect(() => {
        if (isMediumScreenUp) {
            setShowRightBar(true);
        }

    }, [isMediumScreenUp]);

    const handleRightBarVisibility = () => {
        setShowRightBar(prev => !prev);
    };
    const closeRightBar = () => {
        setShowRightBar(false);
    };


    return (
        <div>
            <CardContainer>
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
                            <HeaderChildren>
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
                                    Dashboard
                                </Typography>
                                <div>
                                    <DigitalClock />
                                </div>
                            </HeaderChildren>

                            <WidgetsIcon onClick={() => handleRightBarVisibility()} sx={{
                                color: 'white',
                                cursor: 'pointer',
                                display: { xs: 'block', md: 'none', lg: 'none' },
                            }} />
                        </Header>


                        <MetricsContainer>
                            <MetricCard sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <MetricItem>
                                    <MonetizationOnOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#9288e0', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#50d1aa', }}>+32.39%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#384c43', color: '#50d1aa', borderRadius: '20px', padding: '5px' }} />
                                </MetricItem>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        lg: '20px',
                                        xl: '24px',
                                    }, color: 'white', fontFamily: 'Quicksand', fontWeight: '600', paddingTop: '15px'
                                }}>$10,243.00</Typography>

                                <Typography sx={{ fontSize: '13px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '15px' }}> Total Revenue</Typography>
                            </MetricCard>

                            <MetricCard sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <MetricItem>
                                    <BookmarkBorderOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#ffb572', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#ff7ca3' }}>-12.01%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#552e3c', color: '#ff7ca3', borderRadius: '20px', padding: '5px' }} />
                                </MetricItem>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        lg: '20px',
                                        xl: '24px',
                                    },
                                    color: 'white',
                                    fontFamily: 'Quicksand',
                                    fontWeight: '600',
                                    paddingTop: '15px'
                                }}>$23,113.60</Typography>
                                <Typography sx={{ fontSize: '13px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '15px' }}>
                                    Total Dish Ordered
                                </Typography>
                            </MetricCard>

                            <MetricCard sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <MetricItem>
                                    <PeopleAltOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#65b0f6', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#ffb572' }}>+2.72%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#686767', color: '#ffb572', borderRadius: '20px', padding: '5px' }} />
                                </MetricItem>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        lg: '20px',
                                        xl: '24px',
                                    },
                                    color: 'white',
                                    fontFamily: 'Quicksand',
                                    fontWeight: '600',
                                    paddingTop: '15px'
                                }}>$1,234</Typography>
                                <Typography sx={{ fontSize: '13px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '15px' }}>
                                    Total Customer
                                </Typography>
                            </MetricCard>

                        </MetricsContainer>

                        <Card sx={{
                            backgroundColor: '#1F1D2B', width: '100%', height: '80%', borderRadius: '10px',
                        }}>
                            <CardContent sx={{
                                height: '10vh',
                                '@media (max-width: 450px)': {
                                    height: '25vh'
                                },
                            }}>
                                <ReportNav1>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: '12px',
                                            sm: '14px',
                                            md: '17px',
                                            lg: '20px',
                                            xl: '24px',
                                        },
                                        fontFamily: 'Roboto',
                                        fontWeight: '400',
                                        color: 'white',
                                    }}>Order Report</Typography>

                                    <Button
                                        variant="outlined"
                                        href="#outlined-buttons"
                                        sx={{
                                            minWidth: 'unset',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontFamily: 'Quicksand',
                                            border: '1px solid #555a70 !important',
                                            borderRadius: '5px',
                                            color: '#abbbc2 !important',
                                            '&:hover': {
                                                border: '1px solid #aaaaaa !important',
                                                backgroundColor: '#1e1e2c',
                                            },
                                        }}
                                    >
                                        Filter
                                        <TuneOutlinedIcon sx={{ fontSize: '20px', color: '#abbbc2 !important', ml: '5px' }} />
                                    </Button>
                                </ReportNav1>

                                {/* ORDER REPORT TABLE */}
                                <DishReport />
                            </CardContent>

                        </Card>
                    </MainBarChildren>
                </MainBar>

                {/* RIGHT-BAR */}
                {(showRightBar || isMediumScreenUp) && (

                    <RightBar>
                        <RightBarChildren>

                            <KeyboardBackspaceOutlinedIcon
                                onClick={closeRightBar}
                                sx={{
                                    display: { xs: 'block', md: 'none', lg: 'none' },
                                    marginTop: { xs: '0px' },
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s ease-in-out',
                                    '&:hover': {
                                        color: '#f97f7f',
                                        transform: 'scale(1.4)',
                                    },
                                }}
                            />
                            <Card sx={{ height: { xs: '45%', md: '60%', }, backgroundColor: '#1F1D2B', width: '90%', borderRadius: '10px', padding: '10px' }}>

                                <CardContent sx={{ padding: '10px', height: '76vh', }}>

                                    <MostOrderNav>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '12px',
                                                    sm: '14px',
                                                    md: '17px',
                                                    lg: '17px',
                                                    xl: '24px',
                                                },
                                                fontFamily: 'Roboto',
                                                fontWeight: '400',
                                                color: 'white',
                                            }}
                                        >
                                            Most Ordered
                                        </Typography>

                                        <Button
                                            variant="outlined"
                                            href="#outlined-buttons"
                                            sx={{
                                                minWidth: 'unset',
                                                textTransform: 'none',
                                                fontSize: '12px',
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
                                            }}
                                        >
                                            <TodayBtn>
                                                <ExpandMoreIcon />
                                                Today
                                            </TodayBtn>
                                        </Button>
                                    </MostOrderNav>

                                    <TableContainerStyled>
                                        <TableStyled>
                                            <TableBodyStyled>
                                                {dishes.map((dish, index) => (
                                                    <React.Fragment key={dish.name}>
                                                        <TableRowStyled  >
                                                            <TableCell sx={{ display: 'flex', gap: '25px', alignItems: 'center', }}>
                                                                <DishImgOrdering src={dish.imgSrc} alt={dish.name} />
                                                                <div>
                                                                    <Typography
                                                                        sx={{
                                                                            fontFamily: 'Quicksand',
                                                                            fontSize: '13px',
                                                                            color: 'white',
                                                                        }}
                                                                    >
                                                                        {dish.name}
                                                                    </Typography>
                                                                    <span>
                                                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '14.5px', color: '#c9cdce' }}>
                                                                            {dish.price}
                                                                        </Typography>
                                                                    </span>
                                                                </div>
                                                            </TableCell>
                                                        </TableRowStyled>
                                                    </React.Fragment>
                                                ))}
                                            </TableBodyStyled>
                                        </TableStyled>
                                    </TableContainerStyled>

                                    <Button
                                        sx={{
                                            width: '100%',
                                            border: '1px solid #f97f7f',
                                            borderRadius: '8px',
                                            color: 'white',
                                            padding: '5px',
                                            textTransform: 'none',
                                            fontFamily: 'Quicksand',
                                            fontSize: '12px',
                                            '&:hover': {
                                                backgroundColor: '#f97f7f',
                                            },
                                            // fontWeight: '600',
                                            '@media (max-width: 600px)': {
                                                fontSize: '8px',
                                                padding: '7px',
                                            },
                                            '@media (max-width: 400px)': {
                                                width: '100%',
                                                fontSize: '10px',
                                                padding: '3px',
                                                marginTop: '15px',
                                            },
                                        }}>
                                        View All
                                    </Button>

                                </CardContent>

                            </Card>

                            <Card sx={{ height: { xs: '40%', md: '60%', }, backgroundColor: '#1F1D2B', width: '90%', borderRadius: '10px', padding: '10px' }}>

                                <CardContent sx={{ padding: '10px', height: { xs: '70vh', md: '85vh', } }}>

                                    <MostOrderNav>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    xs: '12px',
                                                    sm: '14px',
                                                    md: '17px',
                                                    lg: '17px',
                                                    xl: '24px',
                                                },
                                                fontFamily: 'Roboto',
                                                fontWeight: '400',
                                                color: 'white',
                                            }}
                                        >
                                            Most Type of Order
                                        </Typography>

                                        <Button
                                            variant="outlined"
                                            href="#outlined-buttons"
                                            sx={{
                                                minWidth: 'unset',
                                                textTransform: 'none',
                                                fontSize: '12px',
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
                                            }}
                                        >
                                            <TodayBtn>
                                                <ExpandMoreIcon />
                                                Today
                                            </TodayBtn>
                                        </Button>
                                    </MostOrderNav>

                                    <TableContainerStyled>
                                        <TableStyled>
                                            <TableBodyStyled>
                                                {dishes.map((dish, index) => (
                                                    <React.Fragment key={dish.name}>
                                                        <TableRowStyled>
                                                            <TableCell sx={{ display: 'flex', gap: '25px', alignItems: 'center', }}>
                                                                <DishImgOrdering src={dish.imgSrc} alt={dish.name} />
                                                                <div>
                                                                    <Typography
                                                                        sx={{
                                                                            fontFamily: 'Quicksand',
                                                                            fontSize: '13px',
                                                                            color: 'white',
                                                                        }}
                                                                    >
                                                                        {dish.name}
                                                                    </Typography>
                                                                    <span>
                                                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '14.5px', color: '#c9cdce' }}>
                                                                            {dish.price}
                                                                        </Typography>
                                                                    </span>
                                                                </div>
                                                            </TableCell>
                                                        </TableRowStyled>
                                                    </React.Fragment>
                                                ))}
                                            </TableBodyStyled>
                                        </TableStyled>
                                    </TableContainerStyled>
                                </CardContent>

                            </Card>

                        </RightBarChildren>
                    </RightBar>
                )}

            </CardContainer>
        </div>
    );
}

export default Dashboard