import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography, Avatar, Stack, } from '@mui/material';


const dishes = [
    {
        customer: 'Harry Richdom01',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted Pesta Seasoningg',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '3',
        totalPrice: '$10.26',
    },
    {
        customer: 'Harry Richdom02',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Ice creem sandwich',
        price: '$1.06',
        unitAvailable: '10 Bowls Available',
        quantity: '6',
        totalPrice: '$20.56',
    },
    {
        customer: 'Harry Richdom03',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '5 Bowls Available',
        quantity: '9',
        totalPrice: '$105.50',
    },
    {
        customer: 'Harry Richdom04',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Fresh Youghout',
        price: '$3.33',
        unitAvailable: '4 Bowls Available',
        quantity: '2',
        totalPrice: '$20.89',
    },
    {
        customer: 'Harry Richdom05',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pasta with asorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '35',
        totalPrice: '$70.00',
    },
    {
        customer: 'Harry Richdom06',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Instant Noodles with egg',
        price: '$10.33',
        unitAvailable: '10 Bowls Available',
        quantity: '1',
        totalPrice: '$10.56',
    },
    {
        customer: 'Harry Richdom07',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted Pasta Seasooning',
        price: '$3.42',
        unitAvailable: '20 Bowls Available',
        quantity: '120',
        totalPrice: '$490.45',
    },
    {
        customer: 'Harry Richdom08',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Ice cream sandwich',
        price: '$1.06',
        unitAvailable: '3 Bowls Available',
        quantity: '3',
        totalPrice: '$23.11',
    },
    {
        customer: 'Harry Richdom09',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Spicy Instant Noodles',
        price: '$1.33',
        unitAvailable: '10 Bowls Available',
        quantity: '25',
        totalPrice: '$24.33',
    },
    {
        customer: 'Harry Richdom10',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Fresh Yooughout',
        price: '$3.33',
        unitAvailable: '20 Bowl Available',
        quantity: '3',
        totalPrice: '$10.11',
    },
    {
        customer: 'Harry Richdom11',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pasta with assorted fish',
        price: '$2.33',
        unitAvailable: '20 Bowl Available',
        quantity: '10',
        totalPrice: '$4.76',
    },
    {
        customer: 'Harry Richdom12',
        imgSrc: 'CustomerImages/customer.jpg',
        name: 'Salted pastaa with assorted meat',
        price: '$2.33',
        unitAvailable: '15 Bowls Available',
        quantity: '11',
        totalPrice: '$22.33',
    },
];

const useStyles = makeStyles((theme) => ({
    reportWrapper: {
        width: '100%',
        height: '100vh !important'
    },
    tableContainer: {
        height: '50% !important',
        overflowY: 'scroll',
        border: 'none !important',
        borderBottom: '1px solid #555a70',
        paddingBottom: '20px',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    table: {
        width: '100% !important',
        borderCollapse: 'collapse !imporant',
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
    customerCell: {
        paddingLeft: '0 !important',
    },
    menuCell: {
        paddingLeft: '40px !important',
    },
    totalPriceCell: {
        paddingRight: '0 !important'
    },
    statusCell: {
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
    tableBodyCustomerCell: {
        width: '100% !important',
        paddingLeft: '0 !important',
        padding: '4px 8px !important',
    },
    dishImgOrdering: {
        width: '40px',
        height: '40px',
    },
    tableBodyMenuCell: {
        width: '100% !important',
        paddingLeft: '40px !important',
        padding: '4px 8px !important',
    },
    tableBodyTotalPriceCell: {
        width: '100% !important',
        paddingLeft: '20px !important',
        padding: '4px 8px !important',
    },
    tableBodyStatusCell: {
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

}));

const DishReport = () => {
    const classes = useStyles();
    const [expandedDishName, setExpandedDishName] = useState(null);

    // Handle Truncating of the DishName...//
    const handleDishName = (index) => {
        setExpandedDishName(index === expandedDishName ? null : index);
    };


    return (
        <div className={classes.reportWrapper}>
            <TableContainer className={classes.tableContainer}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow className={classes.tableHeadRow}>
                            <TableCell className={classes.customerCell}
                            >

                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Customer</Typography>
                            </TableCell>

                            <TableCell className={classes.menuCell}
                            >
                                <Typography sx={{ display: 'flex', alignItems: 'left', justifyContent: 'left', paddingLeft: '0', fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Menu</Typography>
                            </TableCell>

                            <TableCell className={classes.totalPaymentCell}>
                                <Typography sx={{ display: 'flex', justifyContent: 'left', paddingRight: '10px', fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600', whiteSpace: 'nowrap', }}>Total Payment</Typography>
                            </TableCell>

                            <TableCell className={classes.statusCell}>
                                <Typography sx={{ display: 'flex', justifyContent: 'left', paddingRight: '20px', fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Status</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* TABLE BODY */}
                    <TableBody className={classes.tableBody}>
                        {
                            dishes.map((dish, index) => (
                                <React.Fragment key={dish.customer}>
                                    <TableRow className={classes.tableBodyRow}>
                                        <TableCell className={classes.tableBodyCustomerCell} sx={{ display: 'flex', gap: '15px', alignItems: 'center', whiteSpace: 'nowrap' }}>

                                            {/* dish image */}
                                            <Stack direction="row" spacing={2}>
                                                <Avatar
                                                    sx={{ backgroundColor: 'grey' }}
                                                    alt={dish.customer}
                                                    src={dish.imgSrc}
                                                />
                                            </Stack>

                                            <div>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'Quicksand', fontSize: '16px',
                                                        color: '#e0e6e9'
                                                    }}
                                                >
                                                    {dish.customer}
                                                </Typography>
                                            </div>

                                        </TableCell>

                                        {/*  menu list*/}
                                        <TableCell className={classes.tableBodyMenuCell}>
                                            <div>
                                                <Typography className={expandedDishName === index ? classes.fullText : classes.truncateText}

                                                    sx={{
                                                        fontFamily: 'Quicksand', fontSize: '16px',
                                                        color: '#e0e6e9'
                                                    }}

                                                    onClick={() => handleDishName(index)}
                                                >
                                                    {dish.name}
                                                </Typography>

                                                <span>
                                                    <Typography className={classes.tableBodyPriceCell} sx={{
                                                        fontFamily: 'Quicksand', fontSize: '12.5px', color: '#e0e6e9',
                                                    }}>{dish.price}
                                                    </Typography>
                                                </span>
                                            </div>
                                        </TableCell>


                                        <TableCell className={classes.tableBodyTotalPriceCell}><Typography sx={{ display: 'flex', justifyContent: 'left', fontFamily: 'Quicksand', fontSize: '16px', color: '#e0e6e9' }}>{dish.totalPrice}</Typography>
                                        </TableCell>

                                        <TableCell className={classes.tableBodyStatusCell}><Typography sx={{ display: 'flex', justifyContent: 'left', fontFamily: 'Quicksand', fontSize: '16px', color: '#e0e6e9' }}>{dish.totalPrice}</Typography>
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

export default DishReport