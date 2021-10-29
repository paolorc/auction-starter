import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Collapse,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAuctionCreator } from '../../hooks/useAuctionCreator';

import { useAuctions } from '../../hooks/useAuctions';
import { IAccount } from '../../services/getAccount';

export function Winner({ account }: { account: IAccount }) {
  const { loading, auctions, getAuctions } = useAuctions();
  const { auctionCreated } = useAuctionCreator();

  useEffect(() => {
    getAuctions({ showcased: true, winners: true });
  }, [auctionCreated]);

  return (
    <div>
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          {loading ? (
            <Grid container direction="column" alignContent="center">
              <CircularProgress color="secondary" />
            </Grid>
          ) : (
            <Box sx={{ width: '100%' }} flexGrow={1}>
              <div style={{ width: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <Typography id="modal-modal-title">
                    Congrats our winners!
                  </Typography>
                </div>

                {auctions.length > 0 ? (
                  auctions.map((auct) => {
                    const alreadyApplied = auct.appliers?.includes(
                      account._id as string,
                    );

                    const myListing = auct.owner._id === account._id;

                    console.log(myListing);

                    return (
                      <Card
                        key={auct._id}
                        sx={{ maxWidth: 345, marginBottom: 4 }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              sx={{ bgcolor: blue[500] }}
                              aria-label="recipe"
                            >
                              {auct.owner.firstName.slice(0, 1)}
                              {auct.owner.lastName.slice(0, 1)}
                            </Avatar>
                          }
                          title={auct.title}
                          subheader={new Date(auct.createdAt).toLocaleString()}
                        />
                        <CardMedia
                          component="img"
                          height="100"
                          image={auct.imageUrl}
                          loading="lazy"
                          alt="Sell"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {auct.description}
                            <Divider />

                            {auct?.winner?._id === account?._id ? (
                              <b>
                                Amazing you won! Please contact with auction
                                responsible. Thank you!
                              </b>
                            ) : (
                              <b>
                                {auct?.winner?.firstName}{' '}
                                {auct?.winner?.lastName} Won!
                              </b>
                            )}
                          </Typography>
                        </CardContent>

                        {auct?.winner?._id === account?._id && (
                          <Collapse
                            style={{ backgroundColor: 'skyblue' }}
                            key={auct?._id}
                            in={true}
                            timeout="auto"
                            unmountOnExit
                          >
                            <CardContent>
                              <Typography>
                                Email: {auct?.owner?.profile?.email}
                                Phone: {auct?.owner?.profile?.phone}
                              </Typography>
                            </CardContent>
                          </Collapse>
                        )}
                      </Card>
                    );
                  })
                ) : (
                  <div
                    style={{
                      padding: '20px',
                    }}
                  >
                    <Typography id="modal-modal-title">
                      Upss It seems that nobody have won yet, start creating and
                      applying some listings!
                    </Typography>
                  </div>
                )}
              </div>
            </Box>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
