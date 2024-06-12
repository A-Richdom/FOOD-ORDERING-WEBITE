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

                    </div>
                </CardContent>

                {/* RIGHT-BAR */}
                <CardContent className={classes.rightBar}>
                    <div className={classes.rightBarChildren}>
                        <Card sx={{ backgroundColor:  '#1F1D2B', width: '100%', height: '60%', borderRadius: '10px'}}>
fgggg
                        </Card>
                        <Card sx={{ backgroundColor:  '#1F1D2B', width: '100%', height: '40%', borderRadius: '10px', }}>sdsdsd</Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard