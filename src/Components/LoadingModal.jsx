// LoadingModal.js
import React from 'react';
import { Modal, CircularProgress, Typography, Box } from '@mui/material';

const LoadingModal = ({ open }) => {
    return (
        <Modal
            open={open}
            onClose={() => {}}
            aria-labelledby="loading-modal-title"
            aria-describedby="loading-modal-description"
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                    }}
                >
                    <CircularProgress />
                    <Typography sx={{ marginTop: '10px' }}>Processing...</Typography>
                </Box>
            </Box>
        </Modal>
    );
};

export default LoadingModal;
