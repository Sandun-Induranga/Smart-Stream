import {
  Box,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 10,
        height: "50vh",
        display: "flex",
        justifyContent: "end",
      }}
    >
      <Box
        component={Paper}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">Stream Predictor</Typography>
          <TextField
            label="Student ID"
            value={""}
            onChange={(e) => {}}
            margin="dense"
          />
        </Box>
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Home;
