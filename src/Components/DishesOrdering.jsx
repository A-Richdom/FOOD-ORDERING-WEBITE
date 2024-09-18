import React from 'react';
import { styled } from '@mui/material/styles';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Box, TextField, Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useSelector } from 'react-redux';
import { deSelectDish } from './FEATURES/DishesSlice';
import Marquee from 'react-fast-marquee';



// Styled components
const DishOrdering = styled('div')({
    height: '8% !important',
    width: '100%',
    paddingTop: '10px',
});

const StyledTableContainer = styled(TableContainer)({
    height: '55vh',
    overflowY: 'scroll !important',
    border: 'none !important',
    borderBottom: '1px solid #555a70',
    '&::-webkit-scrollbar': {
        display: 'none !important',
    },
    '@media (max-width: 450px)': {
        width: '65%'
    },
});

const StyledTable = styled(Table)({
    width: '100% !important',
    borderCollapse: 'collapse !important',
});

const TableHeadStyled = styled(TableHead)({
    width: '94% !important',
    backgroundColor: '#1F1D2B !important',
    zIndex: '1',
    border: 'none !important',
    '& .MuiTableCell-root': {
        position: 'sticky',
        color: '#fff !important',
        borderBottom: '1px solid #555a70 !important',
    },
});

const TableRowStyled = styled(TableRow)({
    width: '100% !important',
});

const ItemCell = styled(TableCell)({
    width: '100% !important',
    paddingLeft: '0 !important',
});

const QuantityCell = styled(TableCell)({
    width: '100% !important',
});

const TotalPriceCell = styled(TableCell)({
    width: '100% !important',
    paddingRight: '0 !important',
});

const TableBodyStyled = styled(TableBody)({
    width: '100% !important',
    backgroundColor: '#1F1D2B !important',
    borderBottom: '1px solid #555a70 !important',
    paddingRight: '0 !important',
    '& .MuiTableCell-root': {
        color: '#c9cdce !important',
        borderBottom: 'none !important',
    },
});

const TableBodyRow = styled(TableRow)({
    width: '100% !important',
    padding: '0 !important',
    margin: '0 !important',
});

const TableBodyItemCell = styled(TableCell)({
    paddingLeft: '0 !important',
    padding: '4px 8px !important',
});

const DishImgOrdering = styled('img')({
    width: '40px',
    height: '40px',
});

const TableBodyQuantityCell = styled(TableCell)({
    width: '100% !important',
    padding: '4px 8px !important',
});

const TableBodyTotalPriceCell = styled(TableCell)({
    width: '100% !important',
    paddingRight: '0 !important',
    padding: '4px 8px !important',
});

const TextFieldRow = styled(TableRow)({
    width: '100% !important',
    padding: '0px !important',
    marginTop: '0px !important',
});

const TextFieldCell = styled(TableCell)({
    paddingLeft: '0 !important',
    width: '100%',
    paddingTop: '14px !important',
    paddingBottom: '30px !important',
});

const StyledTextField = styled(TextField)({
    width: '100%',
});

const TruncateText = styled(Typography)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    maxWidth: '150px',
});

const FullText = styled(Typography)({
    cursor: 'pointer',
    maxWidth: '150px',
});

const DeleteBtnCell = styled(TableCell)({
    width: '100% !important',
    paddingTop: '14px !important',
    paddingRight: '0 !important',
    paddingBottom: '30px !important',
});

const DeleteBtn = styled(Button)(({ theme }) => ({
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
}));
const DishesOrdering = ({ dishes, selectedDishes, handleTextboxChange, handleDishName, expandedDishName }) => {

    console.log("SELECTED DISHES", selectedDishes);

    // const selectedDishes= useSelector((state) => state.selectedDishes.selectedDishes);

    return (
        <DishOrdering>
            <StyledTableContainer>
                <StyledTable>
                    <TableHeadStyled>
                        <TableRowStyled>
                            <ItemCell>
                                <Typography sx={{ fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Item</Typography>
                            </ItemCell>
                            <QuantityCell>
                                <Typography sx={{ display: 'flex', justifyContent: 'center', fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Qty</Typography>
                            </QuantityCell>
                            <TotalPriceCell>
                                <Typography sx={{ display: 'flex', justifyContent: 'right', paddingRight: '10px', fontFamily: 'Quicksand', fontSize: '18px', fontWeight: '600' }}>Price</Typography>
                            </TotalPriceCell>
                        </TableRowStyled>
                    </TableHeadStyled>

                    <TableBodyStyled>
                        {selectedDishes.length > 0 ? (
                            selectedDishes.map((dish, index) => (
                                <React.Fragment key={dish.name}>
                                    <TableBodyRow>
                                        <TableBodyItemCell sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <DishImgOrdering src={dish.imgSrc} alt={dish.name} />
                                            <div>
                                                {expandedDishName === index ? (
                                                    <FullText
                                                        onClick={() => handleDishName(index)}
                                                        sx={{
                                                            fontFamily: 'Quicksand',
                                                            fontSize: '18px',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        {dish.name}
                                                    </FullText>
                                                ) : (
                                                    <TruncateText
                                                        onClick={() => handleDishName(index)}
                                                        sx={{
                                                            fontFamily: 'Quicksand',
                                                            fontSize: '18px',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        {dish.name}
                                                    </TruncateText>
                                                )}
                                                <span>
                                                    <Typography
                                                        sx={{
                                                            fontFamily: 'Quicksand',
                                                            fontSize: '14.5px',
                                                            color: '#c9cdce',
                                                        }}
                                                    >
                                                        {dish.price}
                                                    </Typography>
                                                </span>
                                            </div>

                                        </TableBodyItemCell>
                                        <TableBodyQuantityCell>
                                            <Box component="form" sx={{ '& > :not(style)': { width: '6ch' } }} noValidate autoComplete="off">
                                                <StyledTextField
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
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        </TableBodyQuantityCell>
                                        <TableBodyTotalPriceCell>
                                            <Typography sx={{ display: 'flex', justifyContent: 'right', paddingRight: '10px', fontFamily: 'Quicksand', fontSize: '18px', color: 'white' }}>
                                                {dish.totalPrice}
                                            </Typography>
                                        </TableBodyTotalPriceCell>
                                    </TableBodyRow>
                                    <TextFieldRow>
                                        <TextFieldCell colSpan={2} sx={{ paddingLeft: '0px' }}>
                                            <StyledTextField
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
                                        </TextFieldCell>
                                        <DeleteBtnCell>
                                            <DeleteBtn onClick={() => dispatch(deSelectDish(dish.id))} variant="outlined" href="#outlined-buttons">
                                                <DeleteOutlineOutlinedIcon />
                                            </DeleteBtn>
                                        </DeleteBtnCell>
                                    </TextFieldRow>
                                </React.Fragment>
                            ))
                        ) : (
                            
                                <Marquee speed={70} gradient={false} pauseOnHover={true}>
                                    <Typography sx={{ color: 'white', fontFamily: 'Quicksand', fontSize: '18px', paddingRight: '20px', }}>No dishes selected</Typography>
                                </Marquee>
                        )} </TableBodyStyled> </StyledTable> </StyledTableContainer>
        </DishOrdering>
    )
}

export default DishesOrdering