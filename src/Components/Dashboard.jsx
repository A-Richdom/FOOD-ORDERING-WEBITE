import React from 'react'
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
// Main-Bar...//
import DigitalClock from './DIGITAL-CLOCK/DigitalClock'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';


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
        border: '1px solid red',
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
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },

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

                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '100%', borderRadius: '10px', }}>
                            <CardContent>
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
                                    
                                </div>
                            </CardContent>

                        </Card>

                    </div>
                </CardContent>

                {/* RIGHT-BAR */}
                <CardContent className={classes.rightBar}>
                    <div className={classes.rightBarChildren}>
                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '55%', borderRadius: '10px' }}></Card>
                        <Card sx={{ backgroundColor: '#1F1D2B', width: '100%', height: '45%', borderRadius: '10px', }}></Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard