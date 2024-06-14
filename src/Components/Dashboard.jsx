import React from 'react'
import {
    Card, CardContent, Box, styled, Button, Menu, MenuItem, Fade, Typography,
    TableContainer,
    Table,
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
// Main-Bar...//
import DigitalClock from './DIGITAL-CLOCK/DigitalClock'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DishReport from './DishReport';
import zIndex from '@mui/material/styles/zIndex';

const dishes = [
    {
        customer: 'Harry Richdom01',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted Pesta Seasoningg',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '3',
        totalPrice: '$10.26',
    },
    {
        customer: 'Harry Richdom02',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Ice creem sandwich',
        price: '$1.06',
        unitAvailable: '10 Bowls Available',
        quantity: '6',
        totalPrice: '$20.56',
    },
    {
        customer: 'Harry Richdom03',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '5 Bowls Available',
        quantity: '9',
        totalPrice: '$105.50',
    },
    {
        customer: 'Harry Richdom04',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Fresh Youghout',
        price: '$3.33',
        unitAvailable: '4 Bowls Available',
        quantity: '2',
        totalPrice: '$20.89',
    },
    {
        customer: 'Harry Richdom05',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pasta with asorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '35',
        totalPrice: '$70.00',
    },
    {
        customer: 'Harry Richdom06',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Instant Noodles with egg',
        price: '$10.33',
        unitAvailable: '10 Bowls Available',
        quantity: '1',
        totalPrice: '$10.56',
    },
    {
        customer: 'Harry Richdom07',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted Pasta Seasooning',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '120',
        totalPrice: '$490.45',
    },
    {
        customer: 'Harry Richdom08',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Ice cream sandwich',
        price: '$1.06',
        unitAvailable: '3 Bowls Available',
        quantity: '3',
        totalPrice: '$23.11',
    },
    {
        customer: 'Harry Richdom09',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '10 Bowls Available',
        quantity: '25',
        totalPrice: '$24.33',
    },
    {
        customer: 'Harry Richdom10',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Fresh Yooughout',
        price: '$3.33',
        unitAvailable: '20 Bowl Available',
        quantity: '3',
        totalPrice: '$10.11',
    },
    {
        customer: 'Harry Richdom11',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pasta with assorted fish',
        price: '$2.33',
        unitAvailable: '20 Bowl Available',
        quantity: '10',
        totalPrice: '$4.76',
    },
    {
        customer: 'Harry Richdom12',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pastaa with assorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '11',
        totalPrice: '$22.33',
    },
];

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        width: '100% !important',
        height: '100vh',
        display: 'flex',
        backgroundColor: '#393C49 !important',
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
        width: '65%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    mainBarChildren: {
        width: '100%',
        backgroundColor: '#393C49',
    },
    header: {
        borderBottom: '1px solid #555a70 !important',
        paddingBottom: '20px'
    },
    metricsContainer: {
        display: 'flex',
        gap: '25px',
        justifyContent: 'space-between',
        // alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '20px',
        borderRadius: '10px',
    },
    metricItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    },
    reportNav1: {
        display: 'flex',
        justifyContent: 'space-between',
        top: 0,
        zIndex: 1,
    },
    reportTable: {
        height: '10%',
    },
    filterOrder: {
        display: 'flex',
        gap: '5px',
    },

    //Right Bar...//
    rightBar: {
        width: '30%',
        display: 'flex !important',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightBarChildren: {
        width: '100% !important',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    mostOrderNav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '15px',
        borderBottom: '1px solid #555a70 !important',
    },
    todayBtn: {
        display: 'flex',
        alignItems: 'center',
    }

}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <div className={classes.divContainer}>
            <Card className={classes.cardContainer}>

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
                                Dashboard
                            </Typography>
                            <div>
                                <DigitalClock />
                            </div>
                        </div>

                        <div className={classes.metricsContainer}>
                            <Card sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <div className={classes.metricItem}>
                                    <MonetizationOnOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#9288e0', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#50d1aa', }}
                                    >+32.39%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#384c43', color: '#50d1aa', borderRadius: '20px', padding: '5px' }} />
                                </div>
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

                            </Card>
                            <Card sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <div className={classes.metricItem}>
                                    <BookmarkBorderOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#ffb572', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#ff7ca3', }}
                                    >-12.01%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#552e3c', color: '#ff7ca3', borderRadius: '20px', padding: '5px' }} />
                                </div>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        lg: '20px',
                                        xl: '24px',
                                    }, color: 'white', fontFamily: 'Quicksand', fontWeight: '600', paddingTop: '15px'
                                }}>$23,113.60</Typography>

                                <Typography sx={{ fontSize: '13px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '15px' }}> Total Dish Ordered</Typography>

                            </Card>
                            <Card sx={{ width: '30%', height: '100%', backgroundColor: '#1F1D2B', padding: '15px', borderRadius: '10px' }}>
                                <div className={classes.metricItem}>
                                    <PeopleAltOutlinedIcon sx={{ fontSize: '20px', backgroundColor: '#393C49', color: '#65b0f6', borderRadius: '8px', padding: '10px' }} />
                                    <Typography sx={{ fontFamily: 'Quicksand', color: '#ffb572', }}
                                    >+2.72%</Typography>
                                    <ArrowUpwardOutlinedIcon sx={{ fontSize: '15px', backgroundColor: '#686767', color: '#ffb572', borderRadius: '20px', padding: '5px' }} />
                                </div>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '14px',
                                        sm: '16px',
                                        md: '18px',
                                        lg: '20px',
                                        xl: '24px',
                                    }, color: 'white', fontFamily: 'Quicksand', fontWeight: '600', paddingTop: '15px'
                                }}>$1,234</Typography>

                                <Typography sx={{ fontSize: '13px', fontFamily: 'Quicksand', color: '#c9cdce', paddingTop: '15px' }}> Total Customer</Typography>

                            </Card>
                        </div>

                        <Card sx={{
                            backgroundColor: '#1F1D2B', width: '100%', height: '85%', borderRadius: '10px',
                        }}>
                            <CardContent sx={{ height: '5vh' }}>
                                <div className={classes.reportNav1}>
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
                                    }}>Order Report
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
                                        <span className={classes.filterOrder}>
                                            <TuneOutlinedIcon />
                                            Filter Order
                                        </span>
                                    </Button>

                                </div>

                                {/*Order Report Table */}
                                <DishReport />

                            </CardContent>

                        </Card>

                    </div>
                </CardContent>

                {/* RIGHT-BAR */}
                <CardContent className={classes.rightBar}>
                    <div className={classes.rightBarChildren}>
                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '60%', borderRadius: '10px', padding: '10px' }}>
                            <CardContent sx={{ padding: '10px'}}>
                                <div className={classes.mostOrderNav}>
                                    <Typography sx={{
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
                                    }}>Most Ordered
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
                                        }}>
                                        <span className={classes.todayBtn}>
                                            <ExpandMoreIcon />
                                            Today
                                        </span>
                                    </Button>

                                </div>
                            
                                <TableContainer>
                                    <Table>
                                        
                                    </Table>
                                </TableContainer>

                            </CardContent>



                        </Card>
                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '40%', borderRadius: '10px', }}></Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard