import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Modal, Box, Typography, TextField, Button, Grid, IconButton, } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';


// Styled components
const FileInput = styled('input')({
    display: 'none',
});

const FileLabel = styled('label')({
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
});

const Label = styled('label')({
    color: '#EA6969',
    fontSize: '15px',
    '&.Mui-focused': {
        color: '#EA6969',
    },
});

const ImagePreview = styled('img')({
    maxWidth: '100%',
    maxHeight: '120px',
    marginTop: '10px',
    borderRadius: '5px',
});

const RemoveBorder = styled('div')({
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
            backgroundColor: 'transparent !important',
        },
        '& .MuiInputBase-input': {
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Quicksand',
            backgroundColor: 'transparent !important',
        },
        '& .MuiTableCell-root': {
            border: 'none',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'white',
        fontFamily: 'Quicksand',
    },
    '& .MuiInputLabel-shrink': {
        color: '#EA6969 !important',
    },
    '& .Mui-focused .MuiInputLabel-shrink': {
        color: 'white',
        fontFamily: 'Quicksand !important',
    },
});

const ErrorBorder = styled('div')({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red !important',
        },
        '&:hover fieldset': {
            borderColor: 'red !important',
        },
        '&.Mui-focused fieldset': {
            border: '1px solid red',
            borderColor: 'red',
        },
    },
    color: 'red',
});

const ErrorHelperText = styled('p')({
    color: 'red !important', // Customize the error message color here
    fontSize: '0.875rem', // Adjust the font size if needed..
});


const AddDishModal = ({ open, onClose, onAddDish, dishToEdit }) => {

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
            <Modal open={open} onClose={onClose}>
                <RemoveBorder>
                    <Box
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
                                <FileInput
                                    accept="image/*"
                                    id="upload-image"
                                    type="file"
                                    onChange={handleChange}
                                />
                                <FileLabel htmlFor="upload-image">
                                    <IconButton aria-label="upload picture" component="span" sx={{ color: '#EA6969', }}>
                                        <PhotoCamera />
                                    </IconButton>
                                    {dish.imgSrc && <ImagePreview src={dish.imgSrc} alt={dish.imgName} />}
                                </FileLabel>
                            </Grid>
                        </Grid>
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
                        <TextField className={errors.price ? ErrorBorder : RemoveBorder}
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
                                sx: {
                                    color: 'red',
                                    fontSize: '0.875rem',
                                },
                                // classes: {
                                //     root: ErrorHelperText,
                                // },
                            }}
                        />
                        <TextField className={errors.unitAvailable ? ErrorBorder : RemoveBorder}
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
                                sx: {
                                    color: 'red',
                                    fontSize: '0.875rem',
                                },
                                // classes: {
                                //     root: ErrorHelperText,
                                // },
                            }}
                        />
                        <TextField
                            margin="normal"
                            label="Quantity"
                            fullWidth
                            name="quantity"
                            type='number'
                            value={dish.quantity}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            label="Total Price"
                            fullWidth
                            name="totalPrice"
                            type='number'
                            value={dish.totalPrice}
                            onChange={handleChange}
                        />
                        <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2, backgroundColor: '#EA6969' }}>
                            {dishToEdit ? 'Update Dish' : 'Add Dish'}
                        </Button>
                    </Box>
                </RemoveBorder>
            </Modal>
        </>
    );

}

export default AddDishModal