import React from 'react';
import { Alert, AlertTitle, Box, Button, Typography } from '@mui/material';
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
                    <AlertTitle data-testid="title">Page not found</AlertTitle>
                    <Typography variant="body2" data-testid="text">
                        The page that you tried to access doesn&apos;t exist.
                    </Typography>
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
                    data-testid="homepage-button"
                >
                    Go to the homepage
                </Button>
            </Box>
        </>
    );
}

export default NotFound;
