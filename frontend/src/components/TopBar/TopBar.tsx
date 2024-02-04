import { Chat, Logout, NotificationsActive } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
        Smart Stream
      </Typography>
      <Box>
        <NotificationsActive sx={{ color: "white", pr: 2 }} />
        <Chat sx={{ color: "white", pr: 2 }} />
        <Logout sx={{ color: "white", pr: 2 }} />
      </Box>
    </Box>
  );
};

export default TopBar;
