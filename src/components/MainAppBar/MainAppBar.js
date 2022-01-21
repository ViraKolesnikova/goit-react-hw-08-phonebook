import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { Oval } from 'react-loader-spinner';

import { useFetchCurrentUserQuery } from '../../redux/auth/auth-reducer';
import { getToken, getUserStatus } from '../../redux/auth/authSelector';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';
import { ovalWrapper } from '../Loader/Loader';


export default function MainAppBar() {
  const isLoggedIn = useSelector(getUserStatus);
  const token = useSelector(getToken);
  const { isLoading } = useFetchCurrentUserQuery(token, {
    skip: token === null || isLoggedIn,
  });

  return (
    <>
      {isLoading ? (
        <Oval
          arialLabel="loading-indicator"
          height="100"
          width="100"
          color="rgb(197 205 208 )"
          wrapperStyle={ovalWrapper}
        />
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              style={{ backgroundColor: 'rgb(28, 68, 156)' }}
            >
              <Toolbar>
                <PhoneRoundedIcon />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, marginLeft: '10px' }}
                >
                  Phonebook
                </Typography>

                {isLoggedIn ? <UserNav /> : <AuthNav />}
              </Toolbar>
            </AppBar>
          </Box>

          <Outlet />
        </>
      )}
    </>
  );
}
