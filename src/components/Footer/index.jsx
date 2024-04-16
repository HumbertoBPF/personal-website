import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterItem from 'components/FooterItem';
import MediumIcon from 'components/MediumIcon';

function Footer({ ...props }) {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                padding: '8px 0',
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    sx={{
                        color: 'white',
                    }}
                    container
                    display="flex"
                    direction="column"
                    {...props}
                >
                    <FooterItem>
                        <Link
                            href="https://www.linkedin.com/in/humberto-bpf"
                            underline="none"
                            target="_blank"
                            rel="noopener"
                            data-testid="linkedin-link"
                        >
                            <LinkedInIcon
                                sx={{
                                    height: '20px',
                                    width: '20px',
                                    marginRight: '4px',
                                }}
                            />
                            <Typography variant="body2">
                                Find me on LinkedIn
                            </Typography>
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link
                            href="https://github.com/HumbertoBPF"
                            underline="none"
                            target="_blank"
                            rel="noopener"
                            data-testid="github-link"
                        >
                            <GitHubIcon
                                sx={{
                                    height: '20px',
                                    width: '20px',
                                    marginRight: '4px',
                                }}
                            />
                            <Typography variant="body2">
                                Check my coding projects
                            </Typography>
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link
                            href="https://medium.com/@humbertofilho_30158"
                            underline="none"
                            target="_blank"
                            rel="noopener"
                            data-testid="medium-link"
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: '4px',
                                }}
                            >
                                <MediumIcon />
                            </Box>
                            <Typography variant="body2">
                                Check my Medium articles
                            </Typography>
                        </Link>
                    </FooterItem>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
