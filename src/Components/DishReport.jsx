import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography, Avatar, Stack, Button, } from '@mui/material';


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

// Styled Components
const ReportWrapper = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    marginBottom: '90px'
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    height: '40%',
    overflowY: 'scroll',
    border: 'none',
    borderBottom: '1px solid #555a70',
    paddingBottom: '20px',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
}));

const StyledTable = styled(Table)(({ theme }) => ({
    width: '100%',
    borderCollapse: 'collapse',
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
    width: '100%',
    position: 'sticky',
    top: '0',
    backgroundColor: '#1F1D2B',
    zIndex: 1,
    '& .MuiTableCell-root': {
        position: 'sticky',
        color: '#fff',
        borderBottom: '1px solid #555a70',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    width: '100%',
}));

const CustomerCell = styled(TableCell)(({ theme }) => ({
    paddingLeft: '0',
}));

const MenuCell = styled(TableCell)(({ theme }) => ({
    paddingLeft: '40px',
}));

const TotalPriceCell = styled(TableCell)(({ theme }) => ({
    paddingRight: '0',
}));

const StatusCell = styled(TableCell)(({ theme }) => ({
    paddingRight: '0',
}));

const StyledTableBody = styled(TableBody)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#1F1D2B',
    borderBottom: '1px solid #555a70',
    '& .MuiTableCell-root': {
        color: '#c9cdce',
        borderBottom: 'none',
    },
}));

const StyledTableBodyRow = styled(TableRow)(({ theme }) => ({
    width: '100%',
    padding: '0',
    margin: '0',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Quicksand',
    color: '#e0e6e9',
    cursor: 'pointer',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    maxWidth: '150px',

}));

const DeleteButton = styled('button')(({ theme }) => ({
    border: '1px solid #EA6969',
    borderRadius: '10px',
    padding: theme.spacing(1),
    color: '#EA6969',
    '&:hover': {
        backgroundColor: '#f97f7f',
        color: 'white',
        border: 'none',
    },
    '&:focus': {
        backgroundColor: '#EA6969',
        color: 'white',
        border: '1px solid #555a70',
    },
}));


const DishReport = () => {
    const [expandedDishName, setExpandedDishName] = useState(null);

    // Handle Truncating of the DishName...//
    const handleDishName = (index) => {
        setExpandedDishName(index === expandedDishName ? null : index);
    };

    return (
        <ReportWrapper>
            <StyledTableContainer>
                <StyledTable>
                    <StyledTableHead>
                        <StyledTableRow>
                            <CustomerCell>
                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Customer</Typography>
                            </CustomerCell>
                            <MenuCell>
                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Menu</Typography>
                            </MenuCell>
                            <TotalPriceCell>
                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600', whiteSpace: 'nowrap' }}>
                                    Total Payment
                                </Typography>
                            </TotalPriceCell>
                            <StatusCell>
                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '17px', fontWeight: '600' }}>Status</Typography>
                            </StatusCell>
                        </StyledTableRow>
                    </StyledTableHead>

                    <StyledTableBody>
                        {dishes.map((dish, index) => (
                            <StyledTableBodyRow key={dish.customer}>
                                <TableCell sx={{ display: 'flex', gap: '15px', alignItems: 'center', whiteSpace: 'nowrap' }}>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar sx={{ backgroundColor: 'grey' }} alt={dish.customer} src={dish.imgSrc} />
                                    </Stack>
                                    <div>
                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '16px', color: '#e0e6e9' }}>{dish.customer}</Typography>
                                    </div>
                                </TableCell>

                                <MenuCell>
                                    <div>
                                        <StyledTypography sx={{
                                            overflow: expandedDishName === index ? 'visible' : 'hidden',
                                            textOverflow: expandedDishName === index ? 'unset' : 'ellipsis',
                                            whiteSpace: expandedDishName === index ? 'normal' : 'nowrap',
                                        }} onClick={() => handleDishName(index)}>
                                            {dish.name}
                                        </StyledTypography>
                                        <span>
                                            <Typography sx={{ fontFamily: 'Quicksand', fontSize: '12.5px', color: '#e0e6e9' }}>
                                                {dish.price}
                                            </Typography>
                                        </span>
                                    </div>
                                </MenuCell>

                                <TotalPriceCell>
                                    <Typography sx={{ fontFamily: 'Quicksand', fontSize: '16px', color: '#e0e6e9' }}>
                                        {dish.totalPrice}
                                    </Typography>
                                </TotalPriceCell>

                                <StatusCell sx={{ padding: 0 }}>
                                    <StatusCell sx={{ fontFamily: 'Quicksand', fontSize: '14px', textTransform: 'none', color: '#e0e6e9', backgroundColor: '#314c4e', borderRadius: '20px', padding: 0 }}>
                                        <Typography sx={{ fontFamily: 'Quicksand', fontSize: '14px', textTransform: 'none', color: '#e0e6e9', padding: 1 }}>Complete</Typography>
                                    </StatusCell>
                                </StatusCell>



                            </StyledTableBodyRow>
                        ))}
                    </StyledTableBody>
                </StyledTable>
            </StyledTableContainer>
        </ReportWrapper>
    );
}

export default DishReport