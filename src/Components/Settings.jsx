import React from 'react'
import { makeStyles } from '@mui/styles'
import { Card, CardContent, Typography } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';


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
        // borderBottom: '1px solid #555a70 !important',
        paddingBottom: '20px'
    },
    mainBarBodies: {
        display: 'flex !important',
        gap: '10px',
    },
    mainBarBody1: {

    },
}));

const Settings = () => {
    const classes = useStyles();

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
                            <CardContent sx={{ width: '20%', height: '100vh', backgroundColor: '#1F1D2B', }} className={classes.mainBarBody1}></CardContent>
                            <CardContent sx={{ width: '70%', height: '100vh', backgroundColor: '#1F1D2B', }} className={classes.mainBarBody2}></CardContent>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Settings