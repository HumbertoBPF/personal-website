import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';
import MyPicture from 'assets/my_picture.png';
import workExperiences from 'assets/work-experiences.json';
import degreesAndCertifications from 'assets/degrees-and-certifications.json';
import CurriculumItem from 'components/CurriculumItem';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <Grid container>
                    <Grid sx={{ padding: '0 32px' }} item xs={12} md={6}>
                        <Avatar
                            sx={{ width: '96px', height: '96px' }}
                            alt="Humberto Borges"
                            src={MyPicture}
                        />
                        <Typography mt="32px" variant="h4">
                            Hi! I'm Humberto Borges
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{ padding: '0 32px' }}
                        item
                        container
                        alignItems="center"
                        xs={12}
                        md={6}
                    >
                        <Grid item>
                            <Typography variant="h5">
                                Full-stack developer
                            </Typography>
                            <Typography variant="body2">
                                Eager to build complex systems while following
                                the best practices to improve development and
                                client experience.
                            </Typography>
                            <Box sx={{ marginTop: '32px' }}>
                                <Button
                                    variant="contained"
                                    href="https://www.linkedin.com/in/humberto-bpf"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Contact me
                                </Button>
                                <Button
                                    sx={{ marginLeft: '8px' }}
                                    variant="outlined"
                                    onClick={() => navigate('/projects')}
                                >
                                    Check my work
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: '#eeeeee', paddingBottom: '16px' }}>
                <Container>
                    <Grid
                        sx={{ marginTop: '32px', paddingTop: '32px' }}
                        container
                    >
                        <Grid sx={{ padding: '0px 32px' }} item xs={12} md={6}>
                            <Typography
                                sx={{ marginBottom: '16px' }}
                                variant="h5"
                            >
                                Working experience
                            </Typography>

                            {workExperiences.map((item, index) => (
                                <CurriculumItem key={index} item={item} />
                            ))}
                        </Grid>
                        <Grid sx={{ padding: '0px 32px' }} item xs={12} md={6}>
                            <Typography
                                sx={{ marginBottom: '16px' }}
                                variant="h5"
                            >
                                Degrees and certifications
                            </Typography>

                            {degreesAndCertifications.map((item, index) => (
                                <CurriculumItem key={index} item={item} />
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;
