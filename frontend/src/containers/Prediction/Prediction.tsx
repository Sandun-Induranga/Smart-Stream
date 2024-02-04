import {
  Box,
  Button,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import ChartComponent from "./components/ChartComponent";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { studentActions } from "../../redux/student/slice";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";

const Prediction = () => {
  const dispatch = useAppDispatch();
  const predictStream = useSelector(
    (state: RootState) => state.studentList.predictedData
  );
  const isStreamLoading = useSelector(
    (state: RootState) => state.studentList.isStreamLoading
  );
  const [studentId, setStudentId] = useState<string>("");

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <TopBar />
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
            p: 4,
          }}
        >
          <Typography variant="h4">Stream Predictor</Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              label="Student ID"
              value={studentId}
              onChange={(e) => {
                setStudentId(e.target.value);
              }}
              margin="normal"
              fullWidth
            />
            {isStreamLoading && <CircularProgress />}
            <Typography variant="h6" textAlign={"center"}>
              {predictStream.student}
            </Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              onClick={() => {
                dispatch(studentActions.predictStream(studentId));
              }}
              fullWidth
            >
              Predict
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{ mt: 2 }}
              onClick={() => {}}
              fullWidth
            >
              Reset
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Prediction;
