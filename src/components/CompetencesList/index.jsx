import React from 'react';
import { Chip, Grid, Typography } from '@mui/material';

function CompetencesList({ label, items }) {
    return (
        <Grid
            sx={{ marginTop: '16px' }}
            container
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <Typography variant="body2">{label}</Typography>
            </Grid>
            {items.map((item) => (
                <Grid key={item} item>
                    <Chip label={item} color="primary" />
                </Grid>
            ))}
        </Grid>
    );
}

export default CompetencesList;
