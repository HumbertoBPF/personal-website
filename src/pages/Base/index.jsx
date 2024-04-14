import Footer from 'components/Footer';
import Menu from 'components/Menu';
import React from 'react';
import { Outlet } from 'react-router-dom';

function Base() {
    return (
        <>
            <Menu />
            <Outlet />
            <Footer />
        </>
    );
}

export default Base;
