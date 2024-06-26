import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import projects from 'assets/projects.json';
import ProjectCard from 'components/ProjectCard';
import CompetencesList from 'components/CompetencesList';
import webCompetences from 'assets/competences/web.json';
import mobileCompetences from 'assets/competences/mobile.json';
import testingCompetences from 'assets/competences/testing.json';
import awsCompetences from 'assets/competences/aws.json';

function Projects() {
    return (
        <>
            <Container sx={{ marginTop: '32px' }}>
                <Typography
                    textAlign="center"
                    variant="h4"
                    data-testid="projects-title"
                >
                    Selected projects
                </Typography>
                <Grid sx={{ margin: '16px -16px' }} container spacing="16px">
                    {projects.map((project, index) => (
                        <Grid
                            key={index}
                            sx={{ display: 'flex' }}
                            item
                            xs={12}
                            md={6}
                        >
                            <ProjectCard
                                item={project}
                                data-testid={`project-${index}`}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Box sx={{ backgroundColor: '#eeeeee', paddingBottom: '32px' }}>
                <Container>
                    <Typography
                        sx={{ marginTop: '32px', paddingTop: '32px' }}
                        textAlign="center"
                        variant="h4"
                        data-testid="competences-title"
                    >
                        Competences
                    </Typography>
                    <Typography
                        sx={{ paddingTop: '16px' }}
                        textAlign="center"
                        variant="body2"
                    >
                        The projects enumerated above and my working experience
                        gave me the oportunity to learn the following
                        competences.
                    </Typography>
                    <CompetencesList
                        label={webCompetences.label}
                        items={webCompetences.items}
                        data-testid="web-competences"
                    />
                    <CompetencesList
                        label={mobileCompetences.label}
                        items={mobileCompetences.items}
                        data-testid="mobile-competences"
                    />
                    <CompetencesList
                        label={testingCompetences.label}
                        items={testingCompetences.items}
                        data-testid="testing-competences"
                    />
                    <CompetencesList
                        label={awsCompetences.label}
                        items={awsCompetences.items}
                        data-testid="aws-competences"
                    />
                </Container>
            </Box>
        </>
    );
}

export default Projects;
