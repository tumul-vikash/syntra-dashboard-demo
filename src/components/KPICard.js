import { Box, Typography } from "@mui/material";

function KPICard({title, value}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 2,
        width: "20%",
        minWidth: "20%",
        backgroundColor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontSize: "18px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "semi-bold",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontSize: "17px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: "bold",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default KPICard;
