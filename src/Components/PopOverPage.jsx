import React, { useState } from 'react'
import { Card, CardContent, Typography, Button, TextField, Menu, MenuItem, Fade } from '@mui/material';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AddIcon from '@mui/icons-material/Add';
import DishesOrdering from './DishesOrdering';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import { selectDish } from './FEATURES/DishesSlice';
import { useSelector } from 'react-redux';
import DishesSlice from './FEATURES/DishesSlice';


const CardContainer = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  zIndex: 2,
  width: '60%',
  display: 'flex',
  borderRadius: '15px !important',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

// CONFIRMATION PAGE..//
const ConfirmationPage = styled(CardContent)(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex !important',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1f1d2b',
  borderRight: '1.2px solid #555a70',
  [theme.breakpoints.down('md')]: {
    width: '40%',
    borderRight: 'none',
  },
}));

const ConfirmationPageChildren = styled('div')(({ theme }) => ({
  flex: 1,
  width: '100%',
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

const NavBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBottom: '20px',
  borderBottom: '1px solid #555a70 !important',
});

const AddBtn = styled(Button)(({ theme }) => ({
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
}));

const DiscountSubtotalWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: 40,
  left: '1rem',
  right: '25rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingTop: '50px !important',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    padding: '8px',
    paddingToP: '35px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '10px',
    padding: '6px',
    paddingToP: '35px',
  },
}));

const Discount = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  '@media (max-width: 450px)': {
    display: 'flex',
    gap: '70px',
    flexWrap: 'nowrap',
  },
});

const SubTotal = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  '@media (max-width: 450px)': {
    display: 'flex',
    gap: '48px',
    flexWrap: 'nowrap',
  },
});

// PAYMENT PAGE...//
const PaymentPage = styled(CardContent)(({ theme }) => ({
  width: '50%',
  height: '100%',
  display: 'flex !important',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#1f1d2b',
  [theme.breakpoints.down('md')]: {
    width: '60%',
  },
}));

const PaymentPageChildren = styled('div')(({ theme }) => ({
  width: '100%',
  paddingTop: '20px !important',
  height: '90%',
  overflowY: 'auto',
  overflowX: 'hidden',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (max-width: 450px)': {
    height: '90%',
    paddingTop: '0px !important',
    overflowY: 'auto',
  },
}));

const PaymentPageNav = styled('div')({
  paddingTop: '50px !important',
  borderBottom: '1px solid #555a70 !important',
});

const PaymentMethodBtns = styled('div')({
  display: 'flex',
  gap: '10px',
  paddingBottom: '5px',
  width: '100%',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const PaymentMethodBtn = styled(Button)(({ theme }) => ({
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
}));

const CreditCardBtn = styled(PaymentMethodBtn)({
  padding: '7px 12px !important',
});

const PaypalBtn = styled(PaymentMethodBtn)({
  padding: '7px 18px !important',
});

const CashBtn = styled(PaymentMethodBtn)({
  padding: '7px 22px !important',
});

const CreditCard = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Paypal = styled(CreditCard)``;

const Cash = styled(CreditCard)``;

const CardName = styled('div')({
  paddingBottom: '10px',
  // paddingToP: '20px !important'

});

const CardNumber = styled('div')({
  paddingBottom: '10px !important',
});

const ExpCvvWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  gap: '10px',
  paddingBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const OrderTypeTableWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '30px',
  [theme.breakpoints.down('sm')]: {
    gap: '15px',
  },
}));

const OrderType = styled('div')({
  paddingTop: '10px',
});

const DineInButton = styled(Button)(({ theme }) => ({
  textTransform: 'none !important',
  backgroundColor: '#1F1D2B !important',
  padding: '4px 3px !important',
  border: '1px solid #393c49 !important',
  '&:hover': {
    backgroundColor: '#393C49 !important',
  },
  '&:focus $dineInIcon': {
    transform: 'rotate(180deg)',
  },
}));

const DineInIcon = styled('span')({
  transition: 'transform 0.5s ease !important',
});

const DineInItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '12px !important',
  fontFamily: 'Quicksand',
  // paddingToP: '20px',
  '&:hover': {
    backgroundColor: '#393C49 !important',
    color: 'white',
    borderRadius: '3px',
    padding: theme.spacing(1, 2),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& .MuiOutlinedInput-root': {
      '& .MuiInputBase-input': {
        fontSize: '14px',
        padding: '6px',
      },
    },
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiOutlinedInput-root': {
      '& .MuiInputBase-input': {
        fontSize: '15px',
        padding: '7px',
      },
    },
  },
}));

const ContinuePaymentWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  paddingTop: '25px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    gap: '20px',
  },
  [theme.breakpoints.down('xs')]: {
    gap: '25px',
    paddingBottom: '25px',
  },
}));


// console.log(dishes);

const PopOverPage = ({ selectedDishes, onClose }) => {
  const [expandedDishName, setExpandedDishName] = useState(null);
  // const [selectedDishes, setSelectedDishes] = useState([]);

  // const selectedDishes = useSelector((state) => state.selectedDishes);

  // Dine in Button Function
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // RIGHT BAR...//
  const handleTextboxChange = (index) => (event) => {
    const newRows = [...rows];
    newRows[index].textboxValue = event.target.value;
    setRows(newRows);
  };
  // Handle Truncating of the DishName....//
  const handleDishName = (index) => {
    setExpandedDishName(index === expandedDishName ? null : index);
  };

  // const isVisible = useSelector((state) => state.slide.isVisible);

  return (
    <div>
      <CardContainer>

        {/* CONFIRMATION PAGE */}
        <ConfirmationPage>
          <ConfirmationPageChildren>
            <span><KeyboardBackspaceOutlinedIcon onClick={onClose}
              sx={{
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out',
                '&:hover': {
                  color: '#f97f7f',
                  transform: 'scale(2)',
                },
              }} />
            </span>
            <NavBar>

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
              <AddBtn
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
              </AddBtn>

            </NavBar>

            <DishesOrdering
              // className={classes.dishesOrdering}
              selectedDishes={selectedDishes}
              handleTextboxChange={handleTextboxChange}
              handleDishName={handleDishName}
              expandedDishName={expandedDishName}
            />

            <DiscountSubtotalWrapper sx={{ paddingTop: '20px' }}>
              <Discount>
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
              </Discount>

              <SubTotal>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontFamily: 'Quicksand',
                    color: '#b5b8b9',
                    whiteSpace: 'nowrap',
                    '@media (max-width: 600px)': {
                      fontSize: '12px',
                    },
                    '@media (max-width: 450px)': {
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
              </SubTotal>
            </DiscountSubtotalWrapper>

          </ConfirmationPageChildren>
        </ConfirmationPage>

        {/* PAYMENT PAGE */}
        <PaymentPage>
          <PaymentPageChildren>

            <PaymentPageNav>
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
              <Typography sx={{
                fontSize: '14px',
                color: '#c9cdce',
                fontFamily: 'Roboto',
                paddingTop: '5px',
                paddingBottom: '5px',
                '@media (max-width: 400px)': {
                  fontSize: '12px'
                }
              }}>
                3 payment method available
              </Typography>
            </PaymentPageNav>

            <div>
              <Typography sx={{
                fontSize: {
                  xs: '14px',
                  sm: '16px',
                  md: '18px',
                  lg: '20px',
                  xl: '24px',
                },
                fontFamily: 'Roboto',
                fontWeight: '400',
                color: 'white',
                paddingTop: '10px'
              }}>
                Payment Method
              </Typography>

              <PaymentMethodBtns>
                <CreditCardBtn
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <CreditCard>
                    <CreditCardOutlinedIcon />
                    Credit Card
                  </CreditCard>
                </CreditCardBtn>
                <PaypalBtn
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <Paypal>
                    <CreditCardOutlinedIcon />
                    Paypal
                  </Paypal>
                </PaypalBtn>
                <CashBtn
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <Cash>
                    <CreditCardOutlinedIcon />
                    Cash
                  </Cash>
                </CashBtn>
              </PaymentMethodBtns>
            </div>

            <CardName>
              <Typography sx={{
                fontSize: {
                  xs: '8px',
                  sm: '10px',
                  md: '13px',
                  lg: '15px',
                  xl: '24px',
                },
                fontFamily: 'Quicksand',
                fontWeight: '500',
                color: 'white',
                '@media (max-width: 400px)': {
                  fontSize: '12px'
                }
              }}>
                Cardholder Name
              </Typography>
              <StyledTextField
                fullWidth
                // value={dish.textboxValue}
                // onChange={handleTextboxChange(index)}
                placeholder="Ridwan Olalekan..."
                variant="outlined"
                size="small"
                InputProps={{
                  style: {
                    color: 'white',
                    backgroundColor: '#393C49',
                    fontFamily: 'Quicksand',
                    fontSize: '17px',
                    borderRadius: '10px',
                  },
                }}
                sx={{
                  paddingTop: '5px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#555a70',
                    },
                    '&:hover fieldset': {
                      borderColor: '#555a70',
                    },
                    '&.Mui-focused fieldset': {
                      border: '1px solid white',
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input': {
                      width: '100%',
                    },
                    '@media (max-width: 600px)': {
                      width: '80%'
                    },
                    '@media (max-width: 400px)': {
                      width: '70%'
                    },
                  },
                }}
              />
            </CardName>

            <CardNumber>
              <Typography sx={{
                fontSize: {
                  xs: '8px',
                  sm: '10px',
                  md: '13px',
                  lg: '15px',
                  xl: '24px',
                },
                fontFamily: 'Quicksand',
                fontWeight: '500',
                color: 'white',
                '@media (max-width: 400px)': {
                  fontSize: '12px'
                },
              }}>
                Card Number
              </Typography>
              <StyledTextField
                fullWidth
                // value={dish.textboxValue}
                // onChange={handleTextboxChange(index)}
                placeholder="1234567890..."
                autoComplete='off'
                variant="outlined"
                size="small"
                InputProps={{
                  style: {
                    color: 'white',
                    backgroundColor: '#393C49',
                    fontFamily: 'Quicksand', fontSize: '17px',
                    borderRadius: '10px',
                  },
                  inputProps: {
                    autoComplete: 'new-password', // Use a different value
                  },
                }}
                sx={{
                  paddingTop: '5px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#555a70',
                    },
                    '&:hover fieldset': {
                      borderColor: '#555a70',
                    },
                    '&.Mui-focused fieldset': {
                      border: '1px solid white',
                      borderColor: 'white',
                    },
                    '& .MuiInputBase-input': {
                      width: '100%',
                      backgroundColor: '#393C49',
                    },
                    '@media (max-width: 600px)': {
                      width: '80%'
                    },
                    '@media (max-width: 400px)': {
                      width: '70%'
                    },
                  },
                }}
              />
            </CardNumber>

            <ExpCvvWrapper>
              <div>
                <Typography sx={{
                  fontSize: {
                    xs: '8px',
                    sm: '10px',
                    md: '13px',
                    lg: '15px',
                    xl: '24px',
                  },
                  fontFamily: 'Quicksand',
                  fontWeight: '500',
                  color: 'white',
                  '@media (max-width: 400px)': {
                    fontSize: '12px'
                  }
                }}>
                  Expiration Date
                </Typography>
                <StyledTextField

                  // fullWidth
                  // value={dish.textboxValue}
                  // onChange={handleTextboxChange(index)}
                  type="date"
                  placeholder="Ridwan Olalekan..."
                  variant="outlined"
                  size="small"

                  InputProps={{
                    style: {
                      color: 'white',
                      backgroundColor: '#393C49',
                      fontFamily: 'Quicksand', fontSize: '17px',
                      borderRadius: '10px',
                    },
                  }}
                  sx={{
                    width: '95%',
                    paddingTop: '5px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#555a70',
                      },
                      '&:hover fieldset': {
                        borderColor: '#555a70',
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid white',
                        borderColor: 'white',
                      },
                      '& .MuiInputBase-input': {
                        width: '100%',
                      },
                    },
                    '@media (max-width: 600px)': {
                      width: '80%',
                      fontSize: '8px',
                      padding: '7px',
                    },
                    '@media (max-width: 400px)': {
                      width: '100%',
                      fontSize: '10px',
                      // padding: '1px',
                      padding: '2px',
                    },
                  }}
                />
              </div>
              <div>
                <Typography sx={{
                  fontSize: {
                    xs: '8px',
                    sm: '10px',
                    md: '13px',
                    lg: '15px',
                    xl: '24px',
                  },
                  fontFamily: 'Quicksand',
                  fontWeight: '500',
                  color: 'white',
                  '@media (max-width: 400px)': {
                    fontSize: '12px'
                  }
                }}>
                  CVV
                </Typography>
                <StyledTextField

                  // fullWidth
                  // value={dish.textboxValue}
                  // onChange={handleTextboxChange(index)}
                  type="password"
                  placeholder="123..."
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                  InputProps={{
                    style: {
                      color: 'white',
                      backgroundColor: '#393C49',
                      fontFamily: 'Quicksand',
                      fontSize: '17px',
                      borderRadius: '10px',
                      autoComplete: 'none',
                    },
                    inputProps: {
                      autoComplete: 'new-password', // Use a different value
                    },
                  }}
                  sx={{
                    width: '95%',
                    paddingTop: '5px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#555a70',
                      },
                      '&:hover fieldset': {
                        borderColor: '#555a70',
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid white',
                        borderColor: 'white',
                      },
                      '& .MuiInputBase-input': {
                        width: '100%',
                        backgroundColor: '#393C49',
                      },
                      '@media (max-width: 600px)': {
                        width: '100%',
                        fontSize: '8px',
                        padding: '7px',
                      },
                      '@media (max-width: 400px)': {
                        width: '90%',
                        fontSize: '10px',
                        paddingLeft: '1px',
                        padding: '2px',
                      },
                    },
                  }}
                />
              </div>
            </ExpCvvWrapper>

            <OrderTypeTableWrapper>
              <OrderType>
                <Typography sx={{
                  height: '50%',
                  fontSize: {
                    xs: '8px',
                    sm: '10px',
                    md: '13px',
                    lg: '15px',
                    xl: '24px',
                  },
                  fontFamily: 'Quicksand',
                  fontWeight: '500',
                  color: 'white',
                  paddingBottom: '8px',
                  '@media (max-width: 400px)': {
                    fontSize: '12px'
                  }
                }}>
                  Order Type
                </Typography>
                <DineInButton
                  id="fade-button"
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}

                >
                  <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Quicksand', display: 'flex', alignItems: 'center', gap: '3px', padding: '0px 5px' }}>
                    <DineInIcon>
                      <KeyboardArrowDownIcon />
                      Dine in
                    </DineInIcon>
                  </Typography>
                </DineInButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  sx={{ width: '120px', paddingBottom: '0px' }}
                >
                  <DineInItem onClick={handleClose} >Profile</DineInItem>
                  <DineInItem onClick={handleClose} >My account</DineInItem>
                  <DineInItem onClick={handleClose} >Logout</DineInItem>
                </Menu>
              </OrderType>

              <div>
                <Typography sx={{
                  fontSize: {
                    xs: '8px',
                    sm: '10px',
                    md: '13px',
                    lg: '15px',
                    xl: '24px',
                  },
                  fontFamily: 'Quicksand',
                  fontWeight: '500',
                  color: 'white',
                  '@media (max-width: 400px)': {
                    fontSize: '12px'
                  }
                }}>
                  Table no.
                </Typography>
                <StyledTextField

                  // fullWidth
                  // value={dish.textboxValue}
                  // onChange={handleTextboxChange(index)}
                  type="number"
                  placeholder="Table no.."
                  variant="outlined"
                  size="small"
                  InputProps={{
                    style: {
                      color: 'white',
                      backgroundColor: '#393C49',
                      fontFamily: 'Quicksand',
                      fontSize: '17px',
                      borderRadius: '10px',
                    },
                  }}
                  sx={{
                    paddingTop: '5px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: '#555a70',
                      },
                      '&:hover fieldset': {
                        borderColor: '#555a70',
                      },
                      '&.Mui-focused fieldset': {
                        border: '1px solid white',
                        borderColor: 'white',
                      },
                      '& .MuiInputBase-input': {
                        width: '100%',
                      },
                    },
                  }}
                />
              </div>
            </OrderTypeTableWrapper>

            <ContinuePaymentWrapper>
              <Button
                sx={{
                  width: '50%',
                  border: '1px solid #f97f7f',
                  borderRadius: '8px',
                  color: 'white',
                  padding: '10px',
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
                    width: '30%',
                    fontSize: '10px',
                    // padding: '1px',
                    padding: '2px',
                  },
                }}>
                Cancel
              </Button>
              <Button
                sx={{
                  width: '50%',
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
                  '@media (max-width: 600px)': {
                    fontSize: '8px',
                    padding: '7px',
                  },
                  '@media (max-width: 400px)': {
                    width: '30%',
                    fontSize: '10px',
                    // padding: '1px',
                    padding: '1px',
                  },
                }}>
                Continue Payment
              </Button>
            </ContinuePaymentWrapper>
          </PaymentPageChildren>

        </PaymentPage>
      </CardContainer>
    </div>

  )
}

export default PopOverPage