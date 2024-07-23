/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import CardActions from '@mui/material/CardActions';
import CardHeader from "@mui/material/CardHeader";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Phone, Mail } from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import axios from "axios";

import { Input } from "@mui/material";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../../theme'
import { green } from '@mui/material/colors';

import AppHeaderBar from "../../AppHeaderBar";


// Routes
import { Routes } from 'react-router';

// Image
import bgImage from "../../assets/contactus.png";
import davidImage from "../../assets/images/bruce-mars.jpg";
import dennisImage from "../../assets/images/team-4.jpg";

const defaultTheme = theme;

const handleGetInTouch = (event) => {
    event.preventDefault();
    const formData={
      fName: "",
      lName: "",
      contactPhone: "",
      contactEmail: "",
      message: ""
    }
    formData.fName = event.target.form.contactFName.value;
    formData.lName = event.target.form.contactLName.value;
    formData.contactPhone = event.target.form.contactPhone.value;
    formData.contactEmail = event.target.form.contactEmail.value;
    formData.message = event.target.form.contactMessage.value;
    formData.contactName = event.target.form.contactFName.value + " " + event.target.form.contactLName.value;


    // alert(JSON.stringify(formData));

    //send the email
    //append the emailjs info
    formData.service_id = "service_sh15p7m";
    formData.template_id = "template_nx4zrxx";
    formData.user_id = "hKCGqpTY9ulUhzsrJ";
    axios
    .post('https://api.emailjs.com/api/v1.0/email/send-form', {
      data:formData
    })
    .then((response) => {
      console.log(response);
    });
}

const handleCallDave =()=>{
  window.open("tel: 123-456-7890");
}



function ContactUs() {
  return (
      <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

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
                    // image="https://img1.wsimg.com/isteam/ip/fb655192-8118-4cee-960f-58636ba1b2b0/d367a38b-737b-4fe2-a1b3-5e6a7ee1969e.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:75%25/rs=w:1240,h:620,cg:true"
                    image={bgImage}
                  />
          </Card>
          <Grid paddingTop={3} container spacing={2}   direction="row" justifyContent="center">
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="contact card">
                      D
                    </Avatar>
                  }
                  title="David Valead"
                  subheader="Owner"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={davidImage}
                  alt="David Valead - Owner"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Mobile: 602-620-5166<br />
                    Office: 623-248-7575<br />
                    Email: david@finelinelasercutting.com
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton href="tel: 602-620-5166" aria-label="call David">
                    <Phone />
                  </IconButton>
                  <IconButton href="mailto:david@finelinelasercutting.com" aria-label="email David">
                    <Mail />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="contact card">
                      D
                    </Avatar>
                  }
                  title="Dennis Reynolds"
                  subheader="Estimating and Sales"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={dennisImage}
                  alt="Dennis Reynolds - Estimating and Sales"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <br/>
                    Office: 623-248-7575<br />
                    Email: dr@finelinelasercutting.com
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton href="tel: 623-248-7575" aria-label="call Dennis">
                    <Phone />
                  </IconButton>
                  <IconButton href="mailto:dr@finelinelasercutting.com" aria-label="email Dennis">
                    <Mail />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Card>
            <Box
                sx={{
                  '& > :not(style)': { m: 2 },
                }}
                noValidate
                autoComplete="off"
            >
            <form onSubmit={handleGetInTouch}>
            <CardContent sx={{ flexGrow: 1, justifyContent: 'center' }}>
              <Typography gutterBottom variant="h5" component="h2">
                Tell Us About Your Project
              </Typography>

                <Grid paddingTop={3} container spacing={1}   direction="row" justifyContent="center">
                <Grid item xs={6}>
                <TextField id="contactFName" label="First Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                <TextField id="contactLName" label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                <TextField id="contactPhone" label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                <TextField id="contactEmail" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                <TextField id="contactMessage" label="Tell Us About Your Project"
                  sx={{width: '90%'}}
                  placeholder="Tell us about your project"
                />
                </Grid>
                </Grid>
            </CardContent>
            <CardActions
              sx={{ pt: 4, justifyContent: "center" }}
              border={1}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button type="submit" color="secondary" variant="contained" onClick={handleGetInTouch}>Get In Touch</Button>
            </CardActions>
            </form>
            </Box>
          </Card>
          </Container>
        </Box>
      </ThemeProvider>
  );
}

export default ContactUs;
