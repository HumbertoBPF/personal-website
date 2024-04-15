import React from 'react';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <Alert
                sx={{
                    '&.MuiPaper-root': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '0',
                    },
                }}
                severity="error"
                variant="filled"
            >
                <Box>
                    <AlertTitle>Page not found</AlertTitle>
                    The page that you tried to access doesn't exist.
                </Box>
            </Alert>
            <Box
                sx={{ backgroundColor: 'error.main' }}
                display="flex"
                justifyContent="center"
            >
                <Button
                    sx={{ margin: '0 0 16px 0' }}
                    variant="contained"
                    onClick={() => navigate('/home')}
                >
                    Go to the homepage
                </Button>
            </Box>
        </>
    );
}

export default NotFound;
