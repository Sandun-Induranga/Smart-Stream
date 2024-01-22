import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ width: "100vw", textAlign: "center" }}
        color="text.secondary"
        variant="caption"
        textAlign={"center"}
      >
        Copyright @ Sandun Induranga
      </Typography>
    </Box>
  );
};

export default Footer;
