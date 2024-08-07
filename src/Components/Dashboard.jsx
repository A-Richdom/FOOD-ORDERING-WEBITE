import React, { useState } from 'react'
import {
    Card, CardContent, Box, styled, Button, Menu, MenuItem, Fade, Typography,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
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
import { Link } from 'react-router-dom';

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
        fontSize: '1.5rem',
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
    dishImgOrdering: {
        width: '40px',
        height: '40px',
    },
    todayBtn: {
        display: 'flex',
        alignItems: 'center',
    },
    tableContainer: {
        height: '100%',
        overflowY: 'scroll',
        border: 'none !important',
        // borderBottom: '1px solid #555a70',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },

    table: {
        width: '100% !important',
        borderCollapse: 'collapse !imporant'
    },
    tableBody: {
        border: 'none !important'
    },
    tableBodyRow: {
        borderCollapse: 'collapse'
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

}));

const Dashboard = () => {
    const classes = useStyles();
    const [expandedDishName, setExpandedDishName] = useState(null);


    return (
        <div className={classes.divContainer}>
            <Card className={classes.cardContainer}>

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
                            <CardContent sx={{ padding: '10px' }}>
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

                                <TableContainer className={classes.tableContainer}>
                                    <Table className={classes.table}>
                                        <TableBody className={classes.tableBody}>
                                            {
                                                dishes.map((dish, index) => (
                                                    <React.Fragment key={dish.name}>
                                                        <TableRow className={classes.tableBodyRow}>
                                                            <TableCell className={classes.tableBodyItemCell} sx={{ display: 'flex', gap: '15px', alignItems: 'center', }}>
                                                                <img src={dish.imgSrc} alt={dish.name}
                                                                    className={classes.dishImgOrdering}
                                                                />
                                                                <div>
                                                                    <Typography className={expandedDishName === index ? classes.fullText : classes.truncateText}

                                                                        sx={{
                                                                            fontFamily: 'Quicksand', fontSize: '18px',
                                                                            color: 'white'
                                                                        }}

                                                                        onClick={() => handleDishName(index)}
                                                                    >
                                                                        {dish.name}
                                                                    </Typography>

                                                                    <span>
                                                                        <Typography className={classes.tableBodyPriceCell} sx={{
                                                                            fontFamily: 'Quicksand', fontSize: '14.5px', color: '#c9cdce',
                                                                        }}>{dish.price}
                                                                        </Typography>
                                                                    </span>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    </React.Fragment>
                                                ))};
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </CardContent>
                        </Card>

                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '40%', borderRadius: '10px', }}>
                            <CardContent sx={{ padding: '10px' }}>
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
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard