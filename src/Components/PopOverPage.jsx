import React, { useState } from 'react'
import { Card, CardContent, Typography, Button, TextField, Menu, MenuItem, Fade } from '@mui/material'
import { makeStyles } from '@mui/styles';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import AddIcon from '@mui/icons-material/Add';
import DishesOrdering from './DishesOrdering';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { selectDish } from './FEATURES/DishesSlice';
import { useSelector } from 'react-redux';
import DishesSlice from './FEATURES/DishesSlice';


const useStyles = makeStyles((theme) => ({

  cardContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: 2,
    width: '60%',
    display: 'flex',
    borderRadius: '15px !important',
    '@media (max-width: 960px)': {
      width: '100%'
    }
  },
  popOverPageVisible: {
      right: 0,
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
    '@media (max-width: 960px)': {
      width: '40%',
      borderRight: 'none',
    },
  },
  confirmationPageChildren: {
    flex: 1
    , width: '100%',
    '@media (max-width: 400px)': {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      // height: '100%'
    }
    // // height: '100vh',
    //     overflowY: 'scroll',
    //     // overflowX: 'hidden',
    //     '&::-webkit-scrollbar': {
    //         display: 'none',
    //     },
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
    paddingTop: '50px !important',
    '@media (max-width: 600px)': {
      fontSize: '12px',
      padding: '8px',
      paddingToP: '35px'
    },
    '@media (max-width: 400px)': {
      fontSize: '10px',
      padding: '6px',
      paddingToP: '35px'
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
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1f1d2b',
    '@media (max-width: 960px)': {
      width: '60%',
    },
  },
  paymentPageChildren: {
    width: '100%',
    paddingToP: '20px !important',
    height: '95%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  paymentPageNav: {
    paddingToP: '50px !important',
    borderBottom: '1px solid #555a70 !important',
  },
  paymentMethodBtns: {
    display: 'flex',
    gap: '10px',
    paddingBottom: '5px',
    width: '100%',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  paymentMethodBtn: {
    border: '1px solid #393c49 !important',
    borderRadius: '10px !important',
    padding: '7px 12px !important',
    color: '#abbbc2 !important',
    transition: 'border 0.3s ease, background-color 0.3s ease, color 0.3s ease !important',
    // padding: theme.spacing(1),
    '&:hover': {
      border: '1.4px solid #abbbc2 !important',
      backgroundColor: 'inherit !important',
      color: 'white !important',
    },
    '&:focus': {
      color: 'white !important',
      border: '1.4px solid #abbbc2 !important',
    },
  },
  creditCardBtn: {
    padding: '7px 12px !important',
  },
  paypalBtn: {
    padding: '7px 18px !important',
  },
  cashBtn: {
    padding: '7px 22px !important',
  },
  creditCard: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap !important',
    alignItems: 'center',
  },
  paypal: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap !important',
    alignItems: 'center',
  },
  cash: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap !important',
    alignItems: 'center',
  },
  cardName: {
    paddingBottom: '10px',
    // paddingToP: '20px !important'
  },
  cardNumber: {
    paddingBottom: '10px !important',
  },
  expCvvWrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '10px',
    paddingBottom: '10px',
    '@media (max-width: 600px)': {
      display: 'flex',
      flexWrap: 'wrap',
    },
    '@media (max-width: 400px)': {
      display: 'flex',
      flexWrap: 'wrap',
    }
  },
  orderTypeTableWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '30px',
    '@media (max-width: 400px)': {
      gap: '15px',
    }
  },
  orderType: {
    paddingToP: '10px',
  },
  dineInIcon: {
    transition: 'transform 0.5s ease !important',
  },
  dineInButton: {
    textTransform: 'none !important',
    backgroundColor: '#1F1D2B !important',
    padding: '4px 3px !important',
    border: '1px solid #393c49 !important',
    '&:hover': {
      backgroundColor: '#393C49 !important'
    },
    '&:focus $dineInIcon': {
      transform: 'rotate(180deg)',
    },
  },
  dineInItem: {
    fontSize: '12px !important',
    fontFamily: 'Quicksand',
    // paddingToP: '20px',
    '&:hover': {
      backgroundColor: '#393C49 !important',
      color: 'white',
      borderRadius: '3px',
      padding: theme.spacing(1, 2)
    },
  },
  textField: {
    '@media (max-width: 600px)': {
      '& .MuiOutlinedInput-root': {
        '& .MuiInputBase-input': {
          fontSize: '14px',
          padding: '6px',
        },
      },
      // Media query for medium screens
      '@media (max-width: 400px)': {
        '& .MuiOutlinedInput-root': {
          '& .MuiInputBase-input': {
            fontSize: '15px',
            padding: '7px',
          },
        },
      },
    }
  },
  continuePaymentWrapper: {
    display: 'flex',
    gap: '15px',
    paddingTop: '25px',
    '@media (max-width: 600px)': {
      display: 'flex',
      gap: '20px',
    },
    '@media (max-width: 400px)': {
      display: 'flex',
      gap: '25px',
      paddingBottom: '25px'
    },
  },


}));

// console.log(dishes);

const PopOverPage = ({ selectedDishes, onClose }) => {
  const classes = useStyles();
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
      <Card className={classes.cardContainer}>

        {/* CONFIRMATION PAGE */}
        <CardContent className={classes.confirmationPage}>
          <div className={classes.confirmationPageChildren}>
            <span><KeyboardBackspaceOutlinedIcon onClick={onClose}
              sx={{
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.4s ease-in-out',
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
              className={classes.dishesOrdering}
              selectedDishes={selectedDishes}
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

            <div className={classes.paymentPageNav}>
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
            </div>

            <div className={classes.paymentPageBody}>
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

              <div className={classes.paymentMethodBtns}>
                <Button className={`${classes.paymentMethodBtn} ${classes.creditCardBtn}`}
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <span className={classes.creditCard}>
                    <CreditCardOutlinedIcon />
                    Credit Card
                  </span>
                </Button>
                <Button className={`${classes.paymentMethodBtn} ${classes.paypalBtn}`}
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <span className={classes.paypal}>
                    <CreditCardOutlinedIcon />
                    Paypal
                  </span>
                </Button>
                <Button className={`${classes.paymentMethodBtn} ${classes.cashBtn}`}
                  variant="outlined"
                  href="#outlined-buttons"
                  sx={{
                    minWidth: 'unset',
                    textTransform: 'none',
                    fontSize: '14px',
                    fontFamily: 'Quicksand'
                  }}>
                  <span className={classes.cash}>
                    <CreditCardOutlinedIcon />
                    Cash
                  </span>
                </Button>
              </div>

              <div className={classes.cardName}>
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
                <TextField
                  className={classes.textField}
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
              </div>

              <div className={classes.cardNumber}>
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
                <TextField
                  className={classes.textField}
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
              </div>

              <div className={classes.expCvvWrapper}>
                <div className={classes.expDate}>
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
                  <TextField
                    className={classes.textField}
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
                <div className={classes.cvv}>
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
                  <TextField
                    className={classes.textField}
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
              </div>

              <div className={classes.orderTypeTableWrapper}>
                <div className={classes.orderType}>
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
                  <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className={classes.dineInButton}
                  >
                    <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Quicksand', display: 'flex', alignItems: 'center', gap: '3px', padding: '0px 5px' }}>
                      <KeyboardArrowDownIcon className={classes.dineInIcon} />
                      Dine in
                    </Typography>
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    className={classes.dineInList}
                    sx={{ width: '120px', paddingBottom: '0px' }}
                  >
                    <MenuItem onClick={handleClose} className={classes.dineInItem}>Profile</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.dineInItem}>My account</MenuItem>
                    <MenuItem onClick={handleClose} className={classes.dineInItem}>Logout</MenuItem>
                  </Menu>
                </div>

                <div className={classes.tableNo}>
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
                  <TextField
                    className={classes.textField}
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
              </div>

              <div className={classes.continuePaymentWrapper}>
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
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default PopOverPage