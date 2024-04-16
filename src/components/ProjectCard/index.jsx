import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

function ProjectCard({ item, ...props }) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column' }} {...props}>
            <CardMedia
                sx={{ objectFit: 'contain', backgroundColor: '#eeeeee' }}
                component="img"
                alt={item.title}
                height="140"
                image={item.image}
                data-testid="project-image"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    data-testid="project-title"
                >
                    {item.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    data-testid="project-description"
                >
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ flexGrow: 1, alignItems: 'end' }}>
                <Button
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    size="small"
                    data-testid="project-button"
                >
                    See on GitHub
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;

ProjectCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
    }),
};
