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
    removeBorder: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#555a70 !important',
            },
            '&:hover fieldset': {
                borderColor: '#555a70 !important',
            },
            '&.Mui-focused fieldset': {
                border: '1px solid white !important',
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
    errorBorder: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red !important',
            },
            '&:hover fieldset': {
                borderColor: 'red !important',
            },
            '&.Mui-focused fieldset !important': {
                border: '1px solid red',
                borderColor: 'red',
            },
        },
        color: 'red'
    },
    errorHelperText: {
        color: 'red !important',  // Customize the error message color here
        fontSize: '0.875rem', // Adjust the font size if needed
    },
}));

const AddDishModal = ({ open, onClose, onAddDish, dishToEdit }) => {
    const classes = useStyles();

    const initialDishState = {
        id: '',
        imgSrc: '',
        imgName: '',
        name: '',
        price: '',
        quantity: '',
        unitAvailable: '',
    };

    const [dish, setDish] = useState(initialDishState);
    const [editDish, setEditDish] = useState(dishToEdit);
    const [price, setPrice] = useState('');
    const [unitAvailable, setUnitAvailable] = useState('');
    const [imgSrc, setImgSrc] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (dishToEdit) {
            setDish(dishToEdit);
        }
        else {
            setDish(initialDishState);
        }
        // const savedDishData = JSON.parse(localStorage.getItem('dishData'));
        // if (savedDishData) {
        //     setDish(savedDishData)
        //     setPrice(savedDishData.price ? parseFloat(savedDishData.price.replace('$', '')) : '');
        //     setUnitAvailable(savedDishData.unit ? parseFloat(savedDishData.unitAvailable.replace('Bowls', '')) : '');
        // }
    }, [dishToEdit]);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            if (files.length > 0) {
                const file = files[0];
                const reader = new FileReader();
                reader.onloadend = () => {

                    const base64String = reader.result;
                    console.log('Base64String', base64String);

                    const newDish = {
                        ...dish,
                        imageFile: file,
                        imgSrc: base64String, //Base64 encoded image
                        imgName: file.name,
                    };

                    setDish(newDish);

                    //Save data to local storage
                    localStorage.setItem('dishData', JSON.stringify(newDish));

                    // Verify that the data is saved to localStorage
                    console.log('Saved Dish Data:', JSON.parse(localStorage.getItem('dishData')));
                };

                reader.readAsDataURL(file);
            }
        } else if (name === 'price') {
            const rawValue = value.replace('$', '').replace(/[^0-9.]/g, '');
            const formattedValue = rawValue ? `$${rawValue}` : '';
            setDish({ ...dish, price: formattedValue });
            setPrice(rawValue);
        }
        else if (name === 'unitAvailable') {
            const rawValue = value.replace('$', '').replace(/[^0-9.]/g, '');
            const formattedValue = rawValue ? `${rawValue} Bowls` : '';
            setDish({ ...dish, unitAvailable: formattedValue });
            setUnitAvailable(rawValue);
        }
        else {
            setDish({ ...dish, [name]: value });
        };
    };

    const validationForm = () => {
        const newErrors = {};
        if (!dish.price) newErrors.price = 'Price is required';
        if (!dish.unitAvailable) newErrors.unitAvailable = 'Unit is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationForm()) {
            onAddDish(dish);
            setDish(initialDishState);

            setPrice('');
            setUnitAvailable('');
            onClose();
        }
    };

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
                        {dishToEdit ? 'Edit Dish' : 'Add New Dish'}
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
                            <label htmlFor="upload-image" className={classes.fileLabel}>
                                <IconButton aria-label="upload picture" component="span" sx={{ color: '#EA6969', }}>
                                    <PhotoCamera />
                                </IconButton>
                                {dish.imgSrc && <img src={dish.imgSrc} alt={dish.imgName} className={classes.imagePreview} />}
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
                    <TextField className={errors.price ? classes.errorBorder : classes.removeBorder}
                        margin="normal"
                        label="Price"
                        fullWidth
                        name="price"
                        type='text'
                        value={dish.price}
                        onChange={handleChange}
                        errors={!!errors.price}
                        helperText={errors.price}
                        FormHelperTextProps={{
                            classes: {
                                root: classes.errorHelperText,
                            },
                        }}
                    />
                    <TextField className={errors.unitAvailable ? classes.errorBorder : classes.removeBorder}
                        margin="normal"
                        label="Units Available"
                        fullWidth
                        name="unitAvailable"
                        type='text'
                        value={dish.unitAvailable}
                        onChange={handleChange}
                        errors={!!errors.unitAvailable}
                        helperText={errors.unitAvailable}
                        FormHelperTextProps={{
                            classes: {
                                root: classes.errorHelperText,
                            },
                        }}
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
                        {dishToEdit ? 'Update Dish' : 'Add Dish'}
                    </Button>
                </Box>
            </Modal>
        </>
    )
}
export default AddDishModal