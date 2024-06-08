import { Card, CardContent, Typography, } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyles = makeStyles((theme) => ({

}));

const PopOverPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardContainer}>
        <CardContent className={classes.confirmationPage}>
          <div className={classes.confirmationPageChildren}>
            <Typography sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '25px',
                xl: '24px',
              },
              fontWeight: '400',
              color: 'red',
            }}>
              Confirmation
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PopOverPage