import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function FooterItem({ children, ...props }) {
    return (
        <Grid sx={{ padding: '8px' }} item {...props}>
            {children}
        </Grid>
    );
}

export default FooterItem;

FooterItem.propTypes = {
    children: PropTypes.node,
};
