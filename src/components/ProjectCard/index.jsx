import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

function ProjectCard({ item }) {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                sx={{ objectFit: 'contain', backgroundColor: '#eeeeee' }}
                component="img"
                alt="Project image"
                height="140"
                image={item.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ flexGrow: 1, alignItems: 'end' }}>
                <Button
                    href={item.link}
                    target="_blank"
                    rel="noopener"
                    size="small"
                >
                    See on GitHub
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
