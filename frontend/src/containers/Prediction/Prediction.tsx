import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import ChartComponent from "./components/ChartComponent";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { studentActions } from "../../redux/student/slice";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";

const Home = () => {
  const dispatch = useAppDispatch();
  const predictStream = useSelector(
    (state: RootState) => state.studentList.predictedData
  );
  const [studentId, setStudentId] = useState<string>("");

  useEffect(() => {}, [dispatch]);

  return (
    <Box
      sx={{
        py: 10,
        px: 10,
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <ChartComponent />
      <Box
        component={Paper}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          height: "100%",
          gap: "20px",
        }}
      >
        <Typography variant="h4">Stream Predictor</Typography>
        <Box sx={{ px: 2 }}>
          <TextField
            label="Student ID"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            margin="normal"
            fullWidth
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              dispatch(studentActions.predictStream(studentId));
            }}
            fullWidth
          >
            Predict
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
