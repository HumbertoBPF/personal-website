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
            <Container sx={{ marginTop: '32px' }}>
                <Grid container>
                    <Grid sx={{ padding: '0 32px' }} item xs={12} md={6}>
                        <Avatar
                            sx={{ width: '96px', height: '96px' }}
                            alt="Humberto Borges"
                            src={MyPicture}
                            data-testid="avatar"
                        />
                        <Typography
                            mt="32px"
                            variant="h4"
                            data-testid="greeting"
                        >
                            Hi! I&apos;m Humberto Borges
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
                            <Typography variant="h5" data-testid="profession">
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
                                    data-testid="linkedin-button"
                                >
                                    Contact me
                                </Button>
                                <Button
                                    sx={{ marginLeft: '8px' }}
                                    variant="outlined"
                                    onClick={() => navigate('/projects')}
                                    data-testid="projects-button"
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
                        <Grid
                            sx={{ padding: '0px 32px' }}
                            item
                            xs={12}
                            md={6}
                            data-testid="work-experience-section"
                        >
                            <Typography
                                sx={{ marginBottom: '16px' }}
                                variant="h5"
                                data-testid="section-title"
                            >
                                Work experience
                            </Typography>

                            {workExperiences.map((item, index) => (
                                <CurriculumItem
                                    key={index}
                                    item={item}
                                    data-testid={`work-experience-${index}`}
                                />
                            ))}
                        </Grid>
                        <Grid
                            sx={{ padding: '0px 32px' }}
                            item
                            xs={12}
                            md={6}
                            data-testid="educational-background-section"
                        >
                            <Typography
                                sx={{ marginBottom: '16px' }}
                                variant="h5"
                                data-testid="section-title"
                            >
                                Degrees and certifications
                            </Typography>

                            {degreesAndCertifications.map((item, index) => (
                                <CurriculumItem
                                    key={index}
                                    item={item}
                                    data-testid={`education-${index}`}
                                />
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;
