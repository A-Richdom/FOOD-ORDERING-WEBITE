import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button, } from '@mui/material';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';

const AddDishModal = ({ open, onClose, onAddDish }) => {

    const [dish, setDish] = useState({
        imgSrc: '',
        name: '',
        price: '',
        unitAvailable: '',
        quantity: '',
        totalPrice: '',
    });

    const useStyles = makeStyles((theme) => ({
        textFieldBorder: {
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
        },
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDish({ ...dish, [name]: value });
    };

    const handleSubmit = () => {
        onAddDish(dish);
        onClose();
    };

    const classes = useStyles();


    return (
        <>
            <Modal open={open} onClose={onClose}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    height: 300,
                    backgroundColor: '#393C49',
                    border: 'none',
                    borderRadius: '15px',
                    boxShadow: 36,
                    padding: 2,

                    overflowY: 'scroll',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                    <Typography variant="h6" component="h2">
                        Add New Dish
                    </Typography>

                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Image URL"
                        fullWidth
                        name="imgSrc"
                        value={dish.imgSrc}
                        onChange={handleChange}
                    />
                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Name"
                        fullWidth
                        name="name"
                        value={dish.name}
                        onChange={handleChange}
                    />
                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Price"
                        fullWidth
                        name="price"
                        value={dish.price}
                        onChange={handleChange}
                    />
                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Units Available"
                        fullWidth
                        name="unitAvailable"
                        value={dish.unitAvailable}
                        onChange={handleChange}
                    />
                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Quantity"
                        fullWidth
                        name="quantity"
                        value={dish.quantity}
                        onChange={handleChange}
                    />
                    <TextField className={classes.textFieldBorder}
                        margin="normal"
                        label="Total Price"
                        fullWidth
                        name="totalPrice"
                        value={dish.totalPrice}
                        onChange={handleChange}
                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Add Dish
                    </Button>

                </Box>
            </Modal>

        </>
    )
}

export default AddDishModal