import React, { useState } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AddIcon from '@mui/icons-material/Add';
import DishesOrdering from './DishesOrdering';


const dishes = [
  {
    imgSrc: 'DishImages/img1.png',
    name: 'Salted Pasta Seasoning',
    price: '$3.42',
    unitAvailable: '20 Bowls Available',
    quantity: '3',
    totalPrice: '$10.26',
  },
  {
    imgSrc: 'DishImages/img2.png',
    name: 'Ice cream sandwich',
    price: '$1.06',
    unitAvailable: '10 Bowls Available',
    quantity: '6',
    totalPrice: '$20.56',
  },
  {
    imgSrc: 'DishImages/img3.png',
    name: 'Spicy Instant Noodles',
    price: '$1.33',
    unitAvailable: '5 Bowls Available',
    quantity: '9',
    totalPrice: '$105.50',
  },
  {
    imgSrc: 'DishImages/img4.png',
    name: 'Fresh Youghout',
    price: '$3.33',
    unitAvailable: '4 Bowls Available',
    quantity: '2',
    totalPrice: '$20.89',
  },
  {
    imgSrc: 'DishImages/img5.png',
    name: 'Salted pasta with assorted meat',
    price: '$2.33',
    unitAvailable: '15 Bowls Available',
    quantity: '35',
    totalPrice: '$70.00',
  },
  {
    imgSrc: 'DishImages/img6.png',
    name: 'Instant Noodles with egg',
    price: '$10.33',
    unitAvailable: '10 Bowls Available',
    quantity: '1',
    totalPrice: '$10.56',
  },
  {
    imgSrc: 'DishImages/img1.png',
    name: 'Salted Pasta Seasoning',
    price: '$3.42',
    unitAvailable: '20 Bowls Available',
    quantity: '120',
    totalPrice: '$490.45',
  },
  {
    imgSrc: 'DishImages/img2.png',
    name: 'Ice cream sandwich',
    price: '$1.06',
    unitAvailable: '3 Bowls Available',
    quantity: '3',
    totalPrice: '$23.11',
  },
  {
    imgSrc: 'DishImages/img3.png',
    name: 'Spicy Instant Noodles',
    price: '$1.33',
    unitAvailable: '10 Bowls Available',
    quantity: '25',
    totalPrice: '$24.33',
  },
  {
    imgSrc: 'DishImages/img4.png',
    name: 'Fresh Youghout',
    price: '$3.33',
    unitAvailable: '20 Bowl Available',
    quantity: '3',
    totalPrice: '$10.11',
  },
  {
    imgSrc: 'DishImages/img5.png',
    name: 'Salted pasta with assorted meat',
    price: '$2.33',
    unitAvailable: '20 Bowl Available',
    quantity: '10',
    totalPrice: '$4.76',
  },
  {
    imgSrc: 'DishImages/img5.png',
    name: 'Salted pasta with assorted meat',
    price: '$2.33',
    unitAvailable: '15 Bowls Available',
    quantity: '11',
    totalPrice: '$22.33',
  },
];

const useStyles = makeStyles((theme) => ({

  cardContainer: {
    width: '60%',
    height: '100vh',
    display: 'flex',
    borderRadius: '15px !important',
  },
  // CONFIRMATION PAGE..//
  confirmationPage: {
    width: '50%',
    height: '100%',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f1d2b',
    borderRight: '1.2px solid #555a70',
  },
  confirmationPageChildren: {
    width: '100%',
    border: '1px solid red',
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    borderBottom: '1px solid #555a70 !important',
  },
  addBtn: {
    border: '1px solid #EA6969 !important',
    borderRadius: '10px !important',
    padding: theme.spacing(1),
    color: '#EA6969 !important',
    '&:hover': {
      backgroundColor: '#f97f7f !important',
      color: 'white !important',
      border: 'none !important',
    },
    '&:focus': {
      backgroundColor: '#EA6969 !important',
      color: 'white !important',
      border: '1px solid #555a70',
    },
  },
  discountSubtotalWrapper: {
    display: 'flex',
    flexWrap: 'wrap !important',
    flexDirection: 'column',
    gap: '10px',
    paddingTop: '20px',
    '@media (max-width: 600px)': {
      fontSize: '12px',
      padding: '8px',
    },
    '@media (max-width: 400px)': {
      fontSize: '10px',
      padding: '6px',
    },
  },
  discount: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subTotal: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },


  // PAYMENT PAGE...//
  paymentPage: {
    width: '50%',
    height: '100%',
    backgroundColor: '#1f1d2b',
  },

}));

// console.log(dishes);

const PopOverPage = () => {
  const classes = useStyles();
  const [expandedDishName, setExpandedDishName] = useState(null);

  // RIGHT BAR...//
  const handleTextboxChange = (index) => (event) => {
    const newRows = [...rows];
    newRows[index].textboxValue = event.target.value;
    setRows(newRows);
  };
  // Handle Truncating of the DishName...//
  const handleDishName = (index) => {
    setExpandedDishName(index === expandedDishName ? null : index);
  };



  return (
    <div>
      <Card className={classes.cardContainer}>

        {/* CONFIRMATION PAGE */}
        <CardContent className={classes.confirmationPage}>
          <div className={classes.confirmationPageChildren}>
            <span><KeyboardBackspaceOutlinedIcon
              sx={{
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  color: '#f97f7f', 
                  transform: 'scale(1.4)',
                },
              }} />
            </span>
            <div className={classes.navBar}>
              <div>
                <Typography sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '16px',
                    md: '18px',
                    lg: '25px',
                    xl: '24px',
                  },
                  fontFamily: 'Roboto',
                  fontWeight: '400',
                  color: 'white',
                }}>
                  Confirmation
                </Typography>
                <Typography sx={{
                  fontSize: '14px',
                  color: '#c9cdce',
                  fontFamily: 'Roboto'
                }}>
                  Order #34562
                </Typography>
              </div>
              <Button className={classes.addBtn}
                variant="outlined"
                href="#outlined-buttons"
                sx={{
                  border: '1px solid #EA6969',
                  borderRadius: '10px',
                  padding: '14px 14px',
                  color: '#EA6969',
                  minWidth: 'unset',
                }}>
                <AddIcon />
              </Button>

            </div>

            <DishesOrdering
              dishes={dishes}
              handleTextboxChange={handleTextboxChange}
              handleDishName={handleDishName}
              expandedDishName={expandedDishName}
            />

            <div className={classes.discountSubtotalWrapper} sx={{ border: '1px solid red', backgroundColor: 'red', paddingTop: '20px' }}>
              <div className={classes.discount}>
                <Typography sx={{
                  fontSize: '15px',
                  fontFamily: 'Quicksand',
                  color: '#b5b8b9',
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                  },
                  '@media (max-width: 400px)': {
                    fontSize: '12px !important',
                  },
                }}>
                  Discount
                </Typography>
                <span>
                  <Typography sx={{
                    fontSize: '17px',
                    fontFamily: 'Quicksand',
                    color: 'white',
                    '@media (max-width: 600px)': {
                      fontSize: '12px',
                    },
                    '@media (max-width: 400px)': {
                      fontSize: '12px !important',
                    },
                  }}>
                    $0
                  </Typography>
                </span>
              </div>
              <div className={classes.subTotal}>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontFamily: 'Quicksand',
                    color: '#b5b8b9',
                    '@media (max-width: 600px)': {
                      fontSize: '12px',
                    },
                    '@media (max-width: 400px)': {
                      fontSize: '12px !important',
                    },
                  }}>
                  Sub total
                </Typography>
                <span>
                  <Typography sx={{
                    fontSize: '17px',
                    fontFamily: 'Quicksand',
                    color: 'white',
                    '@media (max-width: 600px)': {
                      fontSize: '12px',
                    },
                    '@media (max-width: 400px)': {
                      fontSize: '12px !important',
                    },
                  }}>
                    $31.90
                  </Typography>
                </span>
              </div>
            </div>

          </div>
        </CardContent>

        {/* PAYMENT PAGE */}
        <CardContent className={classes.paymentPage}>
          <div className={classes.paymentPageChildren}>
            <Typography sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '25px',
                xl: '24px',
              },
              fontFamily: 'Roboto',
              fontWeight: '400',
              color: 'white',
            }}>
              Payment
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PopOverPage