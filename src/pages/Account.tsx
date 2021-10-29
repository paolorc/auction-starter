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
import { ExitToApp, Home } from '@mui/icons-material';

import { useUser } from '../hooks/useUser';
import { AccountApplied } from '../components/Account/Applied';
import { IAccount } from '../services/getAccount';
import { Listings } from '../components/Account/Listing';

export const tabNames = {
  Applied: 'applied',
  Listings: 'listings',
};

const renderView = (account: IAccount, tab: string) => {
  const component = {
    applied: <AccountApplied account={account} />,
    finished: <AccountApplied account={account} />,
    listings: <Listings account={account} />,
  };

  return component[tab];
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
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            href="/home"
            color="inherit"
          >
            <Home />
            <Typography variant="h6" component="div">
              Back Home {account.firstName} {account.lastName}
            </Typography>
          </IconButton>

          <div style={{ width: '90%' }}></div>
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
                  <Tab value={tabNames.Listings} label="Your Listings" />
                  <Tab value={tabNames.Applied} label="Your Applies" />
                </Tabs>

                {renderView(account, tab)}
              </Box>
            )}
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
