import {
  ArrowBackIos,
  Chat,
  Logout,
  NotificationsActive,
  VerifiedUser,
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../constants/routes";

const TopBar = () => {
  const navigate = useNavigate();
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
      <Box
        sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => navigate(HOME_ROUTE)}
      >
        <ArrowBackIos sx={{ color: "white", pl: 2 }} />
        <Typography variant="body1" sx={{ color: "white" }}>
          Back
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>
        Smart Stream
      </Typography>
      <Box>
        <VerifiedUser sx={{ color: "white", pr: 2 }} />
        <NotificationsActive sx={{ color: "white", pr: 2 }} />
        <Chat sx={{ color: "white", pr: 4 }} />
        <Logout sx={{ color: "white", pr: 2 }} />
      </Box>
    </Box>
  );
};

export default TopBar;
