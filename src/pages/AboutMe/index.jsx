import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MyPicture from 'assets/my_picture.png';

function AboutMe() {
    return (
        <Box display="flex" justifyContent="center">
            <Container sx={{ margin: '32px 0' }}>
                <Typography
                    sx={{ marginBottom: '16px' }}
                    variant="h5"
                    data-testid="about-me-title"
                >
                    Thank you for checking my website!
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={3}>
                        <CardMedia
                            sx={{ borderRadius: '4px' }}
                            component="img"
                            image={MyPicture}
                            alt="Humberto Borges"
                            data-testid="profile-picture"
                        />
                    </Grid>
                    <Grid sx={{ padding: '16px' }} item xs={12} sm={9}>
                        <Typography variant="body2">
                            I was born in Teresina, a city in the state of
                            Piaui, in the northeast of Brazil. During my school
                            time, I participated in scientific competitions,
                            which instigated my interest in exact sciences and
                            gave me the oportunity to travel the country to
                            attend some events, such as the selection for the
                            International Olympiad on Astronomy and Astrophysics
                            (IOAA). Then, I decided to do my superior studies in
                            the state Sao Paulo to have access to the best
                            universities of the country, joining the course of
                            electrical engineering at the University Of Sao
                            Paulo. In the middle of my course, I went to study
                            in France for two and half years by participating in
                            the double degree program of CentraleSupélec. Now,
                            I&apos;m double graduated by these two institutions
                            and I work as a full-stack developer, but I also
                            have experience with mobile.
                        </Typography>
                        <Typography sx={{ marginTop: '8px' }} variant="body2">
                            In my spare time, besides doing what everyone does
                            (hanging out with friends, social networks, movies
                            and series), I learn languages. I speak Portuguese,
                            English, French, and Spanish. I also studied German
                            for a while and I have some basic understanding of
                            it. I think that languages allow us to unlock a lot
                            of content and culture, so I try to do that in a fun
                            way, with videos, series, movies, and books, in
                            addition to the formal part. I also code for fun,
                            finding time to work on some personal projects.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default AboutMe;
