import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addDish } from './FEATURES/DishesSlice';

const AddDishModal = ({ open, onClose, onAddDish }) => {

    const dispatch = useDispatch();
    const [dish, setDish] = useState({
        imgSrc: '',
        name: '',
        price: '',
        unitAvailable: '',
        quantity: '',
        totalPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDish({ ...dish, [name]: value });
    };
    const handleSubmit = () => {
        onAddDish(dish);
        onClose();
    };

    // const handleSubmit = () => {
    //     dispatch(addDish(dishData));
    //     handleClose();
    // };


    return (
        <>
            <Modal open={open} onClose={onClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    height: 300,
                    background: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    padding: 2,
                    overflowY: 'scroll'
                }}>
                    <Typography variant="h6" component="h2">
                        Add New Dish
                    </Typography>

                    <TextField
                        margin="normal"
                        label="Image URL"
                        fullWidth
                        name="imgSrc"
                        value={dish.imgSrc}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Name"
                        fullWidth
                        name="name"
                        value={dish.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Price"
                        fullWidth
                        name="price"
                        value={dish.price}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Units Available"
                        fullWidth
                        name="unitAvailable"
                        value={dish.unitAvailable}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Quantity"
                        fullWidth
                        name="quantity"
                        value={dish.quantity}
                        onChange={handleChange}
                    />
                    <TextField
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