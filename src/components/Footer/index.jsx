import { Box, Container, Grid, useTheme } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FooterItem from 'components/FooterItem';
import MediumIcon from 'components/MediumIcon';
import Link from 'components/Link';

function Footer({ ...props }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.primary.main,
                padding: '8px',
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
                        >
                            <LinkedInIcon
                                sx={{
                                    height: '20px',
                                    width: '20px',
                                    marginRight: '4px',
                                }}
                            />
                            Find me on LinkedIn
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link
                            href="https://github.com/HumbertoBPF"
                            underline="none"
                            target="_blank"
                            rel="noopener"
                        >
                            <GitHubIcon
                                sx={{
                                    height: '20px',
                                    width: '20px',
                                    marginRight: '4px',
                                }}
                            />
                            Check my coding projects
                        </Link>
                    </FooterItem>
                    <FooterItem>
                        <Link
                            href="https://medium.com/@humbertofilho_30158"
                            underline="none"
                            target="_blank"
                            rel="noopener"
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
                            Check my Medium articles
                        </Link>
                    </FooterItem>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
