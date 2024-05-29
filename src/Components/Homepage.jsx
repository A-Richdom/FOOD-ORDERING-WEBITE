import React from 'react'
import { Card, CardContent, Container, Drawer } from '@mui/material'
import { makeStyles } from '@mui/styles'
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';


const useStyles = makeStyles((theme) => ({
    cardWrapper: {
        width: '100%',
        height: '95vh',
        display: 'flex',
    },
    cardContent1: {
        height: '100%',
        width: '5%',
        backgroundColor: '#1F1D2B',
    },
    cardContent2: {
        width: '60%',
        backgroundColor: '#393C49',
    },
    cardContent3: {
        width: '35%',
        backgroundColor: '#1F1D2B',
    },
    sideBarIcons: {
        display: 'flex',
        color: 'EA7C69',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center'
    },
    icon: {
        color: '#EA6969',
    }
    

}));

const Homepage = () => {
    const classes = useStyles();

  return (
    <div className={classes.divContainer}>
        <Card className={classes.cardWrapper}>
            <CardContent className={classes.cardContent1}>
                
                    <div className={classes.sideBarIcons}>
                        <StorefrontIcon className={classes.icon}/>
                        <HomeOutlinedIcon className={classes.icon}/>
                        <RamenDiningOutlinedIcon className={classes.icon}/>
                        <DashboardCustomizeOutlinedIcon className={classes.icon}/>
                    </div>
                
            </CardContent>
            <CardContent className={classes.cardContent2}>
                
            </CardContent>
            <CardContent className={classes.cardContent3}>

            </CardContent>
        </Card>
    </div>
  )
}

export default Homepage