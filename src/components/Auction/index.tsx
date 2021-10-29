import {
  ExpandMore,
  FavoriteBorder,
  StarBorderTwoTone,
} from '@mui/icons-material';
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  CircularProgress,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { blue, red } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { useAuctionCreator } from '../../hooks/useAuctionCreator';

import { useAuctions } from '../../hooks/useAuctions';
import { IAccount } from '../../services/getAccount';

const defaultImg = 'https://cdn.hswstatic.com/gif/yard-sale-1.jpg';

export function Auction({ account }: { account: IAccount }) {
  const { loading, auctions, getAuctions, setAuctions } = useAuctions();
  const {
    creating,
    auctionCreated,
    publishAuction,
    setCreating,
    applyAuction,
    discardAuction,
  } = useAuctionCreator();
  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    getAuctions({ showcased: true, status: 'active' });
  }, [auctionCreated]);

  const cleanPublishState = () => {
    setImageUrl('');
    setCategory('');
    setDescription('');
    setTitle('');
  };

  const handlePublisher = () => {
    setErrorMsg('');
    setCreating(true);

    publishAuction({
      title,
      description,
      category,
      imageUrl,
    })
      .then(() => {
        setCreating(false);
        toggleModal();
      })
      .catch((error) => {
        setCreating(false);
        setErrorMsg(error.message);
        console.log(error.message);
        toggleModal();
      });
  };

  const handleApply = (auctionId: string) => {
    setCreating(true);

    applyAuction(auctionId).then((data) => {
      setCreating(false);
    });
  };

  const handleDiscard = (auctionId: string) => {
    setCreating(true);

    discardAuction(auctionId).then((data) => {
      setCreating(false);
    });
  };

  const toggleModal = () => {
    setOpen((prev) => !prev);
    cleanPublishState();
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
              <Modal
                open={open}
                onClose={toggleModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Please complete the fields
                  </Typography>

                  <div>
                    <TextField
                      fullWidth
                      required
                      label="Tilte"
                      margin="normal"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>

                  <div>
                    <TextField
                      fullWidth
                      required
                      label="Description"
                      margin="normal"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>

                  <div>
                    <TextField
                      fullWidth
                      required
                      label="Category"
                      margin="normal"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    />
                  </div>

                  <div>
                    <TextField
                      fullWidth
                      label="Imagen URL (if not, default is applied)"
                      margin="normal"
                      onChange={(e) => setImageUrl(e.target.value)}
                      value={imageUrl}
                    />
                  </div>

                  <Box marginTop="10">
                    <Button
                      disabled={creating}
                      fullWidth
                      variant="contained"
                      color="info"
                      onClick={handlePublisher}
                    >
                      Create Auction!
                    </Button>
                  </Box>
                </Box>
              </Modal>

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

                <div style={{ padding: '20px' }}>
                  <Button variant="outlined" color="info" onClick={toggleModal}>
                    Create New Auction
                  </Button>
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
                          {myListing && (
                            <Typography variant="body2" color="text.secondary">
                              Share your listing with your friends!
                            </Typography>
                          )}

                          {!alreadyApplied && auct.owner._id !== account._id && (
                            <Button
                              variant="contained"
                              color="success"
                              onClick={(e) => handleApply(auct?._id)}
                            >
                              Apply now =D
                            </Button>
                          )}

                          {alreadyApplied && auct.owner._id !== account._id && (
                            <Button
                              variant="contained"
                              color="warning"
                              onClick={(e) => handleDiscard(auct?._id)}
                            >
                              Discard now =(
                            </Button>
                          )}

                          <IconButton aria-label="share">
                            {/* <ShareIcon /> */}
                          </IconButton>
                          {/* <ExpandMore
                          expand={expanded}
                          onClick={handleExpandClick}
                          aria-expanded={expanded}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore> */}
                        </CardActions>

                        <Collapse
                          // in={expanded}
                          timeout="auto"
                          unmountOnExit
                        >
                          <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography>
                              Set aside off of the heat to let rest for 10
                              minutes, and then serve.
                            </Typography>
                          </CardContent>
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
                      <Box marginTop="10" paddingTop="30">
                        <Button
                          // disabled={creating}
                          fullWidth
                          variant="contained"
                          color="info"
                          // onClick={() => <Redirect to={} />}
                        >
                          Create Auction!
                        </Button>
                      </Box>
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
