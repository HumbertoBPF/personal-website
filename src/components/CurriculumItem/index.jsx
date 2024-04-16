import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@mui/material';

function CurriculumItem({ item, ...props }) {
    return (
        <Box {...props}>
            <Typography variant="body2" data-testid="curriculum-item-title">
                {item.title}
            </Typography>
            <Typography
                variant="caption"
                data-testid="curriculum-item-description"
            >
                {item.description}
            </Typography>
            <Divider sx={{ margin: '16px 0px' }} />
        </Box>
    );
}

export default CurriculumItem;

CurriculumItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};
