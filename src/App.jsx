import Base from 'pages/Base';
import Home from 'pages/Home';
import AboutMe from 'pages/AboutMe';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Projects from 'pages/Projects';
import NotFound from 'pages/NotFound';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                },
            },
        },
    },
    palette: {
        primary: { main: '#004aad' },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Base />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/about-me" element={<AboutMe />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
