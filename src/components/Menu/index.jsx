import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import WebMenu from 'components/WebMenu';
import MobileMenu from 'components/MobileMenu';

function Menu({ ...props }) {
    const items = [
        {
            text: 'Home',
            link: '/home',
        },
        {
            text: 'Projects',
            link: '/projects',
        },
        {
            text: 'About me',
            link: '/about-me',
        },
    ];

    return (
        <AppBar sx={{ marginBottom: '32px' }} position="static" {...props}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <MobileMenu items={items} />
                    <WebMenu items={items} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Menu;
