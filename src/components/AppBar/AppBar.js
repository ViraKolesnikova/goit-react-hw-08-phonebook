import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';

import { getUserStatus } from '../../redux/auth/authSelector';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';


export default function MainAppBar() {
  const isLoggedIn = useSelector(getUserStatus);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'rgb(28, 68, 156)'}}>
          <Toolbar>
            <PhoneRoundedIcon/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: '10px' }}>
            Phonebook
            </Typography>
            
            {isLoggedIn ? <UserNav/>: <AuthNav/>}          
        </Toolbar>
      </AppBar>
    </Box>

      <Outlet/>
    </>
  );
}
