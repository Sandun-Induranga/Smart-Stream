import { Box, Paper, Typography } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import studentsImage from "../../assets/students.jpg";
import predictionImage from "../../assets/prediction.jpg";
import { useNavigate } from "react-router-dom";
import { PREDICT_ROUTE, STUDENT_ROUTE } from "../../constants/routes";
import TopBar from "../../components/TopBar/TopBar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopBar />
      <Box>
        <Typography m={2} variant="h4" color={"Highlight"} textAlign={"center"}>
          Welcome to Smart Stream
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            p: 10,
            height: "50vh",
          }}
        >
          <Box
            component={Paper}
            sx={{ p: 2, borderRadius: 4, cursor: "pointer" }}
            onClick={() => navigate(STUDENT_ROUTE)}
          >
            <Box
              component={"img"}
              src={studentsImage}
              sx={{ width: "40vw", height: "50vh", borderRadius: 8 }}
            />
            <Typography
              variant="h6"
              mt={4}
              color={"GrayText"}
              textAlign={"center"}
            >
              Manage Students
            </Typography>
          </Box>
          <Box
            component={Paper}
            sx={{ p: 2, borderRadius: 4, cursor: "pointer" }}
            onClick={() => navigate(PREDICT_ROUTE)}
          >
            <Box
              component={"img"}
              src={predictionImage}
              sx={{ width: "40vw", height: "50vh", borderRadius: 8 }}
            />
            <Typography
              variant="h6"
              mt={4}
              color={"GrayText"}
              textAlign={"center"}
            >
              Predict Streams
            </Typography>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
