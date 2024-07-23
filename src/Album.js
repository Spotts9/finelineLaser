import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IconButton, Tooltip } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import FlareIcon from '@mui/icons-material/FlareSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from './theme'
import { green } from '@mui/material/colors';

import Contact from './pages/Contact';
import About from './pages/About';
import AppHeaderBar from './AppHeaderBar';
import Copyright from './Copyright';
import AppFooter from './AppFooter';


const handlePageChange = function () {
  window.location.href="/"
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = theme;

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
          <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://img1.wsimg.com/isteam/ip/fb655192-8118-4cee-960f-58636ba1b2b0/d367a38b-737b-4fe2-a1b3-5e6a7ee1969e.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:1240,h:620,cg:true"
                  />
                  <CardContent sx={{ flexGrow: 1, justifyContent:'center'}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Empowering Innovation Through Precision
                    </Typography>
                    <Typography>
                    Fine Line Laser Cutting Inc. is a general metals shop.<br/>
                    Every part we cut is a testament to our commitment to excellence. Let’s create something extraordinary together!
                    </Typography>
                  </CardContent>
                  <CardActions 
                    sx={{pt: 4, justifyContent: "center"}}
                    border={1}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                  >
                    <Button color="secondary" variant="contained" href="/finelineLaser/contact">Get In Touch</Button>
                  </CardActions>
                </Card>
          </Container>
        </Box>
        {/* End Hero Unit */}
        
      </main>
      {/* Footer */}
      <AppFooter/>
      {/* End footer */}
    </ThemeProvider>
  );
}
