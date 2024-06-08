import React, { useState } from 'react'
import {
  Card, CardContent, Box, Drawer, colors, styled, Button, Menu, MenuItem, Fade, TextField, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, 
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


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
  cardWrapper: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    backgroundColor: 'transparent !important'
  },  
  //Confirmation Page...//
  rightBar: {
    width: '35%',
    backgroundColor: '#1F1D2B !important',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rightBarChildren: {
    width: '100% !important',
  },
  orderBtnWrapper: {
    display: 'flex !important',
    flexWrap: 'wrap !important',
    gap: '8px !important',
    paddingTop: '20px'
  },
  orderBtn: {
    fontFamily: 'Quicksand !important',
    fontWeight: '600 !important',
    textTransform: 'none !important',
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
  dishesOrdering: {
    height: '13.6% !important',
    width: '100%',
    paddingTop: '10px',
  },
  tableContainer: {
    height: '100%',
    overflowY: 'scroll',
    border: 'none !important',
    borderBottom: '1px solid #555a70',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  table: {
    width: '100% !important',
    borderCollapse: 'collapse !imporant'
  },
  // TABLE HEADER..//
  tableHead: {
    width: '100% !important',
    position: 'sticky !important',
    top: '0',
    backgroundColor: '#1F1D2B !important',
    zIndex: '1',
    border: 'none !important',

    '& .MuiTableCell-root': {
      position: 'sticky',
      color: '#fff !important',
      borderBottom: '1px solid #555a70 !important',
    },
  },
  tableHeadRow: {
    width: '100% !important',
  },
  itemCell: {
    width: '100% !important',
    paddingLeft: '0 !important',
  },
  quantityCell: {
    width: '100% !important',
  },
  totalPriceCell: {
    width: '100% !important',
    paddingRight: '0 !important'
  },

  // TABLE BODY...//
  tableBody: {
    width: '100% !important',
    backgroundColor: '#1F1D2B !important',
    borderBottom: '1px solid #555a70 !important',
    // border: 'none !important',
    '& .MuiTableCell-root': {
      color: '#c9cdce !important',
      borderBottom: 'none !important',
    },
  },
  tableBodyRow: {
    width: '100% !important',
    padding: '0 !important',
    margin: '0 !important',
  },
  tableBodyItemCell: {
    // width: '94% !important',
    paddingLeft: '0 !important',
    padding: '4px 8px !important',
  },
  dishImgOrdering: {
    width: '40px',
    height: '40px',
  },
  tableBodyQuantityCell: {
    width: '100% !important',
    padding: '4px 8px !important',
  },
  tableBodyTotalPriceCell: {
    width: '100% !important',
    paddingRight: '0 !important',
    padding: '4px 8px !important',
  },
  textFieldRow: {
    width: '100% !important',
    padding: '0px !important',
    marginTop: '0px !important',
  },
  textFieldCell: {
    paddingLeft: '0 !important',
    width: '100%',
    paddingTop: '14px !important',
    paddingBottom: '30px !important',
  },
  textField: {
    width: '100%',
  },
  truncateText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    maxWidth: '150px',
  },
  fullText: {
    cursor: 'pointer',
    maxWidth: '150px',
  },
  deleteBtnCell: {
    width: '100% !important',
    paddingTop: '14px !important',
    paddingRight: '0 !important',
    paddingBottom: '30px !important',
  },
  deleteBtn: {
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
  paymentWrapper: {
    display: 'flex',
    flexWrap: 'wrap !important',
    flexDirection: 'column',
    gap: '10px',
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
  }
}));

const PopOverPage = () => {
  const classes = useStyles();
  const [expandedDishName, setExpandedDishName] = useState(null);
  // text field
  const [name, setName] = React.useState('');

  
  // Confirmation Page...//
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
      <Card>
        {/* CONFIRMATION PAGE */}
        <CardContent className={classes.rightBar}>
          <div className={classes.rightBarChildren}>
            <Typography sx={{
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '18px',
                lg: '25px',
                xl: '24px',
              },
              fontWeight: '400',
              color: 'white',
            }}>
              Orders #23244
            </Typography>
            <div className={classes.orderBtnWrapper}>
              <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                Dine In
              </Button>
              <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                To Go
              </Button>
              <Button className={classes.orderBtn} variant="outlined" href="#outlined-buttons">
                Delivery
              </Button>
            </div>

            {/* Dishes-Ordering */}
            <div className={classes.dishesOrdering}>
              <TableContainer className={classes.tableContainer}>
                <Table className={classes.table}>
                  <TableHead className={classes.tableHead}>
                    <TableRow className={classes.tableHeadRow}>
                      <TableCell className={classes.itemCell}><Typography sx={{ fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Item</Typography></TableCell>

                      <TableCell className={classes.quantityCell}><Typography sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Qty</Typography></TableCell>

                      <TableCell className={classes.totalPriceCell}><Typography sx={{ display: 'flex', justifyContent: 'right', paddingRight: '10px', fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Price</Typography></TableCell>
                    </TableRow>
                  </TableHead>

                  {/* TABLE BODY */}
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

                            <TableCell className={classes.tableBodyQuantityCell}>
                              <Box
                                component="form"
                                sx={{
                                  '& > :not(style)': { width: '6ch' },
                                }}
                                noValidate
                                autoComplete="off"
                              >
                                <TextField
                                  id="outlined-uncontrolled"
                                  value={dish.quantity}
                                  InputProps={{
                                    style: {
                                      color: 'white',
                                      backgroundColor: '#393C49',
                                      fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '500',
                                      borderRadius: '10px',
                                    },
                                  }}
                                  sx={{
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
                                        textAlign: 'center',
                                      },
                                      '& .MuiTableCell-root': {
                                        border: 'none'
                                      }
                                    },
                                  }}
                                />
                              </Box>
                            </TableCell>

                            <TableCell className={classes.tableBodyTotalPriceCell}><Typography sx={{ display: 'flex', justifyContent: 'right', paddingRight: '10px', fontFamily: 'Quicksand', fontSize: '18px', color: 'white' }}>{dish.totalPrice}</Typography></TableCell>
                          </TableRow>

                          <TableRow className={classes.textFieldRow}>

                            <TableCell className={classes.textFieldCell} colSpan={2} sx={{ paddingLeft: '0px' }}>
                              <TextField
                                className={classes.textField}
                                fullWidth
                                value={dish.textboxValue}
                                onChange={handleTextboxChange(index)}
                                placeholder="Order Note..."
                                variant="outlined"
                                size="large"
                                InputProps={{
                                  style: {
                                    color: 'white',
                                    backgroundColor: '#393C49',
                                    fontFamily: 'Quicksand', fontSize: '17px',
                                    borderRadius: '10px',
                                  },
                                }}
                                sx={{
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
                            </TableCell>

                            <TableCell className={classes.deleteBtnCell}>
                              <Button className={classes.deleteBtn} variant="outlined" href="#outlined-buttons"
                                sx={{
                                  border: '1px solid #EA6969',
                                  borderRadius: '10px',
                                  padding: '14px 14px',
                                  color: '#EA6969',
                                  minWidth: 'unset',
                                }}>
                                <DeleteOutlineOutlinedIcon />
                              </Button>
                            </TableCell>

                          </TableRow>
                        </React.Fragment>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>

            </div>
            {/* Payment Wrapper */}
            <div className={classes.paymentWrapper} sx={{ border: '1px solid red', backgroundColor: 'red', paddingTop: '20px' }}>
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
              <Button
                sx={{
                  backgroundColor: '#f97f7f',
                  color: 'white',
                  padding: '10px',
                  textTransform: 'none',
                  fontFamily: 'Quicksand',
                  fontSize: '14px',
                  fontWeight: '600',
                  '@media (max-width: 600px)': {
                    fontSize: '12px',
                    padding: '8px',
                  },
                  '@media (max-width: 400px)': {
                    width: '90%',
                    fontSize: '10px',
                    // padding: '1px',
                    padding: '1px',
                  },
                }}>
                Continue to Payment
              </Button>
            </div>
          </div>
        </CardContent>

      </Card>
    </div>
  )
}

export default PopOverPage