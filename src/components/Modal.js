import * as React from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DataModal({ showModal, data, onClose }) {
  //   const [open] = React.useState(showModal);

  const handleClose = () => onClose(false);

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Box sx={style}>
          <Box>
            <Box sx={{
                mb: 2,
            }}>
              <Typography sx={{ fontWeight: 'bold' }}>Invoice No</Typography>
              <Typography sx={{}}>{data.invoiceNo}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Client Name</Typography>
                <Typography sx={{}}>{data.clientName}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Project Name</Typography>
                <Typography sx={{}}>{data.projectName}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Invoice amount</Typography>
                <Typography sx={{}}>{data.invoiceAmount}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Payments received</Typography>
                <Typography sx={{}}>{data.receivedAmount}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Due Date</Typography>
                <Typography sx={{}}>
                  {
                    data.dueDate
                    ? 
                    new Date(data.dueDate).toLocaleDateString()
                    : 
                    "invalid date"
                }
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>Status</Typography>
                <Typography sx={{}}>{data.status}</Typography>
              </Box>
            </Box>
            <Box sx={{
                mb: 2
            }}>
              <Typography sx={{ fontWeight: 'bold' }}>Notes</Typography>
              <Typography sx={{}}>{data.notes}</Typography>
            </Box>
            <Box sx={{
                mb: 2
            }}>
              <Typography sx={{ fontWeight: 'bold' }}>Breakdown Summary</Typography>
              <Typography sx={{}}>
                Design: {data.breakDown.design} <br />
                Development: {data.breakDown.development} <br />
                Testing: {data.breakDown.testing} <br />
                Deployment: {data.breakDown.deployment}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default DataModal;
