import React from 'react';
import PropTypes from 'prop-types';
import { Chip, Grid, Typography } from '@mui/material';

function CompetencesList({ label, items, ...props }) {
    return (
        <Grid
            sx={{ marginTop: '16px' }}
            container
            alignItems="center"
            spacing={1}
            {...props}
        >
            <Grid item>
                <Typography variant="body2" data-testid="competence-label">
                    {label}
                </Typography>
            </Grid>
            {items.map((item, index) => (
                <Grid key={item} item>
                    <Chip
                        label={item}
                        color="primary"
                        data-testid={`competence-chip-${index}`}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default CompetencesList;

CompetencesList.propTypes = {
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
};
