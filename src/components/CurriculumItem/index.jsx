import React from 'react';
import { Divider, Typography } from '@mui/material';

function CurriculumItem({ item }) {
    return (
        <>
            <Typography variant="body2">{item.title}</Typography>
            <Typography variant="caption">{item.description}</Typography>
            <Divider sx={{ margin: '16px 0px' }} />
        </>
    );
}

export default CurriculumItem;
