import {
  Avatar,
  Button,
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
import { useAuctionCreator } from '../../../hooks/useAuctionCreator';

import { useAuctions } from '../../../hooks/useAuctions';
import { IAccount } from '../../../services/getAccount';

export function AccountApplied({ account }: { account: IAccount }) {
  const { loading, auctions, getAuctions } = useAuctions();
  const { auctionCreated, discardAuction, setCreating } = useAuctionCreator();

  useEffect(() => {
    getAuctions({ applied: true });
  }, [auctionCreated]);

  const handleDiscard = (auctionId: string) => {
    setCreating(true);

    discardAuction(auctionId).then((data) => {
      setCreating(false);
    });
  };

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
                  <Typography id="modal-modal-title">Your applies!</Typography>
                </div>

                {auctions.length > 0 ? (
                  auctions.map((auct) => {
                    const iWon = auct?.winner?._id === account._id;

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

                            {iWon && (
                              <b color="blue">
                                Amazing you won! Please contact with the person
                                below
                              </b>
                            )}

                            {auct?.winner && (
                              <b>
                                {auct?.winner?.firstName}{' '}
                                {auct?.winner?.lastName} Won!
                              </b>
                            )}

                            {!iWon && !auct?.winner && (
                              <div>
                                <br />
                                <Button
                                  variant="contained"
                                  color="warning"
                                  onClick={(e) => handleDiscard(auct?._id)}
                                >
                                  Discard now =(
                                </Button>
                              </div>
                            )}
                          </Typography>
                        </CardContent>

                        {iWon && (
                          <Collapse
                            key={auct?._id}
                            in={true}
                            timeout="auto"
                            unmountOnExit
                          >
                            <CardContent>
                              <Typography>
                                Email: {auct?.owner?.profile?.email}
                              </Typography>

                              <Typography>
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
                      Upss It seems that you dont have any apply to a recent
                      auction... Got and get some
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
