import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function WebMenu({ items }) {
    const navigate = useNavigate();

    return (
        <>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                }}
            >
                {items.map((item) => (
                    <Button
                        key={item.text}
                        onClick={() => navigate(item.link)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {item.text}
                    </Button>
                ))}
            </Box>
        </>
    );
}

export default WebMenu;
