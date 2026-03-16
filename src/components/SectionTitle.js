import { Box, Typography } from "@mui/material";

function SectionTitle({title}) {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
