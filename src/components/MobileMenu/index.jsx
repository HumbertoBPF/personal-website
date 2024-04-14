import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate } from 'react-router-dom';

function MobileMenu({ items }) {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <CodeIcon sx={{ display: { xs: 'flex', md: 'none' } }} />

            <Box
                sx={{
                    display: { xs: 'flex', md: 'none', flexGrow: 1 },
                }}
            >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {items.map((item) => (
                        <MenuItem
                            key={item.text}
                            onClick={() => {
                                navigate(item.link);
                                handleCloseNavMenu();
                            }}
                        >
                            <Typography textAlign="center">
                                {item.text}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}

export default MobileMenu;
