import { useEffect, useState } from 'react';
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { DeleteOutlineRounded } from '@mui/icons-material';
import { blue, red } from '@mui/material/colors';

import { IAccount } from '../../../services/getAccount';
import { useAuctionCreator } from '../../../hooks/useAuctionCreator';
import { useAuctions } from '../../../hooks/useAuctions';

const defaultImg = 'https://cdn.hswstatic.com/gif/yard-sale-1.jpg';

export function Listings({ account }: { account: IAccount }) {
  const { loading, auctions, getAccountAuctions } = useAuctions();
  const { auctionCreated, setCreating, setWinner, creating, unpublishAuction } =
    useAuctionCreator();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getAccountAuctions({});
  }, [auctionCreated, creating]);

  const handleWinner = (auctionId: string, applierId: string) => {
    setCreating(true);

    setWinner(auctionId, applierId)
      .then((data) => {
        setCreating(false);
      })
      .catch((error) => {
        setCreating(false);
        setErrorMsg(error.message);
        console.log(error.message);
      });
  };

  const handleRemoveListing = (auctionId: string) => {
    setCreating(true);

    unpublishAuction({ auctionId })
      .then((data) => {
        setCreating(false);
      })
      .catch((error) => {
        setCreating(false);
        setErrorMsg(error.message);
        console.log(error.message);
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
                  <Typography id="modal-modal-title">
                    Here we have our popular Auctions listed!
                  </Typography>
                </div>

                {Boolean(errorMsg) && (
                  <div>
                    <Alert severity="error">{errorMsg}</Alert>
                  </div>
                )}

                {auctions.length > 0 ? (
                  auctions.map((auct) => {
                    const alreadyApplied = auct.appliers?.includes(
                      account?._id as string,
                    );

                    const myListing = auct.owner._id === account._id;

                    console.log(myListing);

                    return (
                      <Card
                        key={auct._id}
                        sx={{ maxWidth: 345, marginBottom: 4, padding: 2 }}
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
                          action={
                            <Typography variant="body2" color="text.secondary">
                              <b>{auct.status.toUpperCase()}</b>
                            </Typography>
                          }
                          title={auct.title}
                          subheader={new Date(auct.createdAt).toLocaleString()}
                        />

                        <CardMedia
                          component="img"
                          height="100"
                          image={auct.imageUrl || defaultImg}
                          loading="lazy"
                          alt="Sell"
                        />

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            {auct.description}
                            <Divider />
                            <b>Total people applied: {auct.appliers?.length}</b>
                          </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() => handleRemoveListing(auct?._id)}
                            >
                              <DeleteOutlineRounded />
                            </IconButton>
                          </Tooltip>
                        </CardActions>

                        <Collapse
                          key={auct?._id}
                          in={true}
                          timeout="auto"
                          unmountOnExit
                        >
                          {auct?.appliers &&
                            auct?.status !== 'finished' &&
                            auct?.appliers?.length > 0 &&
                            auct.appliers.map((app) => {
                              return (
                                <Card
                                  key={app?._id}
                                  style={{ marginBottom: 10 }}
                                >
                                  <CardContent>
                                    <Typography>
                                      Email: {app?.profile?.email}
                                    </Typography>

                                    <Typography>
                                      Phone: {app?.profile?.phone}
                                    </Typography>
                                  </CardContent>

                                  <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) =>
                                      handleWinner(auct?._id, app?._id)
                                    }
                                  >
                                    SELECT WINNER!
                                  </Button>
                                </Card>
                              );
                            })}

                          {auct?.winner && auct?.status === 'finished' && (
                            <Card>
                              <CardContent>
                                <Typography paragraph>
                                  You choose {auct?.winner?.firstName} as the
                                  winner!
                                </Typography>
                              </CardContent>

                              <CardContent>
                                <Typography paragraph>
                                  Contact Details:
                                </Typography>
                                <Typography>
                                  Email: {auct?.winner?.profile?.email}
                                </Typography>
                                <Typography>
                                  Phone: {auct?.winner?.profile?.phone}
                                </Typography>
                              </CardContent>
                            </Card>
                          )}
                        </Collapse>
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
                      Upss It seems that nobody have something to drop off here,
                      start creating!
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
