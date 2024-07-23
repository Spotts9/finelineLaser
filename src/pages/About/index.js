import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { IconButton, Tooltip } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import FlareIcon from '@mui/icons-material/FlareSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
import theme from '../../theme'
import { green } from '@mui/material/colors';

// About Us page sections
import Information from "./sections/Information";
import Team from "./sections/Team";

const defaultTheme = theme;

// Images
import bgImage from "../../assets/laserhero.png";

function AboutUs() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <Box
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      > */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
          {/* <Team/> */}
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>

            <CardContent sx={{ flexGrow: 1, justifyContent: "center" }}>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography gutterBottom variant="h5" component="h2" sx={{ flexGrow: 1, justifyContent: "center" }}>
                    About
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    At Fine Line Laser Cutting, we specialize in custom industrial laser cutting that caters to your exact specifications, turning your ideas into reality. We’re not just cutting metals; we’re shaping possibilities. Whether you’re a designer, engineer, or manufacturer, our team is here to bring your vision to life.
                    <br /><br />
                    From prototypes to production runs, our lasers handle it all. Bring us your CAD files, sketches, or napkin drawings—we’ll refine them for laser cutting.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent sx={{ flexGrow: 1, justifyContent: "center" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography gutterBottom variant="h5" component="h2" sx={{ flexGrow: 1, justifyContent: "center" }}>
                    Expertise
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Owner, David Valead is a seasoned Industrial Laser Engineer with an impressive 38 years of experience in the field. David’s legacy is etched in the components he’s cut, and his passion for precision and innovation has driven him to excel in the industry. His expertise has led to cost savings, improved product quality, and streamlined production.
                    <br/><br/>
                    David knows the intricacies of laser parameters, beam quality, and focal lengths. He can optimize laser systems for maximum efficiency and precision and will tailor processes to suit specific applications.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent sx={{ flexGrow: 1, justifyContent: "center" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography gutterBottom variant="h5" component="h2" sx={{ flexGrow: 1, justifyContent: "center" }}>
                  Why Choose Fine Line Laser Cutting?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Collaboration: We’re not just a vendor; we’re a partner. Your success is our success. We don’t believe in one-size-fits-all. Your project is unique, and so are our solutions.
                  <br/><br/>
                  Design and Prototyping: Our team translates your vision into digital designs. We create prototypes to ensure perfection before production.
                  <br/><br/>
                  Materials Mastery: From stainless steel, mild steel to shim stock, and more, we understand the nuances and unique properties of each material, ensuring optimal cuts every time.
                  <br/><br/>
                  Precision and Quality: Our laser cutting process ensures clean, burr-free cuts and minimal kerf width, meeting the highest industry tolerance standards. We pay meticulous attention to detail to deliver optimum results. 
                  <br/><br/>
                  Speed and Efficiency: Deadlines matter. We pride ourselves on efficient turnaround times without compromising quality.
                  <br/><br/>
                  Metal Fabrication: Beyond cutting, we offer bending, welding, and finishing services.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
            <CardContent sx={{ flexGrow: 1, justifyContent: "center" }}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography gutterBottom variant="h5" component="h2" sx={{ flexGrow: 1, justifyContent: "center" }}>
                    Materials Mastery
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Stainless Steel: From 304 to 316L, our lasers handle stainless steel alloys with precision. Whether it’s a decorative panel or a functional component, we’ve got you covered.
                  <br/><br/>
                  Titanium: Our lasers cut titanium with tight tolerances.
                  <br/><br/>
                  Exotic Alloys: Inconel, Hastelloy, Monel—our expertise extends to these challenging materials.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
                  <CardActions 
                    sx={{pt: 4, justifyContent: "center", flexDirection: "column"}}
                    border={1}
                    direction="row"
                    spacing={4}
                    justifyContent="center"
                  >
                    <div spacing={3}>
                    <Typography sx={{ flexGrow: 1, justifyContent: "center" , fontSize:"large"}}>
                      Ready to elevate your projects with precision laser cutting?
                    </Typography>
                    </div>
                    <div spacing={3}>
                    <Button color="secondary" variant="contained" href="/contact">Reach Out Today</Button>
                    </div>
                  </CardActions>
                </Card>
          </Container>
        </Box>
      {/* </Box> */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
        }}
      >
        {/* <Information />
        <Team /> */}
      </Card>
    </ThemeProvider>
  );
}

export default AboutUs;
