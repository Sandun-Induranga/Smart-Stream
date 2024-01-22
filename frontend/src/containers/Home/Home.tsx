import { Box, Paper, Typography } from "@mui/material";
import Footer from "../../components/Footer";
import studentsImage from "../../assets/students.jpg";
import predictionImage from "../../assets/prediction.jpg";

const Home = () => {
  return (
    <Box>
      <Typography variant="h4">Welcome to Smart Stream</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          p: 10,
        }}
      >
        <Box
          component={Paper}
          sx={{ p: 2, borderRadius: 4, cursor: "pointer" }}
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
  );
};

export default Home;
