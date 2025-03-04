import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { green } from '@mui/material/colors';

import ProTip from './ProTip';
import Copyright from './Copyright';
import Album from './Album';
import ContactUs from './pages/Contact';
import AboutUs from './pages/About';
import AppHeaderBar from './AppHeaderBar';
import AppFooter from './AppFooter';

// import { Router, Route } from 'preact-router';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

const defaultTheme = theme;


export default function App() {
  return (
    // <BrowserRouter basename={'/finelineLaser'}>
    <BrowserRouter>
    <ThemeProvider theme={defaultTheme}>
    {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
    <CssBaseline />
    <AppHeaderBar />
    <Routes>
    {/* <Router basename="finelineLaser">
      <Album path="/" />
      <ContactUs path="/contact" />
      <AboutUs path="/about" />
      <Error type="404" default />
    </Router> */}
      <Route path="" element={<Album />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}
