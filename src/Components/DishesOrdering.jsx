import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, TextField, Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({

    dishesOrdering: {
        height: '50% !important',
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
        paddingRight: '0 !important',
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
        padding: theme.spacing(2),
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

}));

const DishesOrdering = ({ dishes, handleTextboxChange, handleDishName, expandedDishName }) => {
    const classes = useStyles();
    // const orderedDishes = useSelector((state) => state.dishes.orderedDishes)

    return (
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
                                dishes && dishes.map((dish, index) => (
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
                                                        display: 'flex',
                                                        border: '1px solid #EA6969',
                                                        borderRadius: '10px',
                                                        padding: '16px 14px',
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
       
    )
}

export default DishesOrdering