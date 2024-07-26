import React, { useState } from 'react'
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addDish } from './FEATURES/DishesSlice';

const AddNewDishModal = ({ open, handleClose }) => {

    const dispatch = useDispatch();
    const [dishData, setDishData] = useState({
        imgSrc: '',
        name: '',
        price: '',
        unitAvailable: '',
        quantity: '',
        totalPrice: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDishData({ ...dishData, [name]: value });
    };

    const handleAddDish = () => {
        dispatch(addDish(dishData));
        handleClose();
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    background: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: '24',
                    padding: 4,
                }}>
                    <Typography variant="h6" component="h2">
                        Add New Dish
                    </Typography>
                    <TextField
                        margin="normal"
                        label="Image URL"
                        fullWidth
                        name="imgSrc"
                        value={dishData.imgSrc}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Name"
                        fullWidth
                        name="name"
                        value={dishData.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Price"
                        fullWidth
                        name="price"
                        value={dishData.price}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Units Available"
                        fullWidth
                        name="unitAvailable"
                        value={dishData.unitAvailable}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Quantity"
                        fullWidth
                        name="quantity"
                        value={dishData.quantity}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        label="Total Price"
                        fullWidth
                        name="totalPrice"
                        value={dishData.totalPrice}
                        onChange={handleChange}
                    />
                    <Button onClick={handleAddDish} variant="contained" color="primary" sx={{ mt: 2 }}>
                        Add Dish
                    </Button>

                </Box>
            </Modal>

        </>
    )
}

export default AddNewDishModal