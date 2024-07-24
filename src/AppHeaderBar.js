import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Tooltip } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import FlareIcon from '@mui/icons-material/FlareSharp';


import Contact from './pages/Contact';
import About from './pages/About';
import Album from './Album';

import logoUrl from './assets/finelinelogo.svg';

export default function AppHeaderBar() {

  return (
    <AppBar position="relative">
    <Toolbar disableGutters>

      <Tooltip title="Fine Line Laser Cutting">
      <IconButton
        href="/"
        size="large"
        edge="start"
        color="white"
        aria-label="Fine Line Laser Cutting"
        sx={{ mr: 2 }}
      >
        <FlareIcon style={{ color: "white" }}/>
      </IconButton>
      </Tooltip>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="secondary" noWrap>
        Fine Line Laser Cutting
      </Typography>
      <Button color="inherit" href='/contact' target='_self'>Contact Us</Button>
      <Button color="inherit" href='/about' target='_self'>About</Button>
      <Button color="inherit">Portfolio</Button>
    </Toolbar>
  </AppBar>
  );
}
