import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <Box sx={{ flexGrow: 1, m: 0, p: 0 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Finance Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
