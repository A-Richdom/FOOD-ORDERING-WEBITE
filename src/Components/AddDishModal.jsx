import React, { useEffect, useState } from 'react'
import { Modal, Box, Typography, TextField, Button, Grid, IconButton, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PhotoCamera } from '@mui/icons-material';


const useStyles = makeStyles((theme) => ({
    fileInput: {
        display: 'none',
    },
    fileLabel: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '8px',
        backgroundColor: '#393C49',
        borderRadius: '4px',
        border: '1px solid #555a70',
        '&:hover': {
            backgroundColor: '#555a70',
        },
    },
    removeBorder: {
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
                '&::placeholder': {
                    color: '#EA6969 !important', 
                    opacity: 1,
                },
            },
            '& .MuiTableCell-root': {
                border: 'none'
            },
        },
    },
    label: {
        color: '#EA6969',
        fontSize: '15px',
        '&.Mui-focused': {
            color: '#EA6969',
        },
    },
    imagePreview: {
        maxWidth: '100%',
        maxHeight: '120px',
        marginTop: '10px',
        borderRadius: '5px',
    },

}));

const AddDishModal = ({ open, onClose, onAddDish }) => {

    const initialDishState = {
        imgSrc: '',
        imgName: '',
        name: '',
        price: '',
        quantity: '',
        unitAvailable: '',
    };

    const [dish, setDish] = useState(initialDishState);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            if (files.length > 0) {
                const file = files[0];
                setDish((dish) => ({
                    ...dish,
                    imageFile: file,
                    imgSrc: URL.createObjectURL(file),
                    imgName: file.name, // store the file name
                }));
            }
        }
        else {
            setDish({ ...dish, [name]: value });
        }
    };

    const handleSubmit = () => {
        onAddDish(dish);
        setDish(initialDishState);
        onClose();
    };
    
    useEffect(() => {
        return () => {
            if (dish.imgSrc) {
                URL.revokeObjectURL(dish.imgSrc);
            }
        };
    }, [dish.imgSrc]);
    

    const classes = useStyles();

    return (
        <>
            <Modal open={open} onClose={onClose} className={classes.removeBorder}
            >
                <Box className={classes.removeBorder}
                    sx={{
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
                    <Typography variant="h6" color="white" component="h2">
                        Add New Dish
                    </Typography>

                    <Grid>
                        <Grid item>
                            <Typography sx={{ fontFamily: 'Quicksand', color: 'white', marginTop: '10px' }}>Upload Image</Typography>
                        </Grid>
                        <Grid item>
                            <input
                                accept="image/*"
                                className={classes.fileInput}
                                id="upload-image"
                                type="file"
                                onChange={handleChange}
                            />
                            <label  htmlFor="upload-image" className={classes.fileLabel}>
                                <IconButton aria-label="upload picture" component="span" sx={{ color: '#EA6969', }}>
                                    <PhotoCamera />
                                </IconButton>
                                {dish.imgSrc && <img src={dish.imgSrc} alt="Preview" className={classes.imagePreview} />}
                            </label>
                        </Grid>
                    </Grid>
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Image URL"
                        fullWidth
                        name="imgSrc"
                        value={dish.imgSrc}
                        onChange={handleChange}

                    />
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Name"
                        fullWidth
                        name="name"
                        value={dish.name}
                        onChange={handleChange}
                    />
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Price"
                        fullWidth
                        name="price"
                        type='number'
                        value={dish.price}
                        onChange={handleChange}
                    />
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Units Available"
                        fullWidth
                        name="unitAvailable"
                        type='number'
                        value={dish.unitAvailable}
                        onChange={handleChange}
                    />
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Quantity"
                        fullWidth
                        name="quantity"
                        type='number'
                        value={dish.quantity}
                        onChange={handleChange}
                    />
                    <TextField className={classes.removeBorder}
                        margin="normal"
                        label="Total Price"
                        fullWidth
                        name="totalPrice"
                        type='number'
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