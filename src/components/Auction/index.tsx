import {
  Alert,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';

import { useAuctions } from '../../hooks/useAuctions';

export function Auction() {
  const { loading, auctions, getAuctions } = useAuctions();
  const [errorMsg, setErrorMsg] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {}, [loading]);

  //   const handleProcessInvoices = () => {
  //     setErrorMsg('');
  //     setCreating(true);

  //     const completedSelectedRides = rows
  //       .filter((row) => row.status === 'COMPLETED' && row.selected)
  //       .map((row) => row.id);

  //     console.log(completedSelectedRides, 'rides to send');

  //     createInvoice({
  //       companyName: company,
  //       taxpayerNumber: taxpayer,
  //       ridesId: completedSelectedRides,
  //     })
  //       .then(() => {
  //         // change tab
  //         toggleTab('', tabNames.Invoices);

  //         setCreating(false);
  //         toggleModal();
  //       })
  //       .catch((error) => {
  //         setCreating(false);
  //         setErrorMsg(error.message);

  //         console.log(error.message);
  //       });
  //   };

  const toggleModal = () => setOpen((prev) => !prev);

  const handleClose = () => {
    toggleModal();
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
                onClose={handleClose}
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

                  {/* <div>
                    <TextField
                      fullWidth
                      required
                      id="companyName"
                      label="Company Name"
                      margin="normal"
                      onChange={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                  </div>

                  <div>
                    <TextField
                      fullWidth
                      required
                      id="Taxpayer Number"
                      label="Taxpayer Number"
                      margin="normal"
                      onChange={(e) => setTaxpayer(e.target.value)}
                      value={taxpayer}
                    />
                  </div> */}

                  <Box marginTop="10">
                    <Button
                      // disabled={creating}
                      fullWidth
                      variant="contained"
                      color="info"
                      // onClick={handleProcessInvoices}
                    >
                      Create Invoices
                    </Button>
                  </Box>
                </Box>
              </Modal>

              <div style={{ width: '100%' }}>
                <div style={{ padding: '20px' }}>
                  <Typography id="modal-modal-title">
                    Select one or more COMPLETED rides to start generating
                    invoices
                  </Typography>
                </div>

                {/* {(pickAll || rows.some((ride) => ride.selected === true)) && (
                  <div style={{ padding: '20px' }}>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={toggleModal}
                    >
                      Create Invoice
                    </Button>
                  </div>
                )} */}

                {Boolean(errorMsg) && (
                  <div>
                    <Alert severity="error">{errorMsg}</Alert>
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
