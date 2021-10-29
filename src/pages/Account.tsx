import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import {
  AppBar,
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { useUser } from '../hooks/useUser';

export const tabNames = {
  Applied: 'applied',
  Finished: 'finished',
  Listings: 'listings',
};

export function Account() {
  const { account, fetchAccount, isLoggedIn, loginLoading, logout } = useUser();
  const [tab, setTab] = useState(tabNames.Listings);

  useEffect(() => {
    if (isLoggedIn && !account.firstName && !loginLoading) {
      console.log('fetching missing account data!');

      fetchAccount();
    }
  }, [isLoggedIn, account, fetchAccount]);

  if (!isLoggedIn) {
    console.log('Needed to log!');

    return <Redirect to="/login" />;
  }

  const handleExit = () => {
    logout();
  };

  const handleChange = (_event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box height="150">
      <AppBar position="static">
        <Box display="flex" flexDirection="row" alignItems="center">
          <Typography variant="h6" component="div">
            Profile {account.name} {account.lastName}
          </Typography>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleExit}
            color="inherit"
          >
            <ExitToApp />
          </IconButton>
        </Box>
      </AppBar>

      <div>
        <Grid
          container
          direction="column"
          alignContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            {loginLoading ? (
              <Grid container direction="column" alignContent="center">
                <CircularProgress color="secondary" />
              </Grid>
            ) : (
              <Box sx={{ width: '100%' }} flexGrow={1}>
                <Tabs
                  value={tab}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                >
                  <Tab value={tabNames.Listings} label="Listings" />
                  <Tab value={tabNames.Applied} label="Applied" />
                  <Tab value={tabNames.Finished} label="Finished" />
                </Tabs>

                {/* {tab === tabNames.Listings ? (
                  <Ride toggleTab={handleChange} />
                ) : (
                  <Invoice />
                )} */}
              </Box>
            )}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
