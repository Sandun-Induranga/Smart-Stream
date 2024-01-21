import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import ChartComponent from "./components/ChartComponent";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { studentActions } from "../../redux/student/slice";
import { useSelector } from "react-redux";

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
        height: "100vh",
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
          height: "100%",
        }}
      >
        <Typography variant="h4">Stream Predictor</Typography>
        <Box sx={{ height: "10px" }}>
          <TextField
            label="Student ID"
            value={studentId}
            onChange={(e) => {
              setStudentId(e.target.value);
            }}
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              dispatch(studentActions.predictStream(studentId));
            }}
          >
            Predict
          </Button>
        </Box>

        {/* <CircularProgress /> */}
      </Box>
      <ChartComponent />
    </Box>
  );
};

export default Home;
