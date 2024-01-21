import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChartComponent from "./components/ChartComponent";
import { useAppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const [studentId, setStudentId] = useState<string>("");

  useEffect(() => {}, [dispatch]);

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
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <Typography variant="h4">Stream Predictor</Typography>
        <Box sx={{ height: "10px" }}>
          <TextField
            label="Student ID"
            value={""}
            onChange={(e) => {}}
            margin="dense"
          />
          <Button variant="contained" sx={{ mt: 2 }}>
            Predict
          </Button>
        </Box>

        {/* <CircularProgress /> */}
        <ChartComponent predicted_sub="" scores={[]} streams={[]} />
      </Box>
    </Box>
  );
};

export default Home;
